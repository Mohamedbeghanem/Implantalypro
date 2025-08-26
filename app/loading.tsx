export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-4">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <h1 className="text-2xl font-bold text-foreground">Loading...</h1>
          <p className="text-muted-foreground">
            Please wait while we load your content.
          </p>
        </div>
      </div>
    </div>
  )
}
