import { FaApple, FaGoogle } from "react-icons/fa";

function SocialSignIn() {
  return (
    <div className="mx-auto flex w-[94%] max-w-sm flex-col items-center space-y-4 text-black -translate-y-6">
      {/* Divider */}
      <div className=" flex w-full items-center">
        <hr className="flex-grow border-t border-gray-600" />
        <span className="px-2 text-gray-400">OR</span>
        <hr className="flex-grow border-t border-gray-600" />
      </div>

      {/* Apple Sign-in Button */}
      <button className="relative mt-4 flex w-full items-center justify-center space-x-2 rounded-md border border-gray-600 px-4 py-2 hover:bg-blue-400 hover:text-gray-700">
        <FaApple className="absolute inset-y-1 left-4 flex h-7 w-7 cursor-pointer items-center" />
        <span>Continue with Apple</span>
      </button>

      {/* Google Sign-in Button */}
      <button className="relative flex w-full items-center justify-center space-x-2 rounded-md border border-gray-600 px-4 py-2 hover:bg-blue-400 hover:text-gray-700">
        <FaGoogle className="absolute inset-y-1 left-4 flex h-7 w-7 cursor-pointer items-center " />
        <span>Continue with Google</span>
      </button>
    </div>
  );
}

export default SocialSignIn;
