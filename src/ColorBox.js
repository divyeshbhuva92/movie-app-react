export function ColorBox({ color }) {
  const styles2 = {
    height: "25px",
    background: color,
    marginTop: "8px",
  };
  return (
    <div className="ColorBox-container" style={styles2}>
      {color}
    </div>
  );
}
