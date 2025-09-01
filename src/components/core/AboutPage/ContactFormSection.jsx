export default function Tab({ tabData = [], field, setField }) {
  // If there's no data, show nothing or a placeholder
  if (!Array.isArray(tabData) || tabData.length === 0) {
    return null; // or return <p>Loading...</p>
  }

  return (
    <div
      style={{
        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
      }}
      className="flex bg-[#141A26] p-1 gap-x-1 my-6 rounded-full max-w-max"
    >
      {tabData.map((tab) => (
        <button
          key={tab.id || tab.type} // Fallback to type if id is missing
          onClick={() => setField(tab.type)}
          className={`${
            field === tab.type
              ? "bg-[#000815] text-gray-500"
              : "bg-transparent text-[#A8ADB8]"
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          {tab?.tabName || "Unnamed"}
        </button>
      ))}
    </div>
  );
}
