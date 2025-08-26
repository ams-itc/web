"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Cropper, { type Area } from "react-easy-crop";
import { Input } from "./ui/input";
import { getCroppedImg } from "@/helpers/get-cropped-img";

export interface AvatarUploaderProps {
  value?: string;
  onChange?: (file: File | null) => void;
  size?: number;
  className?: string;
}

export const AvatarUploader: React.FC<AvatarUploaderProps> = ({
  value,
  onChange,
  size = 96,
  className,
}) => {
  const [preview, setPreview] = React.useState<string>(value || "");
  const [cropOpen, setCropOpen] = React.useState(false);
  const [imageSrc, setImageSrc] = React.useState<string>("");
  const [crop, setCrop] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = React.useState<Area | null>(null);

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (value) setPreview(value);
  }, [value]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImageSrc(url);

    // Crop box starts at top-left
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setCropOpen(true);
  };

  const onCropComplete = React.useCallback((_: Area, croppedPixels: Area) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleCropSave = async () => {
    if (!imageSrc || !croppedAreaPixels) return;

    try {
      const croppedFile = await getCroppedImg(imageSrc, croppedAreaPixels);
      if (!croppedFile) return;

      const previewUrl = URL.createObjectURL(croppedFile);
      setPreview(previewUrl);
      if (onChange) onChange(croppedFile);
      setCropOpen(false);
    } catch (err) {
      console.error("Crop failed:", err);
    }
  };

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      {/* Preview */}
      <div
        className="relative cursor-pointer rounded-full overflow-hidden bg-gray-100 flex items-center justify-center hover:ring-2 hover:ring-indigo-500 transition"
        style={{ width: size, height: size }}
        onClick={() => inputRef.current?.click()}
      >
        {preview ? (
          <img src={preview} alt="Avatar Preview" className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400">Upload</span>
        )}
      </div>

      {/* File input */}
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={inputRef}
        onChange={handleFileChange}
      />

      {/* Crop Modal */}
      <Dialog open={cropOpen} onOpenChange={() => setCropOpen(false)}>
        <DialogContent className="sm:max-w-xl h-[400px] flex flex-col">
          <DialogHeader>
            <DialogTitle>Crop Image</DialogTitle>
          </DialogHeader>

          <div className="relative flex-1 w-full bg-gray-200">
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
              showGrid={false}
              restrictPosition={false} // free movement
              cropSize={{ width: 200, height: 200 }} // fixed crop box size
            />
          </div>

          <div className="mt-2 flex items-center gap-2">
            <span className="text-sm">Zoom:</span>
            <Input
              type="range"
              min={1}
              max={3}
              step={0.01}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="flex-1"
            />
          </div>

          <DialogFooter className="mt-4 flex justify-end gap-2">
            <Button variant="outline" onClick={() => setCropOpen(false)}>Cancel</Button>
            <Button onClick={handleCropSave}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};