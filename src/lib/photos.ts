export const photos = {
  teamHero: '/images/photos/team-hero.jpg',
  workshopPlanning: '/images/photos/workshop-planning.jpg',
  designSession: '/images/photos/design-session.jpg',
  pairProgramming: '/images/photos/pair-programming.jpg',
  codeReview: '/images/photos/code-review.jpg',
  infrastructureOps: '/images/photos/infrastructure-ops.jpg',
  officeOpenSpace: '/images/photos/office-open-space.jpg',
  teamMeeting: '/images/photos/team-meeting.jpg',
  deskTopdown: '/images/photos/desk-topdown.jpg',
  collaborationHands: '/images/photos/collaboration-hands.jpg',
} as const;

export type PhotoKey = keyof typeof photos;
