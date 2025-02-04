import { Link, useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mt-2">
          {error?.message || "The page you're looking for doesn't exist."}
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 mt-8 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage 