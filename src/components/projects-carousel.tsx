import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink, Github, Image, Play } from "lucide-react";

export function ProjectsCarousel() {
  return (
    <section className="space-y-8">
      <h3 className="text-2xl font-semibold text-foreground text-center">
        Featured Projects
      </h3>

      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent className="-ml-2 md:-ml-4">
          {/* AWS Room Booking System */}
          <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <Card className="h-full">
              <CardHeader className="pb-3">
                <div className="aspect-video bg-muted rounded-lg mb-3 relative overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                    <Image className="w-12 h-12 text-blue-400" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="text-xs">
                      Demo Video
                    </Badge>
                  </div>
                </div>
                <CardTitle className="flex items-center justify-between text-lg">
                  AWS Room Booking System
                  <ExternalLink className="w-4 h-4" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  Led technical development of a meeting room booking system for
                  a team of 8. Built with full-stack AWS infrastructure
                  including CDK, Lambda, and RDS.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    AWS CDK
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    MySQL
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>

          {/* YogaVision */}
          <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <Card className="h-full">
              <CardHeader className="pb-3">
                <div className="aspect-video bg-muted rounded-lg mb-3 relative overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-800/20">
                    <Play className="w-12 h-12 text-green-500" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="text-xs">
                      Live Demo
                    </Badge>
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge variant="default" className="text-xs bg-yellow-500">
                      🥇 Winner
                    </Badge>
                  </div>
                </div>
                <CardTitle className="flex items-center justify-between text-lg">
                  YogaVision
                  <ExternalLink className="w-4 h-4" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  🥇 First place hackathon winner. Yoga pose analyzer using
                  MediaPipe's Pose API that compares user poses with models and
                  provides scores.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    MediaPipe
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    JavaScript
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>

          {/* easyWriting */}
          <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <Card className="h-full">
              <CardHeader className="pb-3">
                <div className="aspect-video bg-muted rounded-lg mb-3 relative overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
                    <Image className="w-12 h-12 text-purple-400" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="text-xs">
                      Screenshots
                    </Badge>
                  </div>
                </div>
                <CardTitle className="flex items-center justify-between text-lg">
                  easyWriting
                  <ExternalLink className="w-4 h-4" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  AI-powered writing assistant using OpenAI's API. Features
                  multiple response engines and persistent session storage with
                  clean Tailwind UI.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Tailwind CSS
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    OpenAI API
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>

          {/* More Projects */}
          <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <Card className="h-full">
              <CardHeader className="pb-3">
                <div className="aspect-video bg-muted rounded-lg mb-3 relative overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20">
                    <Github className="w-12 h-12 text-gray-500" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="text-xs">
                      Portfolio
                    </Badge>
                  </div>
                </div>
                <CardTitle className="flex items-center justify-between text-lg">
                  More Projects
                  <Github className="w-4 h-4" />
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <p className="text-muted-foreground mb-4 text-sm flex-grow">
                  View all my projects on GitHub including SpeechScript,
                  navigatr, and CodeBank to see more of my work.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-auto"
                  asChild
                >
                  <a
                    href="https://github.com/orelbn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>

      <div className="text-center text-sm text-muted-foreground">
        <p>
          Swipe or use arrow keys to navigate • Click placeholders to add your
          media
        </p>
      </div>
    </section>
  );
}
