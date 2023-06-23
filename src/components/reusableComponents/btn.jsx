export default function btn(props) {
  return (
<div className="flex justify-end mt-8">
  <button
    onClick={props.handleClick}
    type={props.submit}
    className={`${props.className} bg-slate-900 text-center px-6 py-2 rounded-lg active:scale-75 duration-300`}
    disabled={props.disabled}
  >
    {props.name}
  </button>
</div>
  );
}
