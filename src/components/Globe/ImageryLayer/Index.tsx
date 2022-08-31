import { buildModuleUrl, TileMapServiceImageryProvider } from "cesium";
import { ImageryLayer as Layer } from "resium";

import { IFrame } from "../../../interfaces/globe/Layer";
// TODO 1
/**
 * url'i dokümandaki gibi memolize et
 */
const ImageryLayer = (props: IFrame) => {
  const { frame } = props;
  const { visibility } = frame;

  return (
    <div>
      {visibility ? (
        <Layer
          imageryProvider={
            new TileMapServiceImageryProvider({
              url: buildModuleUrl("Assets/Textures/1661177348055"),
            })
          }
        />
      ) : null}
    </div>
  );
};

export default ImageryLayer;
