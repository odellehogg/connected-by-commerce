import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { name, company, email, website, platforms, budget, message } = body;

  // Validate required fields
  if (!name || !company || !email || !message) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  // Send to Formspree — replace FORMSPREE_ID with your actual ID
  const formspreeId = process.env.FORMSPREE_ID;

  if (!formspreeId) {
    // Fallback: log and return success (for local dev)
    console.log('Enquiry received:', { name, company, email, platforms, budget, message });
    return NextResponse.json({ success: true });
  }

  const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name,
      company,
      email,
      website,
      platforms,
      budget,
      message,
      _subject: `New enquiry from ${name} at ${company}`,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
