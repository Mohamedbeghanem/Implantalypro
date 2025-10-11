import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navigation, Car, Bus } from "lucide-react"

export function LocationMap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-xl">Directions & Parking</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Map Placeholder */}
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
          <div className="text-center space-y-2">
            <Navigation className="w-8 h-8 text-primary mx-auto" />
            <p className="text-sm text-muted-foreground">Interactive Map</p>
            <p className="text-xs text-muted-foreground">123 Dental Street, Downtown City</p>
          </div>
        </div>

        {/* Directions */}
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground">Getting Here</h4>

          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Car className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm text-foreground">By Car</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Free parking available in our lot behind the building. Street parking also available with 2-hour
                  limits.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Bus className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm text-foreground">Public Transit</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Bus routes 15, 22, and 45 stop within 2 blocks. Metro station is a 5-minute walk.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
            Get Directions
          </Button>
          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
            View on Map
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
