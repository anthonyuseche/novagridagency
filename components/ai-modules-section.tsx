"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Mic, Volume2, Video, Download, Upload } from "lucide-react"

export default function AiModulesSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [chatInput, setChatInput] = useState("")
  const [chatMessages, setChatMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    { role: "assistant", content: "¡Hola! Soy el asistente virtual de NovaGrid. ¿En qué puedo ayudarte hoy?" },
  ])

  const [youtubeUrl, setYoutubeUrl] = useState("")
  const [downloadType, setDownloadType] = useState("video")

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!chatInput.trim()) return

    // Add user message
    setChatMessages([...chatMessages, { role: "user", content: chatInput }])

    // Simulate AI response
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Gracias por tu mensaje. Este es un ejemplo de respuesta del asistente virtual. En una implementación real, esto se conectaría a un modelo de IA para generar respuestas contextuales.",
        },
      ])
    }, 1000)

    setChatInput("")
  }

  return (
    <section id="ai-modules" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Módulos de <span className="text-[#00FFFF]">IA</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Explora nuestras herramientas de inteligencia artificial diseñadas para potenciar tu productividad y
            creatividad.
          </p>
        </motion.div>

        <Tabs defaultValue="chat" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8 bg-white/5 backdrop-blur-sm">
            <TabsTrigger value="chat" className="data-[state=active]:bg-[#00FFFF] data-[state=active]:text-[#0A192F]">
              <Bot className="h-4 w-4 mr-2" />
              Chat IA
            </TabsTrigger>
            <TabsTrigger value="tts" className="data-[state=active]:bg-[#00FFFF] data-[state=active]:text-[#0A192F]">
              <Volume2 className="h-4 w-4 mr-2" />
              Texto a Voz
            </TabsTrigger>
            <TabsTrigger value="video" className="data-[state=active]:bg-[#00FFFF] data-[state=active]:text-[#0A192F]">
              <Video className="h-4 w-4 mr-2" />
              Generador de Video
            </TabsTrigger>
            <TabsTrigger
              value="youtube"
              className="data-[state=active]:bg-[#00FFFF] data-[state=active]:text-[#0A192F]"
            >
              <Download className="h-4 w-4 mr-2" />
              YouTube Downloader
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chat">
            <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Chat con IA</CardTitle>
                <CardDescription className="text-white/70">
                  Interactúa con nuestro asistente virtual impulsado por IA.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-[#0A192F]/50 rounded-lg p-4 h-80 overflow-y-auto mb-4 border border-white/5">
                  {chatMessages.map((message, index) => (
                    <div key={index} className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}>
                      <div
                        className={`inline-block rounded-lg px-4 py-2 max-w-[80%] ${
                          message.role === "user" ? "bg-[#00FFFF]/20 text-white" : "bg-white/10 text-white"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                </div>
                <form onSubmit={handleChatSubmit} className="flex gap-2">
                  <Textarea
                    placeholder="Escribe tu mensaje aquí..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
                  />
                  <Button type="submit" className="bg-[#00FFFF] text-[#0A192F] hover:bg-[#00FFFF]/80">
                    Enviar
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tts">
            <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Texto a Voz / Voz a Texto</CardTitle>
                <CardDescription className="text-white/70">
                  Convierte texto a voz o transcribe archivos de audio.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-4">Texto a Voz</h3>
                    <Textarea
                      placeholder="Escribe el texto que deseas convertir a voz..."
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 mb-4 h-32"
                    />
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="text-sm text-white/70 mb-2 block">Voz</label>
                        <Select defaultValue="female">
                          <SelectTrigger className="bg-white/10 border-white/20 text-white">
                            <SelectValue placeholder="Selecciona una voz" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#0A192F] border-white/20 text-white">
                            <SelectItem value="female">Femenina</SelectItem>
                            <SelectItem value="male">Masculina</SelectItem>
                            <SelectItem value="neutral">Neutral</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm text-white/70 mb-2 block">Idioma</label>
                        <Select defaultValue="es">
                          <SelectTrigger className="bg-white/10 border-white/20 text-white">
                            <SelectValue placeholder="Selecciona un idioma" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#0A192F] border-white/20 text-white">
                            <SelectItem value="es">Español</SelectItem>
                            <SelectItem value="en">Inglés</SelectItem>
                            <SelectItem value="fr">Francés</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button className="w-full bg-[#00FFFF] text-[#0A192F] hover:bg-[#00FFFF]/80">
                      <Volume2 className="h-4 w-4 mr-2" />
                      Generar Audio
                    </Button>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-white mb-4">Voz a Texto</h3>
                    <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center mb-4 h-32 flex flex-col items-center justify-center">
                      <Upload className="h-8 w-8 text-white/50 mb-2" />
                      <p className="text-white/70 mb-2">Arrastra y suelta un archivo de audio</p>
                      <p className="text-white/50 text-sm">o</p>
                      <Button variant="outline" className="mt-2 border-white/20 text-white hover:bg-white/10">
                        Seleccionar archivo
                      </Button>
                    </div>
                    <Button className="w-full bg-[#00FFFF] text-[#0A192F] hover:bg-[#00FFFF]/80">
                      <Mic className="h-4 w-4 mr-2" />
                      Transcribir Audio
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="video">
            <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Generador de Video IA</CardTitle>
                <CardDescription className="text-white/70">
                  Crea videos impactantes a partir de texto o imágenes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Describe el video que deseas crear..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 mb-4 h-32"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="text-sm text-white/70 mb-2 block">Formato</label>
                    <Select defaultValue="vertical">
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Selecciona un formato" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0A192F] border-white/20 text-white">
                        <SelectItem value="vertical">Vertical (9:16) - Reels/TikTok</SelectItem>
                        <SelectItem value="horizontal">Horizontal (16:9) - YouTube</SelectItem>
                        <SelectItem value="square">Cuadrado (1:1) - Instagram</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm text-white/70 mb-2 block">Duración</label>
                    <Select defaultValue="15">
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Selecciona la duración" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0A192F] border-white/20 text-white">
                        <SelectItem value="15">15 segundos</SelectItem>
                        <SelectItem value="30">30 segundos</SelectItem>
                        <SelectItem value="60">1 minuto</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center mb-6">
                  <Upload className="h-8 w-8 text-white/50 mb-2 mx-auto" />
                  <p className="text-white/70 mb-2">Opcionalmente, arrastra y suelta imágenes o videos</p>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Seleccionar archivos
                  </Button>
                </div>

                <Button className="w-full bg-[#00FFFF] text-[#0A192F] hover:bg-[#00FFFF]/80">
                  <Video className="h-4 w-4 mr-2" />
                  Generar Video
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="youtube">
            <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">YouTube Downloader</CardTitle>
                <CardDescription className="text-white/70">
                  Descarga videos o audio de YouTube fácilmente.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <label className="text-sm text-white/70 mb-2 block">URL de YouTube</label>
                  <Input
                    placeholder="https://www.youtube.com/watch?v=..."
                    value={youtubeUrl}
                    onChange={(e) => setYoutubeUrl(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>

                <div className="mb-6">
                  <label className="text-sm text-white/70 mb-2 block">Formato de descarga</label>
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="video"
                        name="downloadType"
                        value="video"
                        checked={downloadType === "video"}
                        onChange={() => setDownloadType("video")}
                        className="mr-2"
                      />
                      <label htmlFor="video" className="text-white">
                        Video
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="audio"
                        name="downloadType"
                        value="audio"
                        checked={downloadType === "audio"}
                        onChange={() => setDownloadType("audio")}
                        className="mr-2"
                      />
                      <label htmlFor="audio" className="text-white">
                        Solo audio
                      </label>
                    </div>
                  </div>
                </div>

                {downloadType === "video" && (
                  <div className="mb-6">
                    <label className="text-sm text-white/70 mb-2 block">Calidad</label>
                    <Select defaultValue="720">
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Selecciona la calidad" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0A192F] border-white/20 text-white">
                        <SelectItem value="360">360p</SelectItem>
                        <SelectItem value="480">480p</SelectItem>
                        <SelectItem value="720">720p HD</SelectItem>
                        <SelectItem value="1080">1080p Full HD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <Button className="w-full bg-[#00FFFF] text-[#0A192F] hover:bg-[#00FFFF]/80">
                  <Download className="h-4 w-4 mr-2" />
                  Descargar {downloadType === "video" ? "Video" : "Audio"}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
