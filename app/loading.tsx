export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="text-center space-y-6 p-4 sm:p-8 max-w-md mx-auto">
        <div className="space-y-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">Loading...</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Please wait while we load your content.
          </p>
        </div>
      </div>
    </div>
  )
}
