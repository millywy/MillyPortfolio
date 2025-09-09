// Project image mappings
// You'll need to upload these images to the public/images/projects/ directory

export const projectImages: Record<string, {
  main: string
  technical: string
  results: string
  additional?: string[]
}> = {
  'tedx-biomimicry-talk': {
    main: '/images/projects/tedx-presentation.jpg',
    technical: '/images/projects/tedx-stage.jpg',
    results: '/images/projects/tedx-audience.jpg'
  },
  'cs107e-piano-tiles': {
    main: '/images/projects/piano-tiles-setup.jpg',
    technical: '/images/projects/piano-tiles-game.jpg',
    results: '/images/projects/piano-tiles-demo.jpg'
  },
  'hk-productivity-council-robotics': {
    main: '/images/projects/hkpc-id-card.jpg',
    technical: '/images/projects/tram-maintenance.jpg',
    results: '/images/projects/hkpc-award.jpg'
  },
  'wearable-ultrasound-cardiovascular': {
    main: '/images/projects/ultrasound-poster.jpg',
    technical: '/images/projects/ultrasound-presentation.jpg',
    results: '/images/projects/ultrasound-team.jpg'
  },
  'stanford-space-initiative-picubed': {
    main: '/images/projects/cubesat-pcb.jpg',
    technical: '/images/projects/soldering-work.jpg',
    results: '/images/projects/satellites-team.jpg'
  },
  'eesw-severn-tunnel-crack-detection': {
    main: '/images/projects/eew-award-ceremony.jpg',
    technical: '/images/projects/tunnel-inspection.jpg',
    results: '/images/projects/eew-certificate.jpg'
  }
}

// Helper function to get project images
export function getProjectImages(slug: string) {
  return projectImages[slug] || null
}
