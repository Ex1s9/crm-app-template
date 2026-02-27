export const dealKeys = {
  all: ["deals"],
  byId: (id: number) => ["deals", id],
  infinite: ["deals", "infinite"],
  progressOptions: ["deals", "progress-options"],
} as const;
