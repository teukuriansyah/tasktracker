export default function List(props) {
  return(
    <div className="border border-gray-400 rounded p-2">
      <div>
        <h3 className="font-bold">{props.title}</h3>
        <p className="text-green-600">📍{props.location}</p>
        <div className="bg-green-300 text-green-600 font-bold rounded p-1">✓ Photo</div>
      </div>
    </div>
  )
}