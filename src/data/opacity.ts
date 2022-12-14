import { ILayers } from "@/interfaces/globe/Layer";

const layer: ILayers = {
  NatGeo_World_Map: {
    visibility: false,
    opacity: 0,
  },
  world_Offline_Map: {
    visibility: true,
    opacity: 1,
  },
  world_Imagery: {
    visibility: false,
    opacity: 0,
  },
  world_Physical_Map: {
    visibility: false,
    opacity: 0,
  },
  world_Shaded_Relief: {
    visibility: false,
    opacity: 0,
  },
  world_Street_Map: {
    visibility: false,
    opacity: 0,
  },
  world_Terrain_Base: {
    visibility: false,
    opacity: 0,
  },
  world_Topo_Map: {
    visibility: false,
    opacity: 0,
  },
};

export { layer };
