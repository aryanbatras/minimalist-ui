export function Button(props) {
    return (
        <button
            {...props}
            className="px-4 py-2 rounded-lg
        bg-pink-400 text-blue-500
        hover:bg-black hover:text-white"
        >
            {props.children}
        </button>
    );
}
