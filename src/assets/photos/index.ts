export const photos = {
  teamHero: '/__l5e/assets-v1/dd6e3052-1445-4a03-a6d3-f2fc7c99fcfc/team-hero.jpg',
  workshopPlanning: '/__l5e/assets-v1/9da335d0-e9fc-4a95-9936-b9ddd07c0fff/workshop-planning.jpg',
  designSession: '/__l5e/assets-v1/c27f4f1c-fb5f-4ef7-b89a-a34cc9378114/design-session.jpg',
  pairProgramming: '/__l5e/assets-v1/7928dea0-1b93-4a0e-a011-077506830387/pair-programming.jpg',
  codeReview: '/__l5e/assets-v1/33b05c7e-b918-42dd-a574-c0e4a5473160/code-review.jpg',
  infrastructureOps: '/__l5e/assets-v1/2b374f32-4e14-4a6a-940d-eebe398cc231/infrastructure-ops.jpg',
  officeOpenSpace: '/__l5e/assets-v1/d1fae53f-c59e-42e7-b704-dc8cea3609d5/office-open-space.jpg',
  teamMeeting: '/__l5e/assets-v1/3e7d72e3-2dd0-4254-a8cd-c7e135c36b99/team-meeting.jpg',
  deskTopdown: '/__l5e/assets-v1/8827e031-239b-46ef-b612-3f8f93ec72b2/desk-topdown.jpg',
  collaborationHands: '/__l5e/assets-v1/63dc51f9-e263-4775-9c03-2191a473f19f/collaboration-hands.jpg',
} as const;

export type PhotoKey = keyof typeof photos;
