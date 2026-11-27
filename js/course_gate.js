/* AIDAX 课程页统一门控 v1（2026-11-27）
 * ---------------------------------------------------------------------------
 * 背景：首页「应届生 / FDE」等独立课卡片是 <a href="course_*.html"> 直达链接，
 * 而课程页本身不加载 app.html 的 AIDAX_ACL —— 于是访客绕过 canOpenCourse()
 * 直接看全课。本脚本把同一套规则下沉到课程页，堵住所有直达入口。
 *
 * 规则（与 app.v188.js 的 accountTier / validRedeemTier / gate 对齐）：
 *   - role=admin 或 loginType=admin            → 放行（含 admin=1 跳测验）
 *   - loginType=ent / role=ent                 → 放行（企业席位）
 *   - plan/tier=custom                         → 放行
 *   - user / guest：aidax_redeem 缓存 owner 匹配、
 *     tier ∈ {trial, standard} 且未过期         → 放行
 *   - 其余（含未登录、邀请码过期）              → 拦截，显示解锁遮罩
 *
 * ⚠️ 纯前端门控，与主站现有门控同级，用于挡住「顺手点进去就白看」；
 *    真正的服务端鉴权依赖后续课程资源鉴权，不在此脚本职责内。
 */
(function () {
  function parse(s) { try { return JSON.parse(s || '{}') || {}; } catch (e) { return {}; } }

  var sess = parse(localStorage.getItem('ai_training_session'));
  // 与主站一致：会话 12 小时过期
  if (sess.timestamp && (Date.now() - sess.timestamp > 12 * 3600 * 1000)) sess = {};

  function ownerKey(s) {
    if (s.role === 'admin') return 'admin';
    if (s.role === 'ent') return 'ent:' + (s.companyId || s.company || '');
    if (s.loginType === 'user' && s.loginId) return 'user:' + s.loginId;
    if (s.loginType === 'guest' && s.loginId)
      return 'guest:' + (s.company || '') + ':' + (s.phone || '') + ':' + s.loginId;
    if (s.phone) return 'guest:' + (s.company || '') + ':' + s.phone;
    if (s.loginId) return 'user:' + s.loginId;
    return '';
  }

  function allowed() {
    if (sess.role === 'admin' || sess.loginType === 'admin') return true;
    if (sess.loginType === 'ent' || sess.role === 'ent') return true;
    if (sess.plan === 'custom' || sess.tier === 'custom') return true;
    var owner = ownerKey(sess);
    if (!owner) return false;
    var r = parse(localStorage.getItem('aidax_redeem'));
    if (!r || r.owner !== owner) return false;
    if (r.tier !== 'trial' && r.tier !== 'standard') return false;
    if (!r.expiresAt || Date.parse(r.expiresAt) <= Date.now()) return false;
    return true;
  }

  window.AX_GATE = { ok: allowed(), reason: allowed() ? 'ok' : 'no-invite' };
  if (window.AX_GATE.ok) return;

  // 未授权：立刻锁住页面滚动，等 DOM 就绪后铺遮罩
  var css = document.createElement('style');
  css.textContent = [
    'html.ax-locked,html.ax-locked body{overflow:hidden!important}',
    '#ax-gate{position:fixed;inset:0;z-index:2147483647;background:#f6f8fd;',
    'display:flex;align-items:center;justify-content:center;padding:24px;',
    'font-family:-apple-system,"PingFang SC","Microsoft YaHei",sans-serif;color:#16213f}',
    '#ax-gate .ax-card{max-width:440px;width:100%;background:#fff;border:1px solid #e3e9f5;',
    'border-radius:18px;padding:36px 32px;text-align:center;box-shadow:0 18px 48px rgba(26,92,255,.10)}',
    '#ax-gate .ax-ico{width:52px;height:52px;border-radius:14px;background:#eff4ff;color:#1a5cff;',
    'display:flex;align-items:center;justify-content:center;margin:0 auto 18px;font-size:24px}',
    '#ax-gate h2{font-size:20px;font-weight:700;margin:0 0 10px}',
    '#ax-gate p{font-size:14px;line-height:1.8;color:#6b7891;margin:0 0 22px}',
    '#ax-gate .ax-btns{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}',
    '#ax-gate a{display:inline-flex;align-items:center;justify-content:center;height:42px;padding:0 22px;',
    'border-radius:10px;font-size:14px;font-weight:600;text-decoration:none;cursor:pointer}',
    '#ax-gate .ax-primary{background:#1a5cff;color:#fff;border:1px solid #1a5cff}',
    '#ax-gate .ax-primary:hover{background:#0e3aa8}',
    '#ax-gate .ax-ghost{background:#fff;color:#1a5cff;border:1px solid #c9d8ff}',
    '#ax-gate .ax-ghost:hover{background:#eff4ff}',
    '#ax-gate .ax-tip{margin-top:18px;font-size:12px;color:#93a0b8}'
  ].join('');
  (document.head || document.documentElement).appendChild(css);
  document.documentElement.className += ' ax-locked';

  function mount() {
    if (document.getElementById('ax-gate')) return;
    var d = document.createElement('div');
    d.id = 'ax-gate';
    d.innerHTML =
      '<div class="ax-card">' +
      '<div class="ax-ico">🔒</div>' +
      '<h2>这门课程需要邀请码解锁</h2>' +
      '<p>课程为付费内容，请先用邀请码激活账号再观看。<br>8 维能力测评仍然永久免费，可以先测一测再决定。</p>' +
      '<div class="ax-btns">' +
      '<a class="ax-primary" href="app.html">去登录 / 激活邀请码</a>' +
      '<a class="ax-ghost" href="index.html">返回首页</a>' +
      '</div>' +
      '<div class="ax-tip">已激活却仍看到此页？请确认是同一浏览器、同一账号</div>' +
      '</div>';
    (document.body || document.documentElement).appendChild(d);
  }

  if (document.body) mount();
  else document.addEventListener('DOMContentLoaded', mount);
})();
