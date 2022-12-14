/* eslint-disable prettier/prettier */
// import AddImageryProvider from "@/components/Globe/ImageryLayer/Index";
import { useSelector } from "hooks/storeHook";

import AddImageryProvider from "../../../components/Globe/ImageryLayer/Index";
import { Arcgis } from "../../../enum";

const ImageryLayer = () => {
  const imageryLayer = useSelector((state) => state.layer);
  const {
    NatGeo_World_Map,
    world_Imagery,
    world_Physical_Map,
    world_Shaded_Relief,
    world_Street_Map,
    world_Terrain_Base,
    world_Topo_Map,
    world_Offline_Map,
  } = imageryLayer;
  return (
    <div>
      <AddImageryProvider
        frame={NatGeo_World_Map}
        url={Arcgis.NatGeo_World_Map}
      />
      <AddImageryProvider
        frame={world_Physical_Map}
        url={Arcgis.World_Physical_Map}
      />
      <AddImageryProvider frame={world_Imagery} url={Arcgis.World_Imagery} />
      <AddImageryProvider
        frame={world_Shaded_Relief}
        url={Arcgis.World_Shaded_Relief}
      />
      <AddImageryProvider
        frame={world_Street_Map}
        url={Arcgis.World_Street_Map}
      />
      <AddImageryProvider
        frame={world_Terrain_Base}
        url={Arcgis.World_Terrain_Base}
      />
      <AddImageryProvider frame={world_Topo_Map} url={Arcgis.World_Topo_Map} />
      <AddImageryProvider
        frame={world_Offline_Map}
        url={Arcgis.World_offline_map}
      />
    </div>
  );
};

export default ImageryLayer;
