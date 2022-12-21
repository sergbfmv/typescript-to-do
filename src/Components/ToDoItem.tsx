
function ToDoItem(props: any) {
  const {task, index, remove, id} = props

  return (
    <tr className="table-light">
    <td>{index}</td>
    <td className="task">
      {task}
    </td>
    <td>В процессе</td>
    <td>
      <button className="btn btn-danger" onClick={() => remove(id)} >
        Удалить
      </button>
      <button className="btn btn-success">
        Завершить
      </button>
    </td>
  </tr>
  )
}

export default ToDoItem