export function Button(props) {
    return (
        <button
            {...props}
            className="px-4 py-2 
        bg-gray-500 text-black
        hover:bg-black hover:text-white"
        >
            {props.children}
        </button>
    );
}
