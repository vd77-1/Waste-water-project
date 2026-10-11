import { Download, Printer } from "lucide-react";
import QRCode from "qrcode";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Booth } from "@/data/booths";

/** Shows (and lets you download / print) the QR code for a booth. */
export function QrDialog({ booth, onClose }: { booth: Booth | null; onClose: () => void }) {
  const [dataUrl, setDataUrl] = useState("");
  const url = booth ? `${window.location.origin}/booth/${encodeURIComponent(booth.id)}` : "";

  useEffect(() => {
    if (!booth) {
      setDataUrl("");
      return;
    }
    QRCode.toDataURL(url, { width: 560, margin: 2, errorCorrectionLevel: "M" }).then(setDataUrl);
  }, [booth, url]);

  function print() {
    const w = window.open("", "_blank", "width=480,height=640");
    if (!w || !booth) return;
    w.document.write(
      `<title>${booth.id}</title><body style="font-family:sans-serif;text-align:center;padding:24px">` +
        `<h2 style="margin:0">TRISHNA · Booth ${booth.id}</h2><p>${booth.location}</p>` +
        `<img src="${dataUrl}" style="width:320px;height:320px"/><p style="font-size:12px">Scan to check water status</p>` +
        `<script>window.onload=()=>window.print()</script></body>`,
    );
    w.document.close();
  }

  return (
    <Dialog open={!!booth} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Booth {booth?.id} · QR code</DialogTitle>
          <DialogDescription>
            Stick this on the booth. Scanning it on the Scan page opens its live status.
          </DialogDescription>
        </DialogHeader>
        {dataUrl ? (
          <img src={dataUrl} alt={`QR code for booth ${booth?.id}`} className="mx-auto h-64 w-64" />
        ) : (
          <div className="mx-auto h-64 w-64 animate-pulse rounded-xl bg-surface" />
        )}
        <p className="break-all text-center text-[11px] text-muted-foreground">{url}</p>
        <div className="flex gap-2">
          <Button asChild variant="outline" className="flex-1">
            <a href={dataUrl} download={`trishna-${booth?.id ?? "booth"}.png`}>
              <Download className="mr-2 h-4 w-4" /> Download
            </a>
          </Button>
          <Button className="flex-1" onClick={print}>
            <Printer className="mr-2 h-4 w-4" /> Print
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
