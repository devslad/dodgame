// app/api/users/route.js
import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    // ส่ง SQL Query ผ่าน Pool
    const [rows] = await pool.query('SELECT * FROM questions');
    
    return NextResponse.json({ success: true, data: rows });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}