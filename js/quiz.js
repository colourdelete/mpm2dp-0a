/**
 * @class       : quiz
 * @author      : Ken Shibata (kenxshibata@gmail.com)
 * @description : for the quiz shortcode
 */

'use strict';

async function digestMessage(message) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

function quiz(id, i, ans, page) {
  const ie = document.getElementById(`quiz-${id}-i${i}`);
  const se = document.getElementById(`quiz-${id}-s${i}`);
  const key = `${page}-quiz-${id}-i${i}`;
  const value = localStorage.getItem(key);
  let saved = false;
  const elem = document.createElement('img');
  elem.src = '/mpm2dp-0a/orange.jpg';
  elem.style.width = '100%';
  const handler = async () => {
    const correct = (await digestMessage(ie.value)) === ans;
    se.innerText = (saved ? "remembered" : "");
    se.classList.toggle('ok', correct);
    se.classList.toggle('nok', !correct);
    if (!correct) {
      se.appendChild(elem);
    } else {
      se.removeChild(elem);
    }
    saved = false;
  };
  if (value !== null) {
    console.log(`found saved value in localStorage: ${key}`);
    ie.value = value;
    localStorage.setItem(key, ie.value);
    saved = true;
    handler();
  }
  return handler;
}

function quizzes(es, target, id, page) {
  const key = `${page}-quiz-${id}-total`;
  const value = localStorage.getItem(key);
  let saved = false;
  if (value !== null) {
    console.log(`found saved value in localStorage: ${key}`);
    target.innerText = value;
    saved = true;
  }
  return async () => {
    const total = await Promise.all(es.map(async (e) => await digestMessage(e.value)));
    const digest = await digestMessage(total);
    localStorage.setItem(key, digest);
    target.innerText = digest;
    saved = false;
  };
}

function metaQuiz(id, depIds, depDigests, page) {
  const next = document.getElementById(`metaquiz-${id}-next`);
  const a = document.getElementById(`metaquiz-${id}-a`);
  const target = document.getElementById(`metaquiz-${id}-total`);
  const handler = async () => {
    let allCorrect = true;
    let total = '';
    for (let [i, depId] of depIds.entries()) {
      const depDigest = depDigests[i];
      const e = document.getElementById(`${page}-quiz-${depId}-s${i}`);
      const status = document.getElementById(`metaquiz-${id}-s${i}`);
      const key = `${page}-quiz-${depId}-total`;
      const value = localStorage.getItem(key);
      const correct = value === depDigest;
      status.classList.toggle('ok', correct);
      status.classList.toggle('nok', !correct);
      total += value;
      allCorrect = allCorrect && correct;
    }
    const digest = await digestMessage(total);
    target.innerText = digest;
    next.style.display = allCorrect ? 'block' : 'none';
    a.href = `/mpm2dp-0a/redirect/${digest}`;
  };
  const reloadBtn = document.getElementById(`metaquiz-${id}-reload`);
  reloadBtn.addEventListener('click', handler);
  for (let depId of depIds) {
    const es = document.querySelectorAll(`#quiz-${depId} input`);
    es.forEach((e) => e.addEventListener('input', handler));
  }
  handler();
}

export { quiz, quizzes, digestMessage, metaQuiz };
