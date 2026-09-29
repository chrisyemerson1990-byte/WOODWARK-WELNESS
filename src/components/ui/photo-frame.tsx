type PhotoFrameProps = {
  label: string;
  className?: string;
};

export function PhotoFrame({ label, className = "" }: PhotoFrameProps) {
  return (
    <div
      aria-label={`Photography placeholder: ${label}`}
      className={`photo-frame ${className}`}
      role="img"
    >
      <div className="photo-frame__horizon" />
      <div className="photo-frame__sun" />
      <p>
        <span>Photography direction</span>
        {label}
      </p>
    </div>
  );
}
