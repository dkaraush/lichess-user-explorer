<script lang="ts">
  import type { Game } from './loader';

  export let year: number;
  export let games: Game[];

  const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const Weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Sun'];
  const daySize = 12,
        dayMargin = 3;

  const startSkip = new Date(year, 0, 0, 0, 0, 0, 0).getDay(),
        endSkip = new Date(year, 11, 31, 11, 59, 59, 999).getDay();

  type Color = [number, number, number];
  const dayColorInactive = [224, 224, 224] as Color; // #E0E0E0
  const dayColorWin = [67, 160, 71] as Color; // #43A047
  const dayColorLose = [229, 57, 53] as Color; // #E53935
  const lerp = (a: Color, b: Color, t: number) =>
    [
      a[0] + (b[0] - a[0]) * Math.max(0, Math.min(1, t)),
      a[1] + (b[1] - a[1]) * Math.max(0, Math.min(1, t)),
      a[2] + (b[2] - a[2]) * Math.max(0, Math.min(1, t))
    ] as Color;
  const maxGamesOnDay = 40;
  const easeInOut = x => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

  const gamesAt = (games: Game[], date: number) => {
    const dateFrom = new Date(year, 0, date, 0, 0, 0, 0).getTime(),
          dateTo   = new Date(year, 0, date, 23, 59, 59, 999).getTime();
    return games.filter(g => g?.date >= dateFrom && g?.date <= dateTo);
  }
  const computeDayColor = (games: Game[], date: number) => {
    const dayGames = gamesAt(games, date);

    const won =  dayGames.filter(g => g?.result === true ).length,
          lose = dayGames.filter(g => g?.result === false).length,
          draw = dayGames.filter(g => g?.result === undefined).length;

    const winrate = won / ((won + lose) || 1);
    const intensiveness = dayGames.length / maxGamesOnDay;

    const color = lerp(dayColorInactive, lerp(dayColorLose, dayColorWin, easeInOut(winrate)), intensiveness ** 0.5);
    return `rgb(${color})`;
  }

  const dayOfYear = (date: Date) => {
    const start = new Date(year, 0, 0);
    const diff = ((+date) - (+start)) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
    return ~~(diff / (1000 * 60 * 60 * 24));
  }
  
  let hoverDay = null;
</script>

<div
  class="calendar"
  on:mouseout={() => hoverDay = null}
  on:blur={() => hoverDay = null}
>
  <div>
    {#each Array(365) as _, day}
      <span
        class="day"
        style={
          `top: ${((day + startSkip) % 7) * (daySize + dayMargin)}px;` + 
          `left: ${~~((day + startSkip) / 7) * (daySize + dayMargin)}px;` + 
          `background-color: ${computeDayColor(games, day)};`
        }

        on:focus={() => hoverDay = day}
        on:mouseover={() => hoverDay = day}
      >
        {#if hoverDay === day && gamesAt(games, day).length > 0}
          <span
            class='popup'
            
          >
            <b>{gamesAt(games, day).length}</b> games
            <span class="wins">{gamesAt(games, day).filter(g => g?.result === true).length}</span>
            <span class="draw">{gamesAt(games, day).filter(g => g?.result === undefined).length}</span>
            <span class="lose">{gamesAt(games, day).filter(g => g?.result === false).length}</span>
          </span>
        {/if}
      </span>
    {/each}
    {#each Array(12) as _, month}
      <span 
        class="month"
        style={
          `left: ${~~((dayOfYear(new Date(year, month, 0, 0, 0, 0, 0)) + startSkip) / 7) * (daySize + dayMargin)}px`
        }
      >
        {Months[month]}
      </span>
    {/each}
    {#each Array(7) as _, weekday}
      {#if weekday % 2 == 1}
        <span 
          class="weekday"
          style={
            `top: ${(weekday) * (daySize + dayMargin)}px`
          }
        >
          {Weekdays[weekday]}
        </span>
      {/if}
    {/each}
  </div>
</div>

<style lang="scss">
  div.calendar {
    position: relative;
    
    $daySize: 12px;
    $dayMargin: 3px;
    $dayBorder: 1px;

    display: block;
    height: ($daySize + $dayMargin) * 7 - $dayMargin;
    width: ($daySize + $dayMargin) * 52 - $dayMargin;
    margin-top: $daySize + $dayMargin * 2;
    margin-left: 18px;
    
    > div {
      > .day {
        position: absolute;
        width: $daySize - 2 * $dayBorder;
        height: $daySize - 2 * $dayBorder;
        border-radius: $daySize * 0.2;
        border: $dayBorder solid rgba(0, 0, 0, 0.075);

        cursor: pointer;
        &:hover {

        }

        > .popup {
          position: absolute;
          top: 100%;
          z-index: 100500;

          font-size: 12px;
          padding: 4px;
          border-radius: 2px;
          background: white;
          box-shadow: 
            0px 6px 10px rgba(hsl(185, 10, 75), 0.14),
            0px 1px 18px rgba(hsl(185, 10, 75), 0.12),
            0px 3px 5px  rgba(hsl(185, 10, 75), 0.2);
          white-space: nowrap;
          transform: translateX(-50%);

          margin-top: $dayMargin;
          margin-left: $daySize * 0.5;

          > .wins {
            background-color: #43A047;
            padding: 2px 4px;
            border-radius: 4px;
            color: white;
          }
          > .draw {
            background-color: #FDD835;
            padding: 2px 4px;
            border-radius: 4px;
            color: white;
          }
          > .lose {
            background-color: #E53935;
            padding: 2px 4px;
            border-radius: 4px;
            color: white;
          }
        }
      }

      > .month {
        font-size: $daySize * 0.7;
        position: absolute;
        top: -($daySize * 0.8) - $dayMargin * 1.5;
        opacity: 0.5;
      }

      > .weekday {
        font-size: $daySize * 0.7;
        position: absolute;
        opacity: 0.5;
        text-align: right;
        left: -18px - $dayMargin;
        width: 18px;
      }
    }
  }
</style>