/* eslint-disable react/prop-types */
function TodoItem({ text, onDelete }) {
  return (
    <li style={styles.item}>
      {text}
      <button onClick={onDelete} style={styles.deleteBtn}>❌</button>
    </li>
  );
}

const styles = {
  item: {
    backgroundColor: "#f2f2f2",
    margin: "8px auto",
    padding: "10px 15px",
    borderRadius: "8px",
    width: "280px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#242424"
  },
  deleteBtn: {
    border: "none",
    background: "#ff4d4d",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "5px 8px",
  },
};

export default TodoItem;
