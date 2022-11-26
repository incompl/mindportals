export default function Update() {
  return (
    <form method="post" action="/api/webhook" autoComplete="on">
      <input type="password" name="password" autoComplete="current-password" />
      <input type="submit"/>
    </form>
  );
}
