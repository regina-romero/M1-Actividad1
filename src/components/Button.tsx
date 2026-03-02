interface ButtonProps {
  label: string;
}

function Button(props: ButtonProps) {
  return (
    <button
      className="w-full bg-blue-600 hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none text-white font-medium py-2 rounded-lg transition-colors"
    >
      {props.label}
    </button>
  );
}

export default Button;