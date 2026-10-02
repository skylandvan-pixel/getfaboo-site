// Extract the 11-char video ID from any YouTube URL shape:
// watch?v=, youtu.be/, /embed/, /shorts/, /live/
export function getYouTubeId(url: string): string | null {
  const m = url.match(
    /(?:youtube\.com\/(?:watch\?[^#]*v=|embed\/|shorts\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/,
  );
  return m ? m[1] : null;
}

// Parse a YouTube start-time value: "636", "636s", "10m36s", "1h2m3s".
function parseStartValue(value: string): number | null {
  if (/^\d+$/.test(value)) return parseInt(value, 10);
  const m = value.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s?)?$/i);
  if (!m || (!m[1] && !m[2] && !m[3])) return null;
  const h = parseInt(m[1] ?? '0', 10);
  const min = parseInt(m[2] ?? '0', 10);
  const sec = parseInt(m[3] ?? '0', 10);
  return h * 3600 + min * 60 + sec;
}

// Read ?t= / ?start= from the URL and convert to seconds.
function getStartSeconds(url: string): number | null {
  try {
    const params = new URL(url).searchParams;
    const raw = params.get('t') ?? params.get('start');
    if (!raw) return null;
    return parseStartValue(raw);
  } catch {
    return null;
  }
}

export function getYouTubeEmbedUrl(url: string): string | null {
  const id = getYouTubeId(url);
  if (!id) return null;
  const start = getStartSeconds(url);
  return `https://www.youtube-nocookie.com/embed/${id}?rel=0${start ? `&start=${start}` : ''}`;
}
