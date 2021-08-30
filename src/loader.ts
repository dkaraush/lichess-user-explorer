import type { Writable } from "svelte/store";

export enum PerfType {
  standard = 'standard',
  chess960 = 'chess960',
  kingOfTheHill = 'kingOfTheHill',
  threeCheck = 'threeCheck',
  antichess = 'antichess',
  atomic = 'atomic',
  horde = 'horde',
  racingKings = 'racingKings',
  crazyhouse = 'crazyhouse',

  ultraBullet = 'ultraBullet',
  bullet = 'bullet',
  blitz = 'blitz',
  rapid = 'rapid',
  classical = 'classical',
  correspondence = 'correspondence',

  puzzle = 'puzzle',
  storm = 'storm',
  racer = 'racer',
  streak = 'streak'
};
export const PerfTypes = [
  PerfType.ultraBullet,
  PerfType.bullet,
  PerfType.blitz,
  PerfType.rapid,
  PerfType.classical,
  PerfType.correspondence
];
export const PerfTypeByEvent = {
  ['Rated Ultrabullet game']: PerfType.ultraBullet,
  ['Casual Ultrabullet game']: PerfType.ultraBullet,
  ['Rated Bullet game']: PerfType.bullet,
  ['Casual Bullet game']: PerfType.bullet,
  ['Rated Blitz game']: PerfType.blitz,
  ['Casual Blitz game']: PerfType.blitz,
  ['Rated Rapid game']: PerfType.rapid,
  ['Casual Rapid game']: PerfType.rapid,
  ['Rated Classical game']: PerfType.classical,
  ['Casual Classical game']: PerfType.classical,
  ['Rated Correspondence game']: PerfType.correspondence,
  ['Casual Correspondence game']: PerfType.correspondence
}

export interface User {
  id?: string;
  username?: string;
  count?: {
    all?: number;
    me?: number;
    playing?: number;
    rated?: number;
    ai?: number;
    draw?: number;
    drawH?: number;
    import?: number;
    loss?: number;
    lossH?: number;
    win?: number;
    winH?: number;
  }
  completionRate?: number;
  createdAt?: number;
  seenAt?: number;
  nbFollowers?: number;
  nbFollowing?: number;
  online?: boolean;
  perfs?: {
    [perfType in PerfType]: {
      games?: number;
      rating?: number;
      rd?: number;
      prog?: number;
      prev?: number;
    }
  },
  profile?: {
    country?: string;
    // TODO
  },
  playTime?: {
    total?: number,
    tv?: number
  }
}

export interface Game {
  perfType?: PerfType;
  rated?: boolean;
  link?: string;
  date?: number;
  white?: {
    username?: string;
    elo?: number;
    eloDiff?: number;
  }
  black?: {
    username?: string;
    elo?: number
    eloDiff?: number;
  }
  result?: boolean | undefined; // true — win, false — lose, undefined — draw
  variant?: string;
  timeControl?: string;
  eco?: string;
  termination?: string;
};

export function getUserData(username: string): Promise<User> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://lichess.org/api/user/${username}`, true);
    xhr.onreadystatechange = e => {
      if (xhr.readyState !== 4)
        return;
      if (xhr.status !== 200)
        reject();
      else {
        try {
          resolve(JSON.parse(xhr.response));
        } catch (e) {
          reject();
        }
      }
    }
    xhr.send();
  });
}

import { writable } from 'svelte/store';
export const gamesStore = writable<Game[]>([]);

const uniqueGames = (games: Game[]) =>
  games
    // .filter((game, index) =>
    //   games.findIndex(_game =>
    //     _game.link === game.link  
    //   ) === index
    // );

