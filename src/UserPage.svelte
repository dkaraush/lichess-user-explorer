<script lang="ts">
  import { getUserData, loadUserGames, loadUserGamesCache, PerfTypes } from './loader';
  import type { User, Game } from './loader';
  import Calendar from './Calendar.svelte';
  import FilterButton from './FilterButton.svelte';

  export let location, navigate;
  export let username;

  let user: User;
  getUserData(username)
    .then(u => user = u)

  let games: Game[] = [];
  loadUserGamesCache(username, g => window['games'] = games = g);

  let progress = 0.5,
      timeEstimated,
      years: number[];
  $: {
    const loadedGames = (games?.length ?? 0),
          allGames = (user?.count?.all ?? 1)
    progress = loadedGames / allGames;
    const secondsEstimated = (allGames - loadedGames) / 20;
    const minutesEstimated = ~~(secondsEstimated / 60);
    const hoursEstimated = ~~(minutesEstimated / 60);
    timeEstimated =
      (hoursEstimated > 0 ? `${hoursEstimated} hr ` : '') +
      (minutesEstimated % 60 > 0 ? `${minutesEstimated % 60} min ` : '') +
      `${~~(secondsEstimated) % 60} sec`;

    const gameYears = games.map(g => new Date(g?.date).getFullYear());
    const minYear = Math.min(...gameYears);
    const maxYear = Math.max(...gameYears);
    const yearsCount = maxYear - minYear + 1;
    years = [...Array(isNaN(yearsCount) || !isFinite(yearsCount) ? 0 : yearsCount)]
              .map((_, i) => maxYear - i);
  }

  let rated = undefined;
  let perfTypes = PerfTypes;
</script>

<main>
  {#if progress < 1}
    <div class="progress">
      <span
        class='bar'
        style={`width: ${progress * 100}%`}
      />
      <span
        class='text'
      >
        {(progress * 100).toFixed(2)}%
        {#if timeEstimated}
         ∙ {timeEstimated}
        {/if}
      </span>
    </div>
    <br />
  {/if}
  <h1>{user?.username ?? ''}</h1>
  <br />
  <div>
    <FilterButton
      value={rated === undefined}
      onChange={() => rated = undefined}
    >
      All
    </FilterButton>
    <FilterButton
      value={rated === true}
      onChange={() => rated = true}
    >
      Rated
    </FilterButton>
    <FilterButton
      value={rated === false}
      onChange={() => rated = false}
    >
      Casual
    </FilterButton>
  </div>
  <br />
  <div>
    {#each PerfTypes as perfType}
      <FilterButton
        value={perfTypes.includes(perfType)}
        onChange={add =>
          perfTypes = 
            add ?
              [...perfTypes, perfType] :
              perfTypes.filter(p => p !== perfType)  
        }
      >
        { perfType }
      </FilterButton>
    {/each}
  </div>
  {#each years as year}
    <h3>{year}</h3>
    <Calendar
      year={year}
      games={
        games.filter(g =>
          perfTypes.includes(g?.perfType) && (
            rated === undefined ||
            g?.rated === rated
          )
        )
      }
    />
  {/each}
</main>

<style lang="scss">
  main {
    > h1 {
      margin: 0;
    }

    display: block;
    width: 100%;
    max-width: 840px;
    margin: 16px auto;
    padding: 16px;
    box-sizing: border-box;
    
    position: relative;
    background: white;
    border-radius: 4px;
    overflow: auto;
    box-shadow: 
      0px 6px 10px rgba(hsl(185, 10, 75), 0.14),
      0px 1px 18px rgba(hsl(185, 10, 75), 0.12),
      0px 3px 5px  rgba(hsl(185, 10, 75), 0.2);

    > .progress {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;

      > .bar {
        position: absolute;
        top: 0;
        left: 0;
        height: 3px;
        background-color: green;
        transition: width 0.1s ease-in-out;
      }
      > .text {
        position: absolute;
        left: 16px;
        top: 8px;

        color: green;
        font-size: 12px;
      }
    }
  }
</style>