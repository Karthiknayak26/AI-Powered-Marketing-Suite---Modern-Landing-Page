'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, Volume2, VolumeX, Maximize2, Settings } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const DemoVideo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleMuteToggle = () => {
    setIsMuted(!isMuted)
  }

  const handleTimeUpdate = (e: React.ChangeEvent<HTMLVideoElement>) => {
    setCurrentTime(e.target.currentTime)
    setDuration(e.target.duration)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = document.querySelector('video') as HTMLVideoElement
    if (video) {
      video.currentTime = parseFloat(e.target.value)
      setCurrentTime(parseFloat(e.target.value))
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <>
      {/* Demo Video Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block"
      >
        <Button
          onClick={() => setIsModalOpen(true)}
          variant="secondary"
          size="lg"
          className="group"
        >
          <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
          Watch Demo
        </Button>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Container */}
              <div className="relative aspect-video bg-gray-900">
                <video
                  className="w-full h-full object-cover"
                  poster="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop"
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
                >
                  <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Video Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center space-x-4">
                    {/* Play/Pause Button */}
                    <button
                      onClick={handlePlayPause}
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      {isPlaying ? (
                        <div className="w-4 h-8 flex space-x-1">
                          <div className="w-1 bg-white rounded"></div>
                          <div className="w-1 bg-white rounded"></div>
                        </div>
                      ) : (
                        <Play className="w-5 h-5 ml-1" />
                      )}
                    </button>

                    {/* Progress Bar */}
                    <div className="flex-1">
                      <input
                        type="range"
                        min="0"
                        max={duration || 0}
                        value={currentTime}
                        onChange={handleSeek}
                        className="w-full h-1 bg-white/30 rounded-full appearance-none cursor-pointer slider"
                        style={{
                          background: `linear-gradient(to right, white 0%, white ${(currentTime / (duration || 1)) * 100}%, rgba(255,255,255,0.3) ${(currentTime / (duration || 1)) * 100}%, rgba(255,255,255,0.3) 100%)`
                        }}
                      />
                    </div>

                    {/* Time Display */}
                    <div className="text-white text-sm font-mono">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </div>

                    {/* Volume Control */}
                    <button
                      onClick={handleMuteToggle}
                      className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>

                    {/* Fullscreen Button */}
                    <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </button>

                    {/* Settings Button */}
                    <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <Settings className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Video Title */}
                <div className="absolute top-4 left-4">
                  <h3 className="text-white text-lg font-semibold">ADmyBRAND AI Suite Demo</h3>
                  <p className="text-white/70 text-sm">See how our AI-powered platform transforms your marketing</p>
                </div>
              </div>

              {/* Video Description */}
              <div className="p-6 bg-gray-900">
                <h4 className="text-white text-lg font-semibold mb-2">What you'll learn:</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• AI-powered content generation and optimization</li>
                  <li>• Advanced analytics and performance tracking</li>
                  <li>• Automated campaign management</li>
                  <li>• Smart audience targeting and segmentation</li>
                  <li>• Team collaboration and workflow automation</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export { DemoVideo }