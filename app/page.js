"use client"; // This is a client component
import Alert from "@/components/Alert/Alert";
import { useRef, useState } from "react";

export default function Home() {
  const [text, setText] = useState("Enter Your text here");
  const textareaRef = useRef(null);
  const handelOnChange = () => {
    setText(event.target.value);
  };
  const handelUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("Text in Uppercase","text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300");
  };
  const handelLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("Text in Lowercase","text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300");
  };
  const handelCapitalizeCase = () => {
    // Split the input string into an array of words
    let words = text.split(" ");
    // Capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
      words[i] =
        words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    // Join the words back into a sentence
    let capitalizedText = words.join(" ");
    setText(capitalizedText);
    showAlert("Text in capitalize case","text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300");
  };
  const handelOnCopy = () => {
    // Select the text in the textarea
    textareaRef.current.select();
    textareaRef.current.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Deselect the text
    textareaRef.current.setSelectionRange(0, 0);

    // Optionally, provide some visual feedback (e.g., alert or console.log)
    console.log("Text copied to clipboard!");
    setAlert(true);
    console.log(alertState);
    showAlert("Text copied to clipboard!","text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400");
  };

  const [alertState,setAlert]=useState(false);
  setTimeout(()=>{
    setAlert(false)
  },3000);

  const showAlert=(message,style)=>{
    setAlert({
      msg:message,
      style:style,
      status:true,
    });
  }
  return (
    <>
      <div className="max-w-2xl mx-auto pt-14">
        {/* Start alert code */}
        {/* <Alert className="text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" value="Your text is copied successfully" alertState={alertState}/> */}
        <Alert value={alertState}/>
        {/* End alert code */}

        <form>
          <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
              <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                <div className="flex items-center space-x-1 sm:pr-4">
                  <button
                    onClick={handelUpperCase}
                    type="button"
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                  >
                    UPPERCASE
                  </button>
                  <button
                    onClick={handelLowerCase}
                    type="button"
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                  >
                    lowercase
                  </button>
                  <button
                    onClick={handelCapitalizeCase}
                    type="button"
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                  >
                    Capitalize
                  </button>
                </div>
                <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
                  <button
                    type="button"
                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
              <label for="editor" className="sr-only">
                Publish post
              </label>
              <textarea
                value={text}
                onChange={handelOnChange}
                ref={textareaRef}
                id="editor"
                rows="8"
                className="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write an article..."
                required
              ></textarea>
            </div>
          </div>
          <button
            type="button"
            onClick={handelOnCopy}
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:bg-green-950 hover:bg-green-950"
          >
            Copy Text
          </button>
        </form>
      </div>
    </>
  );
}
