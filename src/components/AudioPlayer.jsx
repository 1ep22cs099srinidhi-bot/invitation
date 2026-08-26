import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import './AudioPlayer.css';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const synthRef = useRef(null);

  // Web Audio API Fallback Synthesizer for ambient Sitar/Tanpura chord
  const startSynthChime = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      const freqs = [220, 277.18, 329.63, 440]; // A major ambient chord
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
      gainNode.connect(ctx.destination);

      const oscs = freqs.map(f => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, ctx.currentTime);
        osc.connect(gainNode);
        osc.start();
        return osc;
      });

      synthRef.current = { ctx, oscs, gainNode };
    } catch (e) {
      console.log('Audio synth unavailable');
    }
  };

  const stopSynthChime = () => {
    if (synthRef.current) {
      try {
        synthRef.current.oscs.forEach(o => o.stop());
        synthRef.current.ctx.close();
      } catch (e) {}
      synthRef.current = null;
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      stopSynthChime();
      setIsPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Play synth chime fallback if audio file isn't present
          startSynthChime();
          setIsPlaying(true);
        });
      } else {
        startSynthChime();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="audio-player-fixed">
      <audio ref={audioRef} src={`${import.meta.env.BASE_URL || './'}music/wedding-music.mp3`} loop preload="none" />
      <button
        className={`audio-toggle-btn ${isPlaying ? 'playing' : ''}`}
        onClick={toggleAudio}
        aria-label={isPlaying ? 'Mute ambient wedding music' : 'Play ambient wedding music'}
        title={isPlaying ? 'Mute Music' : 'Play Music'}
      >
        {isPlaying ? (
          <Volume2 size={20} color="var(--color-gold-bright)" />
        ) : (
          <VolumeX size={20} color="rgba(255, 255, 255, 0.7)" />
        )}
        <Music size={14} className="music-note-icon" />
      </button>
    </div>
  );
}
