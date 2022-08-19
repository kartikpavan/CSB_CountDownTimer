export const Clock = ({
  timerDays,
  timerHours,
  timerMinutes,
  timerSeconds
}) => {
  return (
    <section>
      <h1> Clock Compoent</h1>
      <h2>
        <span> {timerDays}d: </span>
        <span> {timerHours}h : </span>
        <span> {timerMinutes}m : </span>
        <span> {timerSeconds}s </span>
      </h2>
    </section>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10
};
