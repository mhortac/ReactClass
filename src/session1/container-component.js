const mi_lista = [
  "task_1",
  "task_2",
  "task_3",
  "task_4",
  "task_1",
  "task_2",
  "task_3",
  "task_4",
];

export default function Container() {
  return (
    <div className="layout-body">
      <ul>
        {mi_lista.map((item, key) => {
          return (
            <li key={key} className="item-list">
              <img
                className="item-image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtbfw8X_fhk4zX5l0ly9Qd9HBPZ6PCe7fEZg&usqp=CAU"
                alt="imagen"
              />
              <div className="item-desc">
                Este es un texto descriptivo del elemento
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
