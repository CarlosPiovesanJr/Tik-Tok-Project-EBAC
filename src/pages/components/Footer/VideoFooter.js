import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter({ name, description, music }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{name}</h3>
        <p>{description}</p>

        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooter__icon" />
          <div className="videoFooterMusic__text">
            <p>{music}</p>
          </div>
        </div>
      </div>

      <img
        className="videoFooter__record"
        alt="Imagem de um Vinil girando"
        src="https://firebasestorage.googleapis.com/v0/b/banco-jornadadev.appspot.com/o/pngtree-vinyl-music-disc-png-image_2442017.png?alt=media&token=4789cd2f-fc3e-4fdc-9076-787dd2178915"
      />
    </div>
  );
}

export default VideoFooter;
