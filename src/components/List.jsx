export default function List(props) {
  return(
    <div className="flex flex-col border border-gray-300 rounded p-3">
      <h1 className="font-bold text-lg">{props.title}</h1>
      <span className="text-green-600">📍 Location</span>
      <span className="bg-green-100 text-green-600 rounded p-1">✓ Photo</span>
    </div>
  )
}