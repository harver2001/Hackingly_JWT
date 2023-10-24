
const RequestDemoButton = () => {
  return (
    <button
      className="fixed bottom-10 text-sm w-[150px] z-10 bg-black right-2 p-4 bg-blue-500 text-white rounded-xl hover:scale-110 transform transition-transform duration-300 ease-in-out"
      onClick={() => {
        console.log("Request Button clicked");
      }}
    >
      Request Demo
    </button>
  )
}

export default RequestDemoButton
