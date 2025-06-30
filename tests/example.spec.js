// @ts-check
import { test, expect } from '@playwright/test';

test('เข้าเว็บ Facebook และตรวจสอบ title', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  // ตรวจสอบว่า title มีคำว่า "Facebook"
  await expect(page).toHaveTitle(/Facebook/);
});

test('คลิกปุ่ม Create new account และตรวจสอบฟอร์มสมัครสมาชิก', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  // คลิกปุ่ม "Create new account"
  await page.getByRole('button', { name: /Create new account/i }).click();

  // ตรวจสอบว่าฟอร์ม "Sign Up" ปรากฏขึ้น (รอให้ modal แสดงก่อน)
  await expect(page.getByRole('dialog')).toContainText(/Sign Up/);
});