const localStoragePrefix = 'lichess-dima-bio-'
export function loadUserGamesCache(
  username: string,
  onProgress: (games: Game[]) => void
) {
  const gamesCacheRaw = localStorage.getItem(`${localStoragePrefix}-${username}-games`);
  const cacheIsCompleteRaw = localStorage.getItem(`${localStoragePrefix}-${username}-complete`);

  let gamesCache: Game[] = [];
  try {
    gamesCache = JSON.parse(gamesCacheRaw) ?? [];
  } catch {
    gamesCache = [];
  }
  let isComplete = cacheIsCompleteRaw === 'true';

  const save = (games, isComplete = true) => {
    gamesCache = games;
    localStorage.setItem(
      `${localStoragePrefix}-${username}-games`,
      JSON.stringify(games)
    );
    localStorage.setItem(
      `${localStoragePrefix}-${username}-complete`,
      String(isComplete)
    );
  }
  const load = (after = true, isCompleteAfter = true) => {
    let i = 0;
    const dates = gamesCache.map(g => g.date);
    const firstDate = Math.min(...dates),
          lastDate =  Math.max(...dates);
    
    return loadUserGames(
      username,
      gamesInProgress => {
        const allGames = uniqueGames(
          after ?
            [...gamesCache, ...gamesInProgress] :
            [...gamesInProgress, ...gamesCache]
        );
        onProgress?.(allGames);

        i++;
        if (i % 20 === 0)
          save?.(allGames, false)
      },
      after && isFinite(lastDate) && lastDate,
      !after && isFinite(firstDate) && firstDate
    ).then(games => {
      const allGames = uniqueGames(
        after ?
          [...gamesCache, ...games] :
          [...games, ...gamesCache]
      );
      save(allGames, isCompleteAfter);
      return allGames;
    })
  }

  if (isComplete) {
    // load last date+
    return load(true)
  } else {
    // load start date- and last date+
    return load(false, false).then(() => load(true));
  }
}

export function loadUserGames(
  username: string,
  onProgress: (games: Game[]) => void,
  fromDate?: Date | number,
  toDate?: Date | number
) {
  return new Promise<Game[]>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    
    let query = 'moves=false';
    // if (year)
    //   query += `&since=${new Date(year, 0, 0, 0, 0, 0, 0).getTime()}&until=${new Date(year, 11, 31, 11, 59, 59, 999).getTime()}`;
    if (fromDate)
      query += `&since=${fromDate instanceof Date ? fromDate.getTime() : fromDate}`;
    if (toDate)
      query += `&until=${toDate instanceof Date ? toDate.getTime() : toDate}`;

    xhr.open('GET', `https://lichess.org/api/games/user/${username}?${query}`, true);
    xhr.setRequestHeader('Accept', 'application/x-chess-pgn');

    const parse = (raw: string) =>
      raw.split("\n\n\n")
        .map(rawGame => {
          if (rawGame.length === 0)
            return null;

          const [rawMeta, rawContent] = rawGame.split('\n\n');
          
          const rawMetaLines = rawMeta.split('\n');
          const meta : Record<string, string> = {};
          for (const rawMetaLine of rawMetaLines) {
            const match = rawMetaLine.match(/^\[(\w*) \"?([^\"]*)\"?\]$/); // ouf, regex could be quite slow here
            if (match === null)
              continue;
            const name = match?.[1],
                  value = match?.[2];
            meta[name] = value;
          }

          const result = {
            '0-1': meta?.['Black'] === username,
            '1-0': meta?.['White'] === username,
            '1-1': undefined,
            '0-0': undefined
          }[meta?.['Result'] ?? rawContent];

          return {
            perfType: PerfTypeByEvent[meta?.['Event']],
            rated: meta?.['Event']?.includes('Rated'),
            event: meta?.['Event'],
            link: meta?.['Site'],
            date: new Date(meta?.['UTCDate'] + ' ' + meta?.['UTCTime']).getTime(),
            variant: meta?.['Variant'],
            timeControl: meta?.['TimeControl'],
            white: {
              username: meta?.['White'],
              elo: Number(meta?.['WhiteElo']),
              eloDiff: Number(meta?.['WhiteRatingDiff'])
            },
            black: {
              username: meta?.['Black'],
              elo: Number(meta?.['BlackElo']),
              eloDiff: Number(meta?.['BlackRatingDiff'])
            },
            eco: meta?.['ECO'],
            result
          } as Game;
        })
        .filter(g => g !== null)

    xhr.onreadystatechange = e => {
      if (xhr.readyState !== 4)
        return;
      if (xhr.status !== 200) {
        reject?.();
      } else {
        resolve?.(parse(xhr.responseText));
      }
    }
    xhr.onprogress = e => {
      onProgress?.(parse(xhr.responseText));
      // writable.set(parse(xhr.responseText));
    }
    xhr.send();
  });
}