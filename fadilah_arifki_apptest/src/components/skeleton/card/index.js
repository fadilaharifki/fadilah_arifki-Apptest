export default function Box({ children }) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                padding: '1rem',
                margin: '1rem',
                width: 300,
                height: 250,
                background: "#818181",
            }}
        >
            <div>
                {children}
            </div>
        </div>
    )
}