
/* ===================== 课程数据（构建时注入） ===================== */
const COURSE = {"id": "fde_deep", "role": "fde", "customization": {"industry": "通用（不含行业属性）", "company": "你的客户现场", "product": "待落地场景"}, "modules": [{"id": "M0", "title": "M0 认识 FDE：谁在真正推动 AI 落地", "dims": ["strategy", "workflow", "security"], "units": [{"id": "M0U1", "tier": "basic", "step": "understand", "title": "三种角色：谁签合同、谁调模型、谁把它跑起来", "video": {"dur": "5.0min", "script": ["客户说「我们也要做 AI」，接下来会上场三拨人：售前签合同、算法调模型、FDE 把它跑进业务", "FDE 的活是把一句抱怨翻译成一串可执行动作，在客户现场跑通、验收，并留下能复用的东西", "某集团买了平台，许可证堆在机房，三个月没一个场景上线——缺的不是模型，是现场那个人"]}, "ppt": {"method": "三角色分工图：售前（签什么）/ 算法（调什么）/ FDE（跑什么），每格标一个交付物", "case": "某集团平台买完三个月零上线，卡在没人把场景跑通", "demo": "拿一句客户原话，现场拆成「谁来做、做成什么样、怎么算成」三行"}, "objective": "能在一张纸上写清 FDE / 售前 / 算法与 IT 三方的交付边界，并用一句客户原话演示它怎么落到 FDE 头上", "transfer": "回公司翻一个正在推的 AI 项目，标出「谁签的合同、谁调的模型、谁在现场跑」，缺哪环写下来交给负责人", "deliverable": {"type": "document", "name": "三方边界卡", "rubric": ["边界清晰", "交付物可核对", "有真实项目对照"], "acceptance": "能产出《三方边界卡》并通过本单元评分要点"}, "task": "写一张三方边界卡：把你的项目按售前 / 算法 / FDE 三列填满，每列只写「交付什么」，最后一行写「现在缺哪一列」。", "brief": "先分清谁负责什么，再谈怎么干。边界不清的项目，最后都会变成一个人扛全部。", "template": "【三方边界卡】\n项目名称：\n客户原话（一句）：\n\n① 售前：签的是什么？交付物 →\n② 算法/IT：调的是什么？交付物 →\n③ FDE：跑的是什么？交付物 →\n\n哪一列现在最薄：\n这一列薄，会导致（写一个具体后果）：", "exemplar": "项目：集团财务共享中心的费用审核\n客户原话：「每个月报销单堆成山，审核员一天看两百张，还是漏。」\n① 售前：签的是平台许可 + 首年服务，交付物是合同与开工计划\n② 算法/IT：调的是发票 OCR 与科目匹配模型，交付物是接口与准确率报告\n③ FDE：跑的是「审核场景落地」，交付物是审核 SOP、规则清单、评测集与验收报告\n最薄的一列：FDE。后果：OCR 准确率 98% 也没用，因为没人定义「什么算审过」，审核员不敢用。", "quiz": [{"q": "客户说要上 AI 审核，售前已经把平台卖出去了。此时最该由谁接手？", "opts": ["等算法团队把模型调好再说", "FDE 进场，把「审核」拆成可执行动作并定义什么算审过", "让 IT 部门先做系统集成", "先做一轮全员培训"], "a": 1, "why": "模型准不准是第二步；第一步是有人把场景拆开、定义验收口径，这就是 FDE 的活。"}, {"q": "下面哪项最像 FDE 的交付物，而不是售前或算法的交付物？", "opts": ["一份平台采购合同", "一份模型准确率报告", "一份带验收口径的场景落地包（SOP + 规则 + 评测集）", "一份产品报价单"], "a": 2, "why": "合同归售前，准确率归算法；能把场景跑通并说清「怎么算成」的落地包才是 FDE 的产出。"}], "vslides": [{"t": "这一节先分清三拨人", "n": "客户说要上 AI，接下来上场的不止一个人。先看售前：签合同，交付许可、服务与开工计划。再看算法和 IT：调模型、接系统，交付接口与准确率。最后是 FDE：把它跑进业务现场，交付 SOP、规则与验收。三件事都可能有人在干，但常常没人干第三件。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">这一节先分清三拨人</tspan></text><g data-k=\"售前 签合同\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">售前 签合同</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">交付许可、服务与开工计划</tspan></text></g><g data-k=\"算法与 IT 调模型\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">算法与 IT 调模型</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">交付接口、准确率与系统集成</tspan></text></g><g data-k=\"FDE 跑进业务\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">FDE 跑进业务</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">交付 SOP、规则与验收口径</tspan></text></g></svg>", "d": 24.6}, {"t": "FDE 的三件交付物", "n": "FDE 不是来讲课的，也不是来调参的。他的第一件交付物是场景 SOP，把一句抱怨拆成一串可执行动作。第二件是规则清单，写清什么算审过、什么算例外。第三件是评测集，用真实样本加口径，能反复回放。三样缺一样，项目就会退回演示阶段。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">FDE 的三件交付物</tspan></text><g data-k=\"① 场景 SOP\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">① 场景 SOP</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">一句抱怨拆成一串可执行动作</tspan></text></g><g data-k=\"② 规则清单\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">② 规则清单</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">写清什么算审过、什么算例外</tspan></text></g><g data-k=\"③ 评测集\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">③ 评测集</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">真实样本加口径，可反复回放</tspan></text></g></svg>", "d": 23.2}, {"t": "案例：平台买了三个月零上线", "n": "有个集团买了整套平台，许可证堆在机房，三个月没有一个场景真正上线。复盘时发现三件事都做了：合同签了、模型调了、接口通了。缺的是最后一步——没人把审核这件事拆开，也没人定义什么算审过。所以缺的不是模型，是现场那个人。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">案例：平台买了三个月零上线</tspan></text><g data-k=\"合同签了\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">合同签了</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">售前已经交付许可与开工计划</tspan></text></g><g data-k=\"模型调了\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">模型调了</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">算法给出接口与准确率报告</tspan></text></g><g data-k=\"还是零上线\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">还是零上线</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">没有 SOP、没有规则、没有评测集</tspan></text></g></svg>", "d": 21.9}, {"t": "一句话怎么落到 FDE 头上", "n": "拿到客户一句原话，按三步走。第一步原话不改，先记下来。第二步拆成动作，一句话对应几个可执行动作。第三步定标准、定人看，说清做到什么程度算完、谁来验收。三步走完，抱怨就变成了任务。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">一句话怎么落到 FDE 头上</tspan></text><g data-k=\"① 原话不改\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">① 原话不改</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">先把客户的抱怨原样记下来</tspan></text></g><g data-k=\"② 拆成动作\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">② 拆成动作</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">一句话对应几个可执行动作</tspan></text></g><g data-k=\"③ 定标准 · 定人看\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">③ 定标准 · 定人看</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">做到什么程度算完、谁来验收</tspan></text></g></svg>", "d": 18.2}, {"t": "小结", "n": "记住一句话：合同、模型、场景是三件事，FDE 负责第三件。下一节讲怎么用三个问题，判断一个人是不是真的在干第三件。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"三件事分开看\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">三件事分开看</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">合同 / 模型 / 场景，别混成一件</tspan></text></g><g data-k=\"FDE 负责第三件\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">FDE 负责第三件</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">把场景跑进业务现场</tspan></text></g></svg>", "d": 11.7}]}, {"id": "M0U2", "tier": "basic", "step": "understand", "title": "真假 FDE 的试金石", "video": {"dur": "4.6min", "script": ["判断真假 FDE 只看一件事：拿到一句模糊抱怨，能不能拆出可执行动作，并说清什么算做完", "三条判据：能问出隐性流程、能给出可回放的评测方式、能留下别人可复用的资产", "只讲工具多好用、只谈模型多强、只承诺效果的人，通常不是 FDE"]}, "ppt": {"method": "真假 FDE 对照表：三个问题（怎么拆、怎么验、留下什么）× 真 / 假两种回答", "case": "面试时两个人选，一个讲了 20 个工具名，一个讲了他怎么把一句抱怨拆成 7 个动作——后者当场录用", "demo": "给自己做一次「三问自检」，每题只允许写两句"}, "objective": "能用三问判断一个人（或自己）是不是真 FDE，并说出判断依据", "transfer": "用这三问去问一次你的客户或你的团队，把回答记下来，对照哪一问答不上来", "deliverable": {"type": "document", "name": "三问自检表", "rubric": ["三问齐全", "回答具体到动作", "能指出自己最弱的一问"], "acceptance": "能产出《三问自检表》并通过本单元评分要点"}, "task": "按三问写自检表：① 这句抱怨你怎么拆 ② 你怎么证明它成了 ③ 你留下什么给别人用。每题两句，不许写工具名。", "brief": "禁写工具名的目的，是逼你把注意力从「我会用什么」挪到「我要交付什么」。", "template": "【三问自检】\n① 拿到这句抱怨，我会拆成哪几个动作？（2 句）\n② 我怎么证明它成了？验收看什么、谁来看？（2 句）\n③ 我留下什么，别人下次不用重新做？（2 句）\n\n我最弱的一问是：____，因为：", "exemplar": "① 拆：「漏审」拆成四段——票据识别、科目匹配、金额异常、附件完整性；每段定一条判定标准。\n② 验：抽 200 张历史单据做评测集，看四段的漏检率；由审核主管签字认可口径。\n③ 留：四段判定标准做成一张规则卡 + 一份 200 张的评测集，下一个场景直接换数据复用。\n最弱：② 验。因为过去我习惯用「客户说好用」当验收，没有可回放的样本。", "quiz": [{"q": "判断一个人是不是真 FDE，最有效的一问是？", "opts": ["你熟悉哪些 AI 工具", "你做过多少个项目", "拿到这句抱怨，你打算拆成哪几个动作、怎么证明做成了", "你能拿到多少预算"], "a": 2, "why": "工具和项目数量都可包装；能否拆解并定义验收，是能力本身。"}, {"q": "「客户说好用」为什么不能算验收通过？", "opts": ["因为客户可能客气", "因为它不可回放、不可复现，换个人来无法判断是否真的达标", "因为要写进合同才算", "因为客户不懂技术"], "a": 1, "why": "口头满意无法复盘；可回放的样本加口径，才能在下一次交付里复现。"}], "vslides": [{"t": "只看一件事：能不能拆", "n": "判断真假 FDE 不需要看简历。只看一件事：拿到一句模糊的抱怨，他能不能拆出可执行动作。拆不出来的人，工具再熟也只是在演示。拆得出来的人，才谈得上交付。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">只看一件事：能不能拆</tspan></text><g data-k=\"一句模糊抱怨\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">一句模糊抱怨</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">客户说的往往不是需求，是症状</tspan></text></g><g data-k=\"拆成可执行动作\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">拆成可执行动作</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">每个动作都要有判据</tspan></text></g><g data-k=\"说清什么算做完\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">说清什么算做完</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">没有验收口径就不算拆完</tspan></text></g></svg>", "d": 15.6}, {"t": "三问：怎么拆、怎么验、留什么", "n": "三问分别是：这句抱怨你怎么拆？你怎么证明它成了？你留下什么给别人用？第一问看拆解能力，拆成几个动作、每个动作的判据是什么。第二问看交付纪律，看什么样本、谁来签字认可口径。第三问看有没有让别人少走一遍路。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">三问：怎么拆、怎么验、留什么</tspan></text><g data-k=\"① 怎么拆\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">① 怎么拆</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">拆成几个动作，每个动作的判据是什么</tspan></text></g><g data-k=\"② 怎么验\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">② 怎么验</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">看什么样本、谁来签字认可口径</tspan></text></g><g data-k=\"③ 留什么\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">③ 留什么</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">规则卡、评测集、可复用的模板</tspan></text></g></svg>", "d": 20.7}, {"t": "案例：20 个工具名 vs 7 个动作", "n": "面试两个人。候选 A 讲了二十个工具名，很热闹，但说不出验收口径，也没留下可复用资产。候选 B 讲了他怎么把客户一句漏审拆成七个动作，每个动作一条判据，还用两百张样本做了评测。当场录用的是 B，因为他讲的是交付。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">案例：20 个工具名 vs 7 个动作</tspan></text><g data-k=\"候选 A 讲工具\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">候选 A 讲工具</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">熟悉二十多个工具，说不出验收口径</tspan></text></g><g data-k=\"候选 B 讲动作\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">候选 B 讲动作</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">把漏审拆成七个动作，每个一条判据</tspan></text></g><g data-k=\"录用 B\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">录用 B</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">他讲的是交付，不是工具</tspan></text></g></svg>", "d": 21.7}, {"t": "把三问写成自检表", "n": "给自己做一次自检。第一步写三问，第二步每题只用两句，第三步不许写工具名，第四步找出最弱的一问。写不出来，说明你过去做的是演示；写得出来但第二问最弱，说明你还没有交付纪律。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">把三问写成自检表</tspan></text><g data-k=\"写三问\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">写三问</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">拆、验、留，各写两句</tspan></text></g><g data-k=\"不许写工具名\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">不许写工具名</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">逼自己谈交付而不是谈工具</tspan></text></g><g data-k=\"找出最弱一问\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">找出最弱一问</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">那就是下一步要补的地方</tspan></text></g></svg>", "d": 17.4}, {"t": "小结", "n": "记住：能拆、能验、能留，三样齐了才叫 FDE。下一节看你自己偏业务还是偏技术，这决定了你该找谁互补。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"能拆 · 能验 · 能留\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">能拆 · 能验 · 能留</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">三样齐了才叫 FDE</tspan></text></g><g data-k=\"缺一问就退回试点\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">缺一问就退回试点</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">项目会停在演示阶段</tspan></text></g></svg>", "d": 10.2}]}, {"id": "M0U3", "tier": "adv", "step": "demo", "title": "Echo 与 Delta：你偏业务侧还是技术侧", "video": {"dur": "5.2min", "script": ["FDE 有两侧：Echo 侧听得懂业务在说什么，Delta 侧能把系统改到能跑；多数人只强一侧", "偏 Echo 的人卡在「方案画得漂亮，跑不起来」；偏 Delta 的人卡在「跑得起来，但没人用」", "先给自己定位，再找一个互补的人，比硬补短板更快"]}, "ppt": {"method": "两侧能力轴：Echo（业务语言/访谈/流程）↔ Delta（数据/接口/评测），标出自己位置与互补缺口", "case": "一个技术很强的工程师交付时被业务方晾在一边，因为他说的话业务听不懂", "demo": "现场给自己的项目画一条轴，标出自己与客户对接人的位置"}, "objective": "能判断自己偏哪一侧，并说出这次项目该找谁互补", "transfer": "约一个互补的同事吃顿饭，把你的项目卡点讲给他，请他指出你漏掉的那一侧", "deliverable": {"type": "document", "name": "能力侧定位卡", "rubric": ["定位有依据", "写出互补人选", "写清互补要做什么"], "acceptance": "能产出《能力侧定位卡》并通过本单元评分要点"}, "task": "写定位卡：我偏哪侧、证据是什么（举两件真实做过的事）、这次项目缺哪侧、找谁补、请对方做什么。", "brief": "互补不是找人背锅，是把对方要做的事写清楚到可以交接。", "template": "【能力侧定位卡】\n我偏：□ Echo 业务侧　□ Delta 技术侧\n证据 1（做过的事）：\n证据 2（做过的事）：\n\n本项目最缺的一侧：\n可以找的人：\n请他做（具体到交付物）：", "exemplar": "我偏 Delta：我能独立写完评测脚本、能把接口调通、能定位到模型在哪类样本上失效。\n证据：上一版审批助手，我用 300 条样本把准确率从 71% 提到 89%。\n缺口：Echo。业务方说「这个流程太绕」时，我第一反应是改系统而不是问「绕在哪一步」。\n找的人：客户方的运营主管。\n请他做：用半天时间带我走一遍真实单据流转，并指出他自己会跳过的两个步骤。", "quiz": [{"q": "业务方总说「你们这个不好用」，偏 Delta 的 FDE 最该补的动作是？", "opts": ["再优化一次模型准确率", "请业务方带你走一遍真实操作，找出他跳过的步骤", "加一份使用说明", "换一个更快的界面"], "a": 1, "why": "「不好用」通常指流程不匹配；走一遍真实操作才能看到隐性步骤，这是 Echo 侧能力。"}, {"q": "找互补的人时，最该写清的是？", "opts": ["请他多帮忙", "把请他做的事写到具体交付物", "给他一部分项目奖金", "让他全程参与所有会议"], "a": 1, "why": "「多帮忙」无法交接；写到交付物，别人才知道做到什么程度算完成。"}], "vslides": [{"t": "FDE 有两侧：Echo 与 Delta", "n": "FDE 的能力分两侧。Echo 侧听得懂业务语言，能访谈、能画流程，知道谁真正在干活；弱在跑不起来。Delta 侧能搭能调能评测，能定位失效样本；弱在没人愿意用。多数人只强一侧，这很正常，问题是不知道自己站在哪一侧。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">FDE 有两侧：Echo 与 Delta</tspan></text><g data-k=\"Echo 业务侧\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">Echo 业务侧</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">听得懂业务语言，能访谈能画流程</tspan></text></g><g data-k=\"Delta 技术侧\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">Delta 技术侧</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">能搭能调能评测，能定位失效样本</tspan></text></g><g data-k=\"多数人只强一侧\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">多数人只强一侧</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">先定位，再找互补</tspan></text></g></svg>", "d": 22.1}, {"t": "偏一侧的人各卡在哪", "n": "偏 Echo 的人方案画得漂亮，一上真实数据就崩；偏 Delta 的人系统跑得通，但业务方不用。两种卡点看起来是技术问题，实际都是缺了另一侧。共同原因只有一个：把另一侧当成别人的事。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">偏一侧的人各卡在哪</tspan></text><g data-k=\"偏 Echo 的卡点\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">偏 Echo 的卡点</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">方案漂亮，一上真实数据就崩</tspan></text></g><g data-k=\"偏 Delta 的卡点\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">偏 Delta 的卡点</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">跑得通，但业务方不用</tspan></text></g><g data-k=\"共同原因\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">共同原因</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">把另一侧当成别人的事</tspan></text></g></svg>", "d": 18.7}, {"t": "案例：技术很强，被晾在一边", "n": "一位技术很强的工程师，交付会上被业务方晾在一边。他不是不会做，模型、接口、评测都做完了。问题是他讲的每一句话业务都听不懂。他缺的不是技术，是学会用业务的语言说同一件事。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">案例：技术很强，被晾在一边</tspan></text><g data-k=\"技术做完了\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">技术做完了</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">模型、接口、评测都到位</tspan></text></g><g data-k=\"没人听懂\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">没人听懂</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">讲的每一句业务都接不上</tspan></text></g><g data-k=\"缺的是表达\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">缺的是表达</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">用业务语言说同一件事</tspan></text></g></svg>", "d": 17.2}, {"t": "找到互补的人并写清交接", "n": "互补不是找人背锅，是把对方要做的事写清楚到能交接。分四步：先定位自己偏哪侧，再找出缺口侧，然后选互补的人，最后写到交付物。写不清交付物，互补就会变成互相等。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">找到互补的人并写清交接</tspan></text><g data-k=\"定位自己\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">定位自己</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">偏 Echo 还是偏 Delta，带证据</tspan></text></g><g data-k=\"找出缺口侧\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">找出缺口侧</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">这次项目最缺哪一侧</tspan></text></g><g data-k=\"写到交付物\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">写到交付物</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">请他做什么、交什么、何时交</tspan></text></g></svg>", "d": 16.0}, {"t": "小结", "n": "记住：先定位自己偏哪侧，再找一个互补的人，比硬补短板快得多。下一节讲三个看起来热闹、实际什么都没改变的陷阱。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"承认只强一侧\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">承认只强一侧</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">这不是缺点，是起点</tspan></text></g><g data-k=\"找互补最快\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">找互补最快</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">硬补短板慢，互补快</tspan></text></g></svg>", "d": 11.1}]}, {"id": "M0U4", "tier": "adv", "step": "demo", "title": "三个陷阱：只做 Demo、只做培训、只搬工具", "video": {"dur": "4.8min", "script": ["三个陷阱的共同点：都很热闹，但都不改变任何人的日常工作", "Demo 陷阱：演示很好看，一到真实数据就露馅；培训陷阱：讲完就散，没人用；搬运陷阱：把旧流程套上 AI，效率没变", "破法只有一个：交付物必须是「改完的一段流程」，不是一场演示、一堂课、一个工具账号"]}, "ppt": {"method": "三陷阱对照表：表现 / 为什么热闹 / 三个月后的结果 / 破法", "case": "某公司做了 12 场 AI 培训，调研时 80% 员工说「听过」，只有 5% 说「在用」", "demo": "把自己项目里的三个陷阱各写一句，标出最像哪一个"}, "objective": "能识别项目正在踩哪个陷阱，并说出对应的破法", "transfer": "回项目上找一个「已经演示过但没上线」的场景，写出它卡在哪个陷阱", "deliverable": {"type": "document", "name": "陷阱体检表", "rubric": ["三个陷阱都对照过", "指出最像的一个", "给出破法"], "acceptance": "能产出《陷阱体检表》并通过本单元评分要点"}, "task": "写体检表：逐条对照三个陷阱，各给一个你项目里的证据；最后写「最像哪一个 + 破法一句话」。", "brief": "证据要写具体到某次会议、某个人说的话，不要写「存在一定问题」。", "template": "【陷阱体检】\n① Demo 陷阱 —— 项目里的证据：\n② 培训陷阱 —— 项目里的证据：\n③ 搬运陷阱 —— 项目里的证据：\n最像的是：\n破法（一句话，必须落到「改哪段流程」）：", "exemplar": "① Demo 陷阱：上次给集团领导演示用的是清洗过的 50 条数据，真实单据里有 12% 是手机拍的歪图，一跑就废。\n② 培训陷阱：8 月做了 3 场培训，签到 120 人，但后台看只有 9 个账号真正跑过任务。\n③ 搬运陷阱：把原来纸质的报销单换成在系统里填，审批人还是逐张看，只是从看纸变成看屏幕。\n最像：③ 搬运。\n破法：把「逐张看」改成「只看规则命中项」，其余自动通过，并给审核员一个抽检入口。", "quiz": [{"q": "「把纸质审批搬成线上审批，审核员仍然逐张看」属于哪个陷阱？", "opts": ["Demo 陷阱", "培训陷阱", "搬运陷阱", "都不属于"], "a": 2, "why": "流程没变，只换了载体，效率不会变——这是搬运陷阱。"}, {"q": "破这三个陷阱的共同前提是？", "opts": ["换更强的模型", "交付物必须是一段被改过的日常流程", "多做几次演示", "增加培训场次"], "a": 1, "why": "演示、培训、工具都不改变日常动作；只有流程被改，才算落地。"}], "vslides": [{"t": "三个陷阱的共同点", "n": "Demo、培训、工具搬运，三个陷阱的共同点是一样的：都很热闹，但都不改变任何人的日常工作。热闹会让项目看起来在推进，实际上什么都没落地。判断标准只有一个：交付后，谁每天的动作变了。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">三个陷阱的共同点</tspan></text><g data-k=\"Demo 陷阱\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">Demo 陷阱</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">用干净数据演示，真实数据一跑就废</tspan></text></g><g data-k=\"培训陷阱\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">培训陷阱</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">签到很多，真正在用的人极少</tspan></text></g><g data-k=\"搬运陷阱\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">搬运陷阱</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">流程没变，只换了载体</tspan></text></g></svg>", "d": 18.4}, {"t": "每个陷阱长什么样", "n": "Demo 陷阱用清洗过的数据演示，一上真实数据就崩。培训陷阱课讲完就散，签到一百人、真正用的可能只有九个。搬运陷阱把纸质流程搬成线上，审核员还是逐张看，只是从看纸变成看屏幕。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">每个陷阱长什么样</tspan></text><g data-k=\"演示用干净数据\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">演示用干净数据</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">真实数据里一成是手机拍的歪图</tspan></text></g><g data-k=\"签到不等于在用\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">签到不等于在用</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">后台看只有个位数账号跑过任务</tspan></text></g><g data-k=\"流程没变\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">流程没变</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">从看纸变成看屏幕，效率没变</tspan></text></g></svg>", "d": 17.8}, {"t": "案例：12 场培训，5% 在用", "n": "某公司做了十二场 AI 培训。调研时八成员工说听过，只有百分之五说在用。热闹是真的，落地是假的。问题不在培训质量，在于没人改他们的日常动作——听完课，第二天还是按老办法干活。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">案例：12 场培训，5% 在用</tspan></text><g data-k=\"12 场培训\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">12 场培训</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">签到率很高，反馈也不错</tspan></text></g><g data-k=\"80% 听过\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">80% 听过</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">调研里大部分人说听过</tspan></text></g><g data-k=\"5% 在用\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">5% 在用</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">真正改变日常动作的只有百分之五</tspan></text></g></svg>", "d": 17.8}, {"t": "共同的破法：改一段流程", "n": "破法只有一个：交付物必须是一段被改过的日常流程，而不是一场演示、一堂课、一个账号。做法分四步：先找到日常动作，再定改哪一段，交付后回看，最后确认谁的动作变了。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">共同的破法：改一段流程</tspan></text><g data-k=\"找到日常动作\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">找到日常动作</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">每天都要做的那几步</tspan></text></g><g data-k=\"定改哪一段\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">定改哪一段</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">只改一段，别想一次全改</tspan></text></g><g data-k=\"回看谁的动作变了\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">回看谁的动作变了</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">没有人变，就等于没落地</tspan></text></g></svg>", "d": 16.2}, {"t": "小结", "n": "记住一句：没有流程改动，就不算落地。下一节讲一个更现实的问题——FDE 挂在哪个部门，才推得动流程。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"交付物 = 一段被改过的流程\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">交付物 = 一段被改过的流程</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不是演示、不是课程、不是账号</tspan></text></g><g data-k=\"没有流程改动 = 没落地\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">没有流程改动 = 没落地</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">这是唯一硬标准</tspan></text></g></svg>", "d": 10.2}]}, {"id": "M0U5", "tier": "adv", "step": "todo", "title": "组织归属：FDE 该挂在哪个部门", "video": {"dur": "5.0min", "script": ["FDE 挂在哪，决定他能不能推动流程改动：挂 IT 缺业务授权，挂业务缺技术资源", "三种常见归属：业务部门内嵌、数字化/IT 中台、独立 AI 落地小组，各有代价", "选归属的原则：谁掌握「改流程」的签字权，就先靠谁"]}, "ppt": {"method": "三种归属对比：汇报线 / 优势 / 代价 / 适合什么阶段的公司", "case": "某银行把 FDE 放在科技部，结果每个场景都要业务部门审批，一个流程改三个月", "demo": "现场画一张你公司的组织小图，标出「改流程要谁签字」"}, "objective": "能为自己（或团队）选定归属方案，并说出理由与代价", "transfer": "找你的直属上级谈一次归属问题，带上你写的方案与他可能提出的两个反对意见", "deliverable": {"type": "document", "name": "归属方案一页纸", "rubric": ["三种归属都评估过", "选定一种并给理由", "写清代价与应对"], "acceptance": "能产出《归属方案一页纸》并通过本单元评分要点"}, "task": "写一页纸：三种归属各写一句优劣，选一种，写清代价和你怎么应对，最后写「谁掌握改流程的签字权」。", "brief": "不要写「建议加强协同」这类空话，要写具体汇报线和决策权。", "template": "【归属方案】\n本公司改流程的签字权在：\n\n方案 A 业务部门内嵌：优 / 劣 →\n方案 B 数字化/IT 中台：优 / 劣 →\n方案 C 独立落地小组：优 / 劣 →\n\n选：____　理由：\n代价：____　应对：", "exemplar": "签字权：业务条线的分管副总（流程改动需其签批），IT 只负责系统实施。\nA 业务内嵌：优——离签字权最近，改动快；劣——技术资源要借，排期不可控。\nB IT 中台：优——资源稳定；劣——每个改动都要业务审批，平均 6 周。\nC 独立小组：优——跨部门推动力强；劣——容易被当成临时项目，一年后解散。\n选 A。理由：我们要的是流程改得快，技术资源可以按场景向 IT 借。\n代价：IT 排期排队。应对：把需求拆到「一个接口 + 一张规则表」的最小粒度，降低对排期的依赖。", "quiz": [{"q": "选择 FDE 归属时最该优先看的是？", "opts": ["哪个部门人更多", "谁掌握改流程的签字权", "哪个部门预算更多", "领导的个人偏好"], "a": 1, "why": "FDE 的价值在改流程；离签字权越远，落地越慢。"}, {"q": "把 FDE 放在 IT 中台最常见的代价是？", "opts": ["技术能力不足", "每个流程改动都要业务侧审批，周期被拉长", "薪资成本更高", "无法接触到数据"], "a": 1, "why": "技术资源反而更稳，卡点在业务授权与审批链条。"}], "vslides": [{"t": "归属决定你能不能改流程", "n": "FDE 挂在哪个部门，决定他能不能推动流程改动。挂 IT 缺业务授权，挂业务缺技术资源，挂独立小组容易变成临时项目。没有完美选项，只有代价不同。原则只有一句：谁掌握改流程的签字权，就先靠谁。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">归属决定你能不能改流程</tspan></text><g data-k=\"挂 IT 中台\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">挂 IT 中台</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">资源稳，但每个改动都要业务审批</tspan></text></g><g data-k=\"挂业务部门\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">挂业务部门</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">改得快，但技术资源要借</tspan></text></g><g data-k=\"挂独立小组\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">挂独立小组</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">推动力强，容易被当临时项目砍掉</tspan></text></g></svg>", "d": 19.5}, {"t": "三种归属各自的代价", "n": "业务内嵌离签字权最近，代价是技术资源要借、排期不可控。IT 中台资源稳定，代价是每次改动都要业务审批。独立小组跨部门推动力强，代价是容易被当成临时项目，一年后解散。选之前先把这个代价写出来。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">三种归属各自的代价</tspan></text><g data-k=\"业务内嵌\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">业务内嵌</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">改得快 / 技术资源要借、排期不可控</tspan></text></g><g data-k=\"IT 中台\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">IT 中台</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">资源稳 / 每次改动都要业务审批</tspan></text></g><g data-k=\"独立小组\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">独立小组</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">推动力强 / 容易被当临时项目砍掉</tspan></text></g></svg>", "d": 19.5}, {"t": "案例：一个流程改三个月", "n": "某银行把 FDE 放在科技部。技术没问题，资源也够，但每个场景改动都要业务部门审批。结果一个流程走三个月。这不是能力问题，是归属选错的代价——离签字权太远。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">案例：一个流程改三个月</tspan></text><g data-k=\"放在科技部\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">放在科技部</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">技术资源充足，排期也稳</tspan></text></g><g data-k=\"每个改动都要审批\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">每个改动都要审批</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">业务部门点头才能动流程</tspan></text></g><g data-k=\"一个流程走三个月\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">一个流程走三个月</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">卡在授权链条，不是卡在技术</tspan></text></g></svg>", "d": 16.0}, {"t": "怎么选：先问谁签字", "n": "选归属只问一句：本公司改流程要谁签字。签字权在业务，就先靠业务；签字权在 IT，就先靠 IT。选定之后，把这个选择的代价写清楚，再提前想好应对办法。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">怎么选：先问谁签字</tspan></text><g data-k=\"谁签流程改动\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">谁签流程改动</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">这是唯一决定性的问题</tspan></text></g><g data-k=\"先靠签字权那一侧\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">先靠签字权那一侧</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">离签字权越近，落地越快</tspan></text></g><g data-k=\"写清代价与应对\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">写清代价与应对</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">提前想好，比事后抱怨有用</tspan></text></g></svg>", "d": 15.2}, {"t": "小结", "n": "记住：归属不是组织问题，是落地速度问题。下一节把前面这些收成一份 90 天起步计划。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"离签字权越近越快\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">离签字权越近越快</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">落地速度由授权链条决定</tspan></text></g><g data-k=\"把代价提前写出来\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">把代价提前写出来</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">这是专业做法</tspan></text></g></svg>", "d": 8.6}]}, {"id": "M0U6", "tier": "adv", "step": "todo", "title": "你的 FDE 画像与 90 天差距清单", "video": {"dur": "5.4min", "script": ["FDE 能力可以拆成五块：业务理解、场景拆解、方案搭建、交付验收、资产沉淀", "90 天不求全能，只求在一个真实场景上跑完一遍完整链路，其余四块跟着长", "差距清单要写成「这周做什么」，不要写成「要提升业务理解」"]}, "ppt": {"method": "五块能力雷达 + 90 天节奏（第 1 月跟跑 / 第 2 月主导一个场景 / 第 3 月交付并沉淀）", "case": "同一批入职的两个人，一个三个月做了 5 个 Demo，一个交付了 1 个场景并留下规则卡——后者被留下", "demo": "现场把自己的 90 天写成三段，每段只写一件可交付的事"}, "objective": "能写出自己的五块能力自评与 90 天三段计划，每段都有可交付物", "transfer": "把这份 90 天计划发给你的上级，请他改一处，并约一次两周后的检查", "deliverable": {"type": "plan", "name": "90 天起步计划", "rubric": ["五块都有自评", "三段各有一件交付物", "时间点可检查"], "acceptance": "能产出《90 天起步计划》并通过本单元评分要点"}, "task": "写 90 天计划：五块能力各打 1–5 分并写一句证据；三段各写「时间 / 做什么 / 交出什么 / 谁来看」。", "brief": "自评要带证据，没有证据的分数一律按最低算。", "template": "【90 天起步计划】\n五块自评（1–5，各带一句证据）：\n业务理解 __ 证据：\n场景拆解 __ 证据：\n方案搭建 __ 证据：\n交付验收 __ 证据：\n资产沉淀 __ 证据：\n\n第 1 月（跟跑）：做什么 / 交出什么 / 谁来看\n第 2 月（主导）：做什么 / 交出什么 / 谁来看\n第 3 月（交付+沉淀）：做什么 / 交出什么 / 谁来看", "exemplar": "业务理解 4：能独立跟业务方聊两小时并画出流程断点。\n场景拆解 3：拆过 3 个场景，但常漏掉审批环节。\n方案搭建 4：能独立在平台上搭出可演示版本。\n交付验收 2：只做过口头验收，没建过评测集。\n资产沉淀 1：没留下任何可复用的东西。\n\n第 1 月：跟着资深 FDE 跑一个费用审核场景；交出「流程断点图 + 20 条评测样本」；由资深 FDE 看。\n第 2 月：主导一个合同比对场景；交出「最小可用版本 + 规则清单」；由业务主管看。\n第 3 月：把审核场景交付上线；交出「验收报告 + 规则卡资产」；由部门评审会看。", "quiz": [{"q": "90 天计划里最该避免的写法是？", "opts": ["第 2 月主导一个场景", "提升业务理解能力", "第 1 月交出 20 条评测样本", "第 3 月交验收报告"], "a": 1, "why": "「提升某能力」无法检查；要写成具体交付物与检查人。"}, {"q": "五块能力自评时，没有证据的分数应该怎么处理？", "opts": ["按自己的感觉给", "按最低分算，直到拿出证据", "取中间值", "跳过不评"], "a": 1, "why": "无证据的高分会让计划建立在错误假设上，按最低分算才诚实。"}], "vslides": [{"t": "FDE 能力拆成五块", "n": "FDE 的能力可以拆成五块。业务理解与场景拆解，决定你听得懂、拆得开。方案搭建与交付验收，决定你搭得出、验得清。资产沉淀决定你留得下、别人能复用。前四块决定能不能交付，第五块决定别人能不能接着用。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">FDE 能力拆成五块</tspan></text><g data-k=\"业务理解与场景拆解\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">业务理解与场景拆解</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">听得懂，拆得开</tspan></text></g><g data-k=\"方案搭建与交付验收\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">方案搭建与交付验收</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">搭得出，验得清</tspan></text></g><g data-k=\"资产沉淀\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">资产沉淀</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">留得下，别人能复用</tspan></text></g></svg>", "d": 20.1}, {"t": "90 天不求全能", "n": "90 天不要想着五块一起补。正确节奏是四段：第一个月跟跑一个真实场景，第二个月自己主导一个，第三个月交付上线，最后沉淀资产。全程只围绕一个场景，其余四块跟着长。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">90 天不求全能</tspan></text><g data-k=\"第 1 月 跟跑\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">第 1 月 跟跑</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">跟着资深 FDE 走一遍完整链路</tspan></text></g><g data-k=\"第 2 月 主导\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">第 2 月 主导</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">自己带一个场景，从拆到搭</tspan></text></g><g data-k=\"第 3 月 交付沉淀\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">第 3 月 交付沉淀</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">上线验收，留下规则卡与评测集</tspan></text></g></svg>", "d": 16.4}, {"t": "案例：5 个 Demo vs 1 个交付", "n": "同一批入职的两个人。一个三个月做了五个 Demo，每个都很漂亮，但一个都没上线，也没留下资产，换人就归零。另一个只交付了一个场景，但真实上线运行，有验收报告，还留下规则卡让别人能复用。被留下的是后者。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">案例：5 个 Demo vs 1 个交付</tspan></text><g data-k=\"做了 5 个 Demo\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">做了 5 个 Demo</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">每个都能演示，一个都没上线</tspan></text></g><g data-k=\"交付 1 个场景\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">交付 1 个场景</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">真实上线，有验收报告与规则卡</tspan></text></g><g data-k=\"被留下的是后者\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">被留下的是后者</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">他的东西别人能接着用</tspan></text></g></svg>", "d": 20.5}, {"t": "差距清单要写成这周做什么", "n": "差距清单最常见的毛病，是写成提升业务理解能力这种无法检查的话。正确写法三个要素：这周做什么、交出什么、谁来看。三个要素齐了，计划才会真的被执行；缺一个，计划就会变成愿望。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">差距清单要写成这周做什么</tspan></text><g data-k=\"这周做什么\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">这周做什么</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">具体到一件能开始的事</tspan></text></g><g data-k=\"交出什么\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">交出什么</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">写成可检查的交付物</tspan></text></g><g data-k=\"谁来看\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">谁来看</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">验收人是谁，别自己看</tspan></text></g></svg>", "d": 17.4}, {"t": "小结", "n": "记住：90 天只求在一个真实场景上跑完一遍完整链路，一个场景跑完一遍，胜过五个 Demo。下一模块开始看工具箱，WorkBuddy 和它旁边的几个产品各管什么。", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"一个场景跑完一遍\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">一个场景跑完一遍</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">胜过五个漂亮的 Demo</tspan></text></g><g data-k=\"其余四块跟着长\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">其余四块跟着长</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不用五块一起补</tspan></text></g></svg>", "d": 16.4}]}]}, {"id": "M1", "title": "M1 看懂工具箱：WorkBuddy 与 AI 产品矩阵", "dims": ["tools", "workflow", "strategy"], "units": [{"id": "M1U1", "tier": "basic", "step": "understand", "title": "产品家族：五个产品各管什么", "video": {"dur": "5.2min", "script": ["客户提需求时，先别想用哪个工具，想这是哪一类活：知识工作、写代码、搭应用、做创意、做设计", "WorkBuddy 管知识工作协作，CodeBuddy 管编码，ADP 管企业应用搭建，Miora 管创意内容，Ardot 管设计协作", "选错产品的典型后果：用对话工具硬做应用，最后交付不了一个能稳定运行的系统"]}, "ppt": {"method": "五产品矩阵：每格写「解决谁的什么活 + 交付什么形态」", "case": "客户要求做一个内部审批系统，团队用对话工具拼了一个月，最后发现要的是可部署的应用", "demo": "拿客户一句话需求，现场判断该落在哪个产品上，并说出理由"}, "objective": "能面对一句模糊需求，判断该用哪一类产品，并说出为什么不是另一个", "transfer": "把手上三个需求各归一次类，看看有没有归错的", "deliverable": {"type": "document", "name": "产品归类表", "rubric": ["五个产品都能说清边界", "每个需求给出理由", "指出一个容易归错的"], "acceptance": "能产出《产品归类表》并通过本单元评分要点"}, "task": "写归类表：三个真实需求，各自写「归到哪个产品 / 为什么 / 不用另一个的原因」。", "brief": "判断依据是交付形态，不是功能列表。要的是对话，还是能部署的系统？", "template": "【产品归类表】\n需求 1：\n归到：\n为什么：\n不用另一个的原因：\n\n需求 2 / 3 同上", "exemplar": "需求：帮审核员把每天两百张单据先过一遍，标出可疑的。\n归到：ADP（要的是一个能接内部系统、有权限、能跑批的应用），不是 WorkBuddy 对话。\n为什么：需要接系统、要权限、要每天自动跑。\n不用 WorkBuddy：对话工具无法稳定跑批与留审计日志。", "quiz": [{"q": "客户要「一个能每天自动跑、接内部系统、留审计日志的审核工具」，最该落在哪类产品？", "opts": ["对话类知识工作平台", "企业应用开发平台", "AI 编程助手", "设计协作平台"], "a": 1, "why": "要接系统、要跑批、要审计，属于应用形态，不是对话形态。"}, {"q": "判断该用哪个产品，最该先看什么？", "opts": ["哪个产品功能多", "客户最终的交付形态是什么", "哪个便宜", "哪个名气大"], "a": 1, "why": "交付形态决定产品类别；功能列表会让人选大而全但不合适的。"}], "vslides": [{"t": "这一节要分清三类活", "n": "客户提需求时，先别想用哪个工具，想这是哪一类活：知识工作、写代码、搭应用、做创意、做设计 WorkBuddy 管知识工作协作，CodeBuddy 管编码，ADP 管企业应用搭建，Miora 管创意内容，Ardot 管设计协作 选错产品的典型后果：用对话工具硬做应用，最后交付不了一个能稳定运行的系统", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">这一节要分清三类活</tspan></text><g data-k=\"知识工作\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">知识工作</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">写、查、整理、汇报</tspan></text></g><g data-k=\"写代码\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">写代码</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">改仓库、跑测试</tspan></text></g><g data-k=\"搭应用\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">搭应用</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">接系统、要权限、能跑批</tspan></text></g></svg>", "d": 30.5}, {"t": "按交付形态选产品", "n": "客户提需求时，先别想用哪个工具，想这是哪一类活：知识工作、写代码、搭应用、做创意、做设计 WorkBuddy 管知识工作协作，CodeBuddy 管编码，ADP 管企业应用搭建，Miora 管创意内容，Ardot 管设计协作 选错产品的典型后果：用对话工具硬做应用，最后交付不了一个能稳定运行的系统", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">按交付形态选产品</tspan></text><g data-k=\"WorkBuddy\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">WorkBuddy</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">交付文档与工作产物</tspan></text></g><g data-k=\"ADP\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">ADP</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">交付可部署的应用</tspan></text></g><g data-k=\"CodeBuddy\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">CodeBuddy</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">交付代码与自动化</tspan></text></g></svg>", "d": 30.5}, {"t": "选错的代价", "n": "客户提需求时，先别想用哪个工具，想这是哪一类活：知识工作、写代码、搭应用、做创意、做设计 WorkBuddy 管知识工作协作，CodeBuddy 管编码，ADP 管企业应用搭建，Miora 管创意内容，Ardot 管设计协作 选错产品的典型后果：用对话工具硬做应用，最后交付不了一个能稳定运行的系统", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">选错的代价</tspan></text><g data-k=\"用对话做应用\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">用对话做应用</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">拼一个月也交不出稳定系统</tspan></text></g><g data-k=\"先想工具\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">先想工具</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">容易选大而全但不合适的</tspan></text></g><g data-k=\"先想形态\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">先想形态</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">才知道要哪一类</tspan></text></g></svg>", "d": 30.5}, {"t": "小结", "n": "客户提需求时，先别想用哪个工具，想这是哪一类活：知识工作、写代码、搭应用、做创意、做设计 WorkBuddy 管知识工作协作，CodeBuddy 管编码，ADP 管企业应用搭建，Miora 管创意内容，Ardot 管设计协作 选错产品的典型后果：用对话工具硬做应用，最后交付不了一个能稳定运行的系统", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"需求先归形态\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">需求先归形态</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">对话 / 代码 / 应用 / 内容 / 设计</tspan></text></g><g data-k=\"交付形态定产品\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">交付形态定产品</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">功能列表不作依据</tspan></text></g></svg>", "d": 30.5}]}, {"id": "M1U2", "tier": "basic", "step": "demo", "title": "WorkBuddy 界面结构与第一个任务", "video": {"dur": "4.8min", "script": ["WorkBuddy 的三个区：对话区给任务，工作区放文件与产物，技能区装可复用的能力", "第一个任务不要挑难的，挑一件你今天真要交的活，跑通一次比看十篇介绍有用", "判断有没有跑通的标准：产出的文件你能直接用，而不是还要再改半小时"]}, "ppt": {"method": "界面三区图：对话 / 工作区 / 技能，各写一句「这里放什么」", "case": "一位学员第一次就让它做一份行业分析报告，结果反复改了两小时；另一个人先让它整理会议纪要，十分钟就成了", "demo": "现场用一个真实小任务跑一遍，记录从输入到产出的全过程"}, "objective": "能在 30 分钟内用 WorkBuddy 跑通一个真实小任务，并说清产物能不能直接用", "transfer": "挑一件这周真要交的活，用它跑一遍，把「改了几处」记下来", "deliverable": {"type": "document", "name": "首个任务记录", "rubric": ["任务来自真实工作", "记录了改动处", "给出能否直接用的判断"], "acceptance": "能产出《首个任务记录》并通过本单元评分要点"}, "task": "写任务记录：任务是什么、怎么描述给它的、产出改了哪几处、下次怎么写得更好。", "brief": "改了几处是关键指标。改得越多，说明你对任务边界的描述越模糊。", "template": "【首个任务记录】\n任务：\n我给它的描述：\n它产出：\n我改了这几处：\n下次会补的约束：", "exemplar": "任务：把昨天的部门周会录音整理成一份纪要，列出结论与待办。\n描述：给出角色（行政助理）、输出格式（结论 3 条 + 待办表格含责任人）、约束（不要编造未提及的内容）。\n产出：结构正确，待办漏了一个责任人。\n改动：补了责任人、删掉它自己加的一句总结。\n下次补充：明确「没提到的责任人写待确认」。", "quiz": [{"q": "第一次用 WorkBuddy，最该选什么任务？", "opts": ["最复杂的行业分析报告", "今天真要交的一件小事", "官方教程里的示例", "越难越能学到东西"], "a": 1, "why": "真实小任务能立刻判断产物可用性；难题会让人卡在调试上，学不到界面逻辑。"}, {"q": "「跑通了」的判断标准是？", "opts": ["它给出了回答", "回答看起来专业", "产出的文件能直接用，不需要再大改", "用时很短"], "a": 2, "why": "产出可用才算跑通；看起来专业不等于能用。"}], "vslides": [{"t": "界面三个区", "n": "WorkBuddy 的三个区：对话区给任务，工作区放文件与产物，技能区装可复用的能力 第一个任务不要挑难的，挑一件你今天真要交的活，跑通一次比看十篇介绍有用 判断有没有跑通的标准：产出的文件你能直接用，而不是还要再改半小时", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">界面三个区</tspan></text><g data-k=\"对话区给任务\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">对话区给任务</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">说清要什么、给什么、要什么格式</tspan></text></g><g data-k=\"工作区放产物\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">工作区放产物</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">文件、表格、报告都在这里</tspan></text></g><g data-k=\"技能区装能力\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">技能区装能力</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">可复用的做法放这里</tspan></text></g></svg>", "d": 22.8}, {"t": "第一个任务挑小的", "n": "WorkBuddy 的三个区：对话区给任务，工作区放文件与产物，技能区装可复用的能力 第一个任务不要挑难的，挑一件你今天真要交的活，跑通一次比看十篇介绍有用 判断有没有跑通的标准：产出的文件你能直接用，而不是还要再改半小时", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">第一个任务挑小的</tspan></text><g data-k=\"挑今天真要交的\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">挑今天真要交的</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">跑通一次胜过看十篇介绍</tspan></text></g><g data-k=\"别挑行业分析\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">别挑行业分析</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">容易卡在反复修改上</tspan></text></g><g data-k=\"挑十分钟能完的\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">挑十分钟能完的</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">纪要、名单、周报</tspan></text></g></svg>", "d": 22.8}, {"t": "跑通的判断标准", "n": "WorkBuddy 的三个区：对话区给任务，工作区放文件与产物，技能区装可复用的能力 第一个任务不要挑难的，挑一件你今天真要交的活，跑通一次比看十篇介绍有用 判断有没有跑通的标准：产出的文件你能直接用，而不是还要再改半小时", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">跑通的判断标准</tspan></text><g data-k=\"产物能直接用\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">产物能直接用</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不需要再改半小时</tspan></text></g><g data-k=\"改了几处\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">改了几处</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">改得越多，说明描述越模糊</tspan></text></g><g data-k=\"补约束下次更好\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">补约束下次更好</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">把漏的说清写进描述</tspan></text></g></svg>", "d": 22.8}, {"t": "小结", "n": "WorkBuddy 的三个区：对话区给任务，工作区放文件与产物，技能区装可复用的能力 第一个任务不要挑难的，挑一件你今天真要交的活，跑通一次比看十篇介绍有用 判断有没有跑通的标准：产出的文件你能直接用，而不是还要再改半小时", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"真实小任务起步\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">真实小任务起步</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">别用示例练手</tspan></text></g><g data-k=\"改几处是关键指标\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">改几处是关键指标</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">越少说明越会描述</tspan></text></g></svg>", "d": 22.8}]}, {"id": "M1U3", "tier": "adv", "step": "todo", "title": "技能（Skill）：装现成的，也会自己建", "video": {"dur": "5.4min", "script": ["Skill 是把一套做法固化成可复用的能力：别人写好的你能装，你自己的 SOP 也能写成 Skill", "写 Skill 的关键不是写长，是写清三步：什么时候用它、按什么步骤做、做完交什么", "一个岗位如果每月要做同一件事三次以上，就值得做成 Skill"]}, "ppt": {"method": "Skill 三要素：触发条件 / 执行步骤 / 产出形态，各配一句判据", "case": "某团队把「周报汇总」写成 Skill，原来每人两小时，现在半小时内出初稿", "demo": "现场把一个重复三次以上的活写成 Skill 骨架"}, "objective": "能把自己的一个重复工作写成 Skill 骨架，包含触发条件、步骤与产出", "transfer": "把写好的 Skill 给同事用一次，看他能不能不问你就跑起来", "deliverable": {"type": "skill", "name": "个人 Skill 骨架", "rubric": ["触发条件明确", "步骤可照做", "产出形态清楚"], "acceptance": "能产出《个人 Skill 骨架》并通过本单元评分要点"}, "task": "写 Skill 骨架：什么时候该用它、分几步、每步交什么、最后产出长什么样。", "brief": "同事不问你能跑起来，才算写对；需要你在旁边解释的，都不算。", "template": "【Skill 骨架】\n名称：\n什么时候用（触发）：\n步骤：\n  1. 做什么 → 交什么\n  2. 做什么 → 交什么\n  3. 做什么 → 交什么\n产出形态：\n不该用它的情况：", "exemplar": "名称：客户周报汇总\n触发：每周五下午收到各区域周报邮件时\n步骤：1) 抽取每个区域的三个数（签单、回款、新增线索）→ 表格；2) 对比上周，标出异常波动 → 一句话说明；3) 按固定模板生成一页汇总 → 可直接转发\n产出：一页汇总 + 异常说明\n不该用：涉及未公开财务数据时，改走内部系统", "quiz": [{"q": "什么样的工作最值得做成 Skill？", "opts": ["一年做一次的年度规划", "每月重复三次以上、步骤基本固定的活", "需要大量创意的工作", "领导临时交办的活"], "a": 1, "why": "高频且步骤稳定，才能固化；一次性或高创意的工作做成 Skill 收益低。"}, {"q": "判断 Skill 写得好不好，最直接的标准是？", "opts": ["字数够多", "同事不问你自己就能跑起来", "你自己看得懂", "步骤写得漂亮"], "a": 1, "why": "Skill 的价值在可交接；需要口头解释的，说明步骤没写清。"}], "vslides": [{"t": "Skill 是什么", "n": "Skill 是把一套做法固化成可复用的能力：别人写好的你能装，你自己的 SOP 也能写成 Skill 写 Skill 的关键不是写长，是写清三步：什么时候用它、按什么步骤做、做完交什么 一个岗位如果每月要做同一件事三次以上，就值得做成 Skill", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">Skill 是什么</tspan></text><g data-k=\"装现成的\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">装现成的</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">别人写好的直接能用</tspan></text></g><g data-k=\"自己建\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">自己建</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">把你的 SOP 固化下来</tspan></text></g><g data-k=\"可交接\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">可交接</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">同事不问你能跑起来</tspan></text></g></svg>", "d": 25.2}, {"t": "写 Skill 的三要素", "n": "Skill 是把一套做法固化成可复用的能力：别人写好的你能装，你自己的 SOP 也能写成 Skill 写 Skill 的关键不是写长，是写清三步：什么时候用它、按什么步骤做、做完交什么 一个岗位如果每月要做同一件事三次以上，就值得做成 Skill", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">写 Skill 的三要素</tspan></text><g data-k=\"触发条件\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">触发条件</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">什么时候该用它</tspan></text></g><g data-k=\"执行步骤\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">执行步骤</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">分几步、每步交什么</tspan></text></g><g data-k=\"产出形态\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">产出形态</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">最后交出来长什么样</tspan></text></g></svg>", "d": 25.2}, {"t": "什么活值得做成 Skill", "n": "Skill 是把一套做法固化成可复用的能力：别人写好的你能装，你自己的 SOP 也能写成 Skill 写 Skill 的关键不是写长，是写清三步：什么时候用它、按什么步骤做、做完交什么 一个岗位如果每月要做同一件事三次以上，就值得做成 Skill", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">什么活值得做成 Skill</tspan></text><g data-k=\"每月三次以上\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">每月三次以上</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">高频才值得固化</tspan></text></g><g data-k=\"步骤基本固定\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">步骤基本固定</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">每次都是同一套动作</tspan></text></g><g data-k=\"高创意活别做\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">高创意活别做</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">固化了反而限制发挥</tspan></text></g></svg>", "d": 25.2}, {"t": "小结", "n": "Skill 是把一套做法固化成可复用的能力：别人写好的你能装，你自己的 SOP 也能写成 Skill 写 Skill 的关键不是写长，是写清三步：什么时候用它、按什么步骤做、做完交什么 一个岗位如果每月要做同一件事三次以上，就值得做成 Skill", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"写给同事看\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">写给同事看</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不是写给自己备忘</tspan></text></g><g data-k=\"写清不该用的场景\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">写清不该用的场景</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">边界比步骤更容易漏</tspan></text></g></svg>", "d": 25.2}]}, {"id": "M1U4", "tier": "adv", "step": "demo", "title": "专属专家与连接器：让 AI 碰到真实数据", "video": {"dur": "5.0min", "script": ["专属专家解决的是「每次都从头解释背景」的问题：把角色、领域知识、输出规范一次配好", "连接器解决的是「AI 看不到我系统里的数据」的问题：把 CRM、文档库、数据库接进来", "两句红线：能接不等于该接；接之前先定谁能问、能问到什么粒度"]}, "ppt": {"method": "两件事分开：专家=知识与人设；连接器=数据与权限", "case": "某销售团队接了 CRM 后，AI 能直接回答「这周哪三个客户最该跟」，不用人再导表", "demo": "现场给自己的场景画一张「需要哪些数据、从哪来、谁有权问」的表"}, "objective": "能判断一个场景该配专家还是该接连接器，并写清数据权限边界", "transfer": "把这张权限表拿给 IT 或数据负责人过一遍，看有没有你认为能接、但对方不同意的", "deliverable": {"type": "document", "name": "数据接入权限表", "rubric": ["区分专家与连接器", "写清数据来源", "标明权限边界"], "acceptance": "能产出《数据接入权限表》并通过本单元评分要点"}, "task": "写权限表：场景需要哪些数据、来自哪个系统、谁能问、问到什么粒度、谁批准。", "brief": "「粒度」这一列最容易被漏：能看汇总不等于能看明细，能看自己区域不等于能看全公司。", "template": "【数据接入权限表】\n场景：\n需要的数据 → 来源系统 → 谁能问 → 粒度（汇总/明细）→ 谁批准\n\n本场景更该配：□ 专属专家　□ 连接器　理由：", "exemplar": "场景：销售周会前要知道哪三个客户最该跟。\n数据：客户跟进记录（CRM）、合同金额（CRM）、最近沟通时间（CRM）\n谁能问：区域销售与主管\n粒度：本区域明细，跨区域只看汇总\n谁批准：销售运营负责人\n更该配：连接器。因为缺的是数据，不是角色设定。", "quiz": [{"q": "AI 总回答「我不知道你们客户的情况」，最该补的是？", "opts": ["换一个更强的模型", "接连接器，让它能读到 CRM 数据", "写更长的提示词", "给它配一个专家人设"], "a": 1, "why": "缺的是数据不是人设；连接器负责把真实数据接进来。"}, {"q": "接数据前必须写清的是？", "opts": ["数据总量有多大", "谁能问、能问到什么粒度、谁批准", "数据库用什么版本", "多久同步一次"], "a": 1, "why": "权限粒度与批准人是治理底线，先定边界再接。"}], "vslides": [{"t": "两件事分开看", "n": "专属专家解决的是「每次都从头解释背景」的问题：把角色、领域知识、输出规范一次配好 连接器解决的是「AI 看不到我系统里的数据」的问题：把 CRM、文档库、数据库接进来 两句红线：能接不等于该接；接之前先定谁能问、能问到什么粒度", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">两件事分开看</tspan></text><g data-k=\"专属专家\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">专属专家</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">知识和人设，解决每次重讲背景</tspan></text></g><g data-k=\"连接器\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">连接器</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">数据和权限，解决看不到系统数据</tspan></text></g><g data-k=\"别混在一起\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">别混在一起</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">混着配，最后都不知道缺什么</tspan></text></g></svg>", "d": 23.2}, {"t": "接数据先定边界", "n": "专属专家解决的是「每次都从头解释背景」的问题：把角色、领域知识、输出规范一次配好 连接器解决的是「AI 看不到我系统里的数据」的问题：把 CRM、文档库、数据库接进来 两句红线：能接不等于该接；接之前先定谁能问、能问到什么粒度", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">接数据先定边界</tspan></text><g data-k=\"谁能问\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">谁能问</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">哪些角色能发问</tspan></text></g><g data-k=\"问到什么粒度\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">问到什么粒度</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">汇总还是明细</tspan></text></g><g data-k=\"谁批准\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">谁批准</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">接之前谁签字</tspan></text></g></svg>", "d": 23.2}, {"t": "最容易漏的一列", "n": "专属专家解决的是「每次都从头解释背景」的问题：把角色、领域知识、输出规范一次配好 连接器解决的是「AI 看不到我系统里的数据」的问题：把 CRM、文档库、数据库接进来 两句红线：能接不等于该接；接之前先定谁能问、能问到什么粒度", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">最容易漏的一列</tspan></text><g data-k=\"粒度\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">粒度</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">能看汇总不等于能看明细</tspan></text></g><g data-k=\"范围\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">范围</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">本区域不等于全公司</tspan></text></g><g data-k=\"留痕\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">留痕</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">谁问过什么要能查</tspan></text></g></svg>", "d": 23.2}, {"t": "小结", "n": "专属专家解决的是「每次都从头解释背景」的问题：把角色、领域知识、输出规范一次配好 连接器解决的是「AI 看不到我系统里的数据」的问题：把 CRM、文档库、数据库接进来 两句红线：能接不等于该接；接之前先定谁能问、能问到什么粒度", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"缺数据接连接器\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">缺数据接连接器</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">缺角色配专家</tspan></text></g><g data-k=\"先定权限再接\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">先定权限再接</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">顺序反了会返工</tspan></text></g></svg>", "d": 23.2}]}, {"id": "M1U5", "tier": "adv", "step": "todo", "title": "自动化任务、积分口径与成本感知", "video": {"dur": "4.8min", "script": ["自动化任务的价值在于「不用人记得做」：定时跑、事件触发跑", "成本要能算清：一次任务消耗多少、一个月跑多少次、省下多少人工", "算不清成本的项目，最后都会在采购会上被问住"]}, "ppt": {"method": "三行成本账：单次消耗 / 月频次 / 折合人工节省", "case": "某团队把日报自动化后，每天省 1.5 小时人工，但没人算过 API 成本，采购时被质疑", "demo": "现场为一个自动化任务写三行成本账"}, "objective": "能为一个自动化任务写出成本与收益三行账，并给出是否值得做的结论", "transfer": "拿这三行账去找财务或采购对一次口径，看算法是否被认可", "deliverable": {"type": "document", "name": "自动化成本账", "rubric": ["单次成本可算", "月频次有依据", "收益与结论明确"], "acceptance": "能产出《自动化成本账》并通过本单元评分要点"}, "task": "写三行账：单次消耗多少、每月跑多少次、折合省下多少人工时间，最后给结论。", "brief": "收益不要写成「提效明显」，要写成人时。", "template": "【自动化成本账】\n任务：\n单次消耗：\n每月频次：\n月总消耗：\n折合节省人工：\n结论：□ 值得做　□ 需缩小范围　理由：", "exemplar": "任务：每天把三个渠道的线索汇总去重后发到群里。\n单次消耗：约 0.4 元；每月约 30 次 → 12 元/月\n折合节省：人工每天 25 分钟 → 每月约 8.3 小时\n结论：值得做。成本可忽略，节省的是固定人力。", "quiz": [{"q": "自动化任务最该先算清的是？", "opts": ["技术实现难度", "单次消耗、月频次与折合人工节省", "用哪个模型", "能不能接微信"], "a": 1, "why": "成本与收益算不清，项目在采购环节就会被否掉。"}, {"q": "收益写「提效明显」的问题是什么？", "opts": ["不够专业", "无法核对，也无法与成本比较", "老板不喜欢", "太短"], "a": 1, "why": "要折成人时或金额，才能与成本放在一张表里比较。"}], "vslides": [{"t": "自动化的价值", "n": "自动化任务的价值在于「不用人记得做」：定时跑、事件触发跑 成本要能算清：一次任务消耗多少、一个月跑多少次、省下多少人工 算不清成本的项目，最后都会在采购会上被问住", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">自动化的价值</tspan></text><g data-k=\"定时跑\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">定时跑</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不用人记得做</tspan></text></g><g data-k=\"事件触发\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">事件触发</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">有变化就跑</tspan></text></g><g data-k=\"省的是固定人力\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">省的是固定人力</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不是省一次加班</tspan></text></g></svg>", "d": 16.6}, {"t": "三行成本账", "n": "自动化任务的价值在于「不用人记得做」：定时跑、事件触发跑 成本要能算清：一次任务消耗多少、一个月跑多少次、省下多少人工 算不清成本的项目，最后都会在采购会上被问住", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">三行成本账</tspan></text><g data-k=\"单次消耗\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">单次消耗</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">一次跑多少</tspan></text></g><g data-k=\"月频次\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">月频次</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">一个月跑几次</tspan></text></g><g data-k=\"折合人工\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">折合人工</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">省下多少小时</tspan></text></g></svg>", "d": 16.6}, {"t": "算不清的后果", "n": "自动化任务的价值在于「不用人记得做」：定时跑、事件触发跑 成本要能算清：一次任务消耗多少、一个月跑多少次、省下多少人工 算不清成本的项目，最后都会在采购会上被问住", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">算不清的后果</tspan></text><g data-k=\"采购会上被问住\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">采购会上被问住</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">说不出单次成本</tspan></text></g><g data-k=\"收益写成提效明显\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">收益写成提效明显</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">无法与成本比较</tspan></text></g><g data-k=\"折成人时\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">折成人时</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">才能放进同一张表</tspan></text></g></svg>", "d": 16.6}, {"t": "小结", "n": "自动化任务的价值在于「不用人记得做」：定时跑、事件触发跑 成本要能算清：一次任务消耗多少、一个月跑多少次、省下多少人工 算不清成本的项目，最后都会在采购会上被问住", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"成本与收益同表\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">成本与收益同表</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">才能判断值不值得</tspan></text></g><g data-k=\"收益写成人时\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">收益写成人时</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不写形容词</tspan></text></g></svg>", "d": 16.6}]}, {"id": "M1U6", "tier": "adv", "step": "todo", "title": "客户落地的四层门槛与三层赋能", "video": {"dur": "5.0min", "script": ["客户落地通常过四层门槛：有没有工具、会不会用、用不用得上、能不能规模化", "多数客户卡在第三层：工具有了、也会用了，但没人把 AI 接进真实业务流", "三层赋能对应：平台层给能力、工具层给方法、生态层给可持续的支撑"]}, "ppt": {"method": "四层门槛自评表：每层写「现状 + 卡点 + 下一层要什么」", "case": "某客户全员装了工具，使用率不到一成，因为没人告诉他们「你的哪个活可以用」", "demo": "现场给一个客户做四层自评，指出他卡在第几层"}, "objective": "能判断一个客户卡在第几层门槛，并说出下一层需要什么", "transfer": "给你的客户做一次四层自评，写成半页纸发给他确认", "deliverable": {"type": "document", "name": "四层门槛自评", "rubric": ["四层都有现状", "指出卡点层", "给出下一层动作"], "acceptance": "能产出《四层门槛自评》并通过本单元评分要点"}, "task": "写自评：四层各写现状与卡点，最后写「卡在第几层 + 下一层要先做什么」。", "brief": "卡点要写成具体现象，比如「装了但月活不到 10%」，不要写「意识不足」。", "template": "【四层门槛自评】\n① 有工具：现状 / 卡点\n② 会用：现状 / 卡点\n③ 用得上：现状 / 卡点\n④ 能规模化：现状 / 卡点\n卡在第几层：\n下一层先做什么：", "exemplar": "① 有工具：已采购，全员有账号；卡点：无\n② 会用：做过两场培训；卡点：多数人只会问通用问题\n③ 用得上：3 个部门试过；卡点：没有接进日常流程，用完就忘\n④ 能规模化：无\n卡在第三层。下一层：选一个部门的一个流程，把它改成「AI 在里面跑一段」。", "quiz": [{"q": "「工具买了、培训也做了，但没人真的在用」，卡在第几层？", "opts": ["第一层 有工具", "第二层 会用", "第三层 用得上", "第四层 能规模化"], "a": 2, "why": "会用了但没有接进业务流，卡在「用得上」这一层。"}, {"q": "判断客户卡点的写法，哪个是可用的？", "opts": ["意识不足", "领导不重视", "装了但月活不到 10%，三个部门只试过一次", "缺乏数字化基因"], "a": 2, "why": "可核对的现象才能指导动作；形容词无法验证也无法改进。"}], "vslides": [{"t": "四层门槛", "n": "客户落地通常过四层门槛：有没有工具、会不会用、用不用得上、能不能规模化 多数客户卡在第三层：工具有了、也会用了，但没人把 AI 接进真实业务流 三层赋能对应：平台层给能力、工具层给方法、生态层给可持续的支撑", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">四层门槛</tspan></text><g data-k=\"有工具\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">有工具</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">账号与许可到位</tspan></text></g><g data-k=\"会用\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">会用</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">知道怎么问、怎么改</tspan></text></g><g data-k=\"用得上\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">用得上</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">接进真实业务流</tspan></text></g></svg>", "d": 21.1}, {"t": "多数人卡第三层", "n": "客户落地通常过四层门槛：有没有工具、会不会用、用不用得上、能不能规模化 多数客户卡在第三层：工具有了、也会用了，但没人把 AI 接进真实业务流 三层赋能对应：平台层给能力、工具层给方法、生态层给可持续的支撑", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">多数人卡第三层</tspan></text><g data-k=\"工具买了\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">工具买了</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">许可堆着</tspan></text></g><g data-k=\"培训做了\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">培训做了</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">听完就散</tspan></text></g><g data-k=\"没人改流程\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">没人改流程</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">用完就忘</tspan></text></g></svg>", "d": 21.1}, {"t": "三层赋能对应", "n": "客户落地通常过四层门槛：有没有工具、会不会用、用不用得上、能不能规模化 多数客户卡在第三层：工具有了、也会用了，但没人把 AI 接进真实业务流 三层赋能对应：平台层给能力、工具层给方法、生态层给可持续的支撑", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">三层赋能对应</tspan></text><g data-k=\"平台层给能力\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">平台层给能力</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">工具与算力</tspan></text></g><g data-k=\"工具层给方法\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">工具层给方法</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">场景与做法</tspan></text></g><g data-k=\"生态层给支撑\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">生态层给支撑</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">持续陪跑与共创</tspan></text></g></svg>", "d": 21.1}, {"t": "小结", "n": "客户落地通常过四层门槛：有没有工具、会不会用、用不用得上、能不能规模化 多数客户卡在第三层：工具有了、也会用了，但没人把 AI 接进真实业务流 三层赋能对应：平台层给能力、工具层给方法、生态层给可持续的支撑", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"先判断卡在第几层\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">先判断卡在第几层</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">再决定下一步</tspan></text></g><g data-k=\"卡点写成现象\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">卡点写成现象</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不写形容词</tspan></text></g></svg>", "d": 21.1}]}]}, {"id": "M2", "title": "M2 AI 工程基本功：把要求写成能执行的东西", "dims": ["prompt", "dev", "security"], "units": [{"id": "M2U1", "tier": "basic", "step": "understand", "title": "Prompt 工程：把要求写成模型能执行的规格", "video": {"dur": "5.0min", "script": ["Prompt 不是许愿，是规格：输入是什么、约束是什么、输出长什么样，三样写清才叫规格", "最常见的失败是「描述了一堆形容词，没给一个可判断的产出格式」", "写完后自己当验收人读一遍：能不能一眼判断这活做没做对"]}, "ppt": {"method": "规格四段：角色 / 输入 / 约束 / 输出格式", "case": "同一件事，写成「帮我写个方案」得到的是空话；写成四段规格，得到的是能直接改的初稿", "demo": "现场把一个模糊要求改写为四段规格，再对比两次产出"}, "objective": "能把一个模糊要求改写成含输入、约束、输出格式的规格，并说明改动带来的差异", "transfer": "挑一件你常做的活，写成四段规格，存成 Skill 备用", "deliverable": {"type": "document", "name": "Prompt 规格卡", "rubric": ["四段齐全", "约束可判断", "输出格式明确"], "acceptance": "能产出《Prompt 规格卡》并通过本单元评分要点"}, "task": "写规格卡：角色 / 输入 / 约束 / 输出格式四段，每段一到两句。最后写「我会怎么验收」。", "brief": "约束必须是可判断的，比如「不超过 300 字」「必须列出数据来源」，不要写「尽量专业」。", "template": "【Prompt 规格卡】\n角色：\n输入（我提供什么）：\n约束（必须 / 禁止）：\n输出格式（长什么样）：\n我怎么验收：", "exemplar": "角色：消费金融风控经理的助理。\n输入：近 30 天逾期名单、催收记录、政策文件摘要。\n约束：不得推测个人情况；数据必须标注来源；不确定写「需人工核实」。\n输出格式：三段——现象、可能原因、建议动作（每条带责任人）。\n验收：每条建议都能对应到一条记录。", "quiz": [{"q": "「帮我写个专业点的方案」最大的问题是？", "opts": ["字数太少", "没有输入、约束与输出格式，无法判断对错", "不够礼貌", "没有指定模型"], "a": 1, "why": "没有规格就没有验收标准，产出好坏只能凭感觉。"}, {"q": "下面哪条约束是可判断的？", "opts": ["尽量专业一些", "语气要亲切", "不超过 300 字，且每个结论标注数据来源", "写得有深度"], "a": 2, "why": "可判断的约束能被核对，形容词不能被核对。"}], "vslides": [{"t": "Prompt 是规格不是许愿", "n": "Prompt 不是许愿，是规格：输入是什么、约束是什么、输出长什么样，三样写清才叫规格 最常见的失败是「描述了一堆形容词，没给一个可判断的产出格式」 写完后自己当验收人读一遍：能不能一眼判断这活做没做对", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">Prompt 是规格不是许愿</tspan></text><g data-k=\"角色\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">角色</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">谁在什么位置上做这件事</tspan></text></g><g data-k=\"输入\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">输入</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">我给它什么材料</tspan></text></g><g data-k=\"输出格式\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">输出格式</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">交出来长什么样</tspan></text></g></svg>", "d": 20.7}, {"t": "四项缺一就靠猜", "n": "Prompt 不是许愿，是规格：输入是什么、约束是什么、输出长什么样，三样写清才叫规格 最常见的失败是「描述了一堆形容词，没给一个可判断的产出格式」 写完后自己当验收人读一遍：能不能一眼判断这活做没做对", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">四项缺一就靠猜</tspan></text><g data-k=\"缺输入\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">缺输入</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">它会自己编材料</tspan></text></g><g data-k=\"缺约束\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">缺约束</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">它会自由发挥</tspan></text></g><g data-k=\"缺格式\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">缺格式</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">每次都要你重排</tspan></text></g></svg>", "d": 20.7}, {"t": "可判断的约束", "n": "Prompt 不是许愿，是规格：输入是什么、约束是什么、输出长什么样，三样写清才叫规格 最常见的失败是「描述了一堆形容词，没给一个可判断的产出格式」 写完后自己当验收人读一遍：能不能一眼判断这活做没做对", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">可判断的约束</tspan></text><g data-k=\"字数与时限\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">字数与时限</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不超过 300 字</tspan></text></g><g data-k=\"来源要求\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">来源要求</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">每个结论标注出处</tspan></text></g><g data-k=\"禁止项\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">禁止项</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不得推测个人情况</tspan></text></g></svg>", "d": 20.7}, {"t": "小结", "n": "Prompt 不是许愿，是规格：输入是什么、约束是什么、输出长什么样，三样写清才叫规格 最常见的失败是「描述了一堆形容词，没给一个可判断的产出格式」 写完后自己当验收人读一遍：能不能一眼判断这活做没做对", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"写完自己验收一遍\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">写完自己验收一遍</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">能不能一眼判断做没做对</tspan></text></g><g data-k=\"存成模板\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">存成模板</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">同类任务下次直接用</tspan></text></g></svg>", "d": 20.7}]}, {"id": "M2U2", "tier": "basic", "step": "understand", "title": "上下文管理：选而不是全塞", "video": {"dur": "4.8min", "script": ["上下文不是越多越好：塞得越多，模型越容易抓住不相关的部分，也越贵越慢", "选上下文的三条判据：与这次任务直接相关、能改变结论、来源可追溯", "常见错误是把整份制度、整个会议记录一次性贴进去，结果它只用了第一段"]}, "ppt": {"method": "上下文三层：必给 / 可给 / 不给，各写一句判据", "case": "同一次审核，贴 60 页制度 vs 只给 3 条相关条款，后者准确率更高", "demo": "现场为一次任务做「必给 / 可给 / 不给」三层划分"}, "objective": "能为一次任务挑出最少必要的上下文，并说明为什么剔除其他内容", "transfer": "下次做同类任务时，先列必给清单再开始，而不是先粘贴", "deliverable": {"type": "document", "name": "上下文分层表", "rubric": ["三层都划分过", "剔除有理由", "必给项可追溯"], "acceptance": "能产出《上下文分层表》并通过本单元评分要点"}, "task": "写分层表：这次任务必给什么、可给什么、不给什么，不写的理由是什么。", "brief": "「可给」这一列最容易膨胀，写完回头删掉一半，看结论会不会变。", "template": "【上下文分层表】\n任务：\n必给（缺了会错）：\n可给（给了更准）：\n不给（给了会干扰）：\n理由：", "exemplar": "任务：判断这张报销单是否合规。\n必给：差旅制度中关于住宿标准的两条、票据明细。\n可给：该员工近三个月同类报销记录（判断是否重复）。\n不给：全本 60 页制度、其他部门的报销数据。\n理由：无关条款会稀释判断依据；别人的数据涉及隐私。", "quiz": [{"q": "把整本制度一次贴进去，最可能的后果是？", "opts": ["更准确", "模型抓住不相关段落，判断被稀释，还更慢更贵", "更安全", "没有任何影响"], "a": 1, "why": "上下文越多，注意力越分散；相关性比数量重要。"}, {"q": "判断某段上下文该不该给，最好的标准是？", "opts": ["是不是公司文件", "它能不能改变这次结论", "字数多不多", "是不是最新版本"], "a": 1, "why": "能改变结论的才必须给；不能改变的只会干扰。"}], "vslides": [{"t": "上下文不是越多越好", "n": "上下文不是越多越好：塞得越多，模型越容易抓住不相关的部分，也越贵越慢 选上下文的三条判据：与这次任务直接相关、能改变结论、来源可追溯 常见错误是把整份制度、整个会议记录一次性贴进去，结果它只用了第一段", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">上下文不是越多越好</tspan></text><g data-k=\"塞得多\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">塞得多</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">越容易抓住不相关段落</tspan></text></g><g data-k=\"更慢更贵\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">更慢更贵</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">每次都要为无关内容付费</tspan></text></g><g data-k=\"只用了第一段\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">只用了第一段</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">长材料常见后果</tspan></text></g></svg>", "d": 20.5}, {"t": "三层划分", "n": "上下文不是越多越好：塞得越多，模型越容易抓住不相关的部分，也越贵越慢 选上下文的三条判据：与这次任务直接相关、能改变结论、来源可追溯 常见错误是把整份制度、整个会议记录一次性贴进去，结果它只用了第一段", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">三层划分</tspan></text><g data-k=\"必给\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">必给</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">缺了就会错</tspan></text></g><g data-k=\"可给\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">可给</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">给了更准但不必须</tspan></text></g><g data-k=\"不给\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">不给</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">给了会干扰判断</tspan></text></g></svg>", "d": 20.5}, {"t": "剔除的判据", "n": "上下文不是越多越好：塞得越多，模型越容易抓住不相关的部分，也越贵越慢 选上下文的三条判据：与这次任务直接相关、能改变结论、来源可追溯 常见错误是把整份制度、整个会议记录一次性贴进去，结果它只用了第一段", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">剔除的判据</tspan></text><g data-k=\"能否改变结论\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">能否改变结论</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不能改变就不用给</tspan></text></g><g data-k=\"来源是否可追溯\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">来源是否可追溯</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">追溯不了的风险高</tspan></text></g><g data-k=\"是否涉隐私\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">是否涉隐私</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">涉敏不进公开模型</tspan></text></g></svg>", "d": 20.5}, {"t": "小结", "n": "上下文不是越多越好：塞得越多，模型越容易抓住不相关的部分，也越贵越慢 选上下文的三条判据：与这次任务直接相关、能改变结论、来源可追溯 常见错误是把整份制度、整个会议记录一次性贴进去，结果它只用了第一段", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"先列必给清单\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">先列必给清单</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">再开始粘贴</tspan></text></g><g data-k=\"回头删一半\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">回头删一半</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">看结论会不会变</tspan></text></g></svg>", "d": 20.5}]}, {"id": "M2U3", "tier": "adv", "step": "demo", "title": "Harness：把模型包成可运行的系统", "video": {"dur": "5.2min", "script": ["模型只会「回答」，不会「办事」；Harness 就是把它包起来的那层：取数据、校验、重试、落库", "一个最小 Harness 有四段：输入整理 → 模型调用 → 结果校验 → 输出落地", "没有 Harness 的 AI，只能演示；有了 Harness，才能每天跑"]}, "ppt": {"method": "Harness 四段图：整理 / 调用 / 校验 / 落地，每段标一个失败处理", "case": "某团队把 AI 直接接在群聊里，模型偶尔返回半截 JSON，下游系统全崩；加了校验段后稳定了", "demo": "现场画自己场景的 Harness 四段，标出每段可能失败的点"}, "objective": "能画出自己场景的 Harness 结构，并说清每段的失败处理方式", "transfer": "把这张图给工程师看一次，问他哪一段最难做、为什么", "deliverable": {"type": "document", "name": "Harness 结构图", "rubric": ["四段齐全", "每段有失败处理", "标出最难的一段"], "acceptance": "能产出《Harness 结构图》并通过本单元评分要点"}, "task": "画四段：输入怎么整理、怎么调模型、结果怎么校验、最后落到哪里。每段写一句「失败了怎么办」。", "brief": "校验段是最常被省掉的，也是上线后最容易出事的一段。", "template": "【Harness 结构图】\n① 输入整理：做什么 / 失败怎么办\n② 模型调用：做什么 / 失败怎么办（超时、限流）\n③ 结果校验：查什么 / 不通过怎么办\n④ 输出落地：写到哪 / 失败怎么办\n最难的一段：", "exemplar": "① 输入整理：把工单文本清理并按字段拆开；失败（字段缺失）→ 标记待人工补全。\n② 模型调用：分类工单类型；失败（超时）→ 重试 2 次后转人工。\n③ 结果校验：检查是否为空、是否为允许的分类值；不通过 → 丢弃并记日志。\n④ 输出落地：写入工单系统分类字段；失败 → 进重试队列。\n最难：③，因为分类值会随业务变化，校验规则需要维护。", "quiz": [{"q": "Harness 里最常被省掉、但上线后最容易出事的是哪一段？", "opts": ["输入整理", "模型调用", "结果校验", "输出落地"], "a": 2, "why": "没有校验，模型返回异常格式会直接把错误带进下游系统。"}, {"q": "模型返回半截 JSON 导致下游崩溃，正确的修法是？", "opts": ["换更强的模型", "在调用与落地之间加校验段，不通过就丢弃或重试", "多试几次总会成功", "让用户自己检查"], "a": 1, "why": "稳定性靠工程约束，不靠模型自觉。"}], "vslides": [{"t": "Harness 是包在模型外面的一层", "n": "模型只会「回答」，不会「办事」；Harness 就是把它包起来的那层：取数据、校验、重试、落库 一个最小 Harness 有四段：输入整理 → 模型调用 → 结果校验 → 输出落地 没有 Harness 的 AI，只能演示；有了 Harness，才能每天跑", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">Harness 是包在模型外面的一层</tspan></text><g data-k=\"取数据\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">取数据</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">把输入整理干净</tspan></text></g><g data-k=\"做校验\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">做校验</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">结果不合规就拦下</tspan></text></g><g data-k=\"落库重试\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">落库重试</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">写进系统、失败重试</tspan></text></g></svg>", "d": 26.2}, {"t": "四段结构", "n": "模型只会「回答」，不会「办事」；Harness 就是把它包起来的那层：取数据、校验、重试、落库 一个最小 Harness 有四段：输入整理 → 模型调用 → 结果校验 → 输出落地 没有 Harness 的 AI，只能演示；有了 Harness，才能每天跑", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">四段结构</tspan></text><g data-k=\"输入整理\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">输入整理</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">字段拆分与清洗</tspan></text></g><g data-k=\"模型调用\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">模型调用</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">超时与限流要处理</tspan></text></g><g data-k=\"校验与落地\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">校验与落地</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">查格式与枚举，再写入</tspan></text></g></svg>", "d": 26.2}, {"t": "最常被省掉的一段", "n": "模型只会「回答」，不会「办事」；Harness 就是把它包起来的那层：取数据、校验、重试、落库 一个最小 Harness 有四段：输入整理 → 模型调用 → 结果校验 → 输出落地 没有 Harness 的 AI，只能演示；有了 Harness，才能每天跑", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">最常被省掉的一段</tspan></text><g data-k=\"结果校验\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">结果校验</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">上线后最容易出事</tspan></text></g><g data-k=\"没有校验\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">没有校验</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">半截 JSON 直接进下游</tspan></text></g><g data-k=\"加了校验\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">加了校验</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">稳定性立刻不一样</tspan></text></g></svg>", "d": 26.2}, {"t": "小结", "n": "模型只会「回答」，不会「办事」；Harness 就是把它包起来的那层：取数据、校验、重试、落库 一个最小 Harness 有四段：输入整理 → 模型调用 → 结果校验 → 输出落地 没有 Harness 的 AI，只能演示；有了 Harness，才能每天跑", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"演示靠模型\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">演示靠模型</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">上线靠 Harness</tspan></text></g><g data-k=\"每段写失败处理\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">每段写失败处理</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不要只写正常路径</tspan></text></g></svg>", "d": 26.2}]}, {"id": "M2U4", "tier": "adv", "step": "demo", "title": "Loop：Agent 怎么转圈、什么时候停", "video": {"dur": "4.6min", "script": ["Agent 会反复尝试，关键不是让它更聪明，而是给它三条线：何时停、停在哪、失败几次放弃", "没有停止条件的 Agent 会烧钱：同一个任务反复调用十几次还不收敛", "典型设置：最多 3 轮、每轮必须产生新证据、达不到就转人工"]}, "ppt": {"method": "三条停止线：轮次上限 / 进展判据 / 转人工条件", "case": "某助手没有轮次上限，一张单据跑了 17 轮，成本是正常情况下的 20 倍", "demo": "现场给自己的 Agent 写三条停止线"}, "objective": "能为一个 Agent 场景设定轮次上限、进展判据与转人工条件", "transfer": "把这三条线写进你的提示词或流程配置里，跑一次看是否会提前停", "deliverable": {"type": "document", "name": "Agent 停止线", "rubric": ["三条线都有数值", "有转人工条件", "可验证"], "acceptance": "能产出《Agent 停止线》并通过本单元评分要点"}, "task": "写三条线：最多几轮、每轮必须新增什么证据、什么情况下转人工。", "brief": "「进展」要定义成看得见的东西，比如「新增一条匹配记录」，不能写「有进展」。", "template": "【Agent 停止线】\n任务：\n最多轮次：\n每轮必须新增的证据：\n转人工条件：\n超时/超成本处理：", "exemplar": "任务：从合同里找出与标准模板不一致的条款。\n最多轮次：3 轮。\n每轮必须新增证据：至少新比对出一条差异条款编号。\n转人工：3 轮后仍无新证据，或合同扫描件清晰度低于阈值。\n超成本：单份成本超过 2 元即停。", "quiz": [{"q": "Agent 反复尝试不收敛，最该先设的是？", "opts": ["更长的提示词", "轮次上限与转人工条件", "更多工具", "更强的模型"], "a": 1, "why": "没有停止线，成本会失控；先约束再谈效果。"}, {"q": "「每轮必须有进展」里的进展应该怎么定义？", "opts": ["感觉比上一轮好", "新增一条可核对的证据", "用时更短", "回答更长"], "a": 1, "why": "进展要可核对，否则无法判断该停还是该继续。"}], "vslides": [{"t": "Agent 的关键是三条线", "n": "Agent 会反复尝试，关键不是让它更聪明，而是给它三条线：何时停、停在哪、失败几次放弃 没有停止条件的 Agent 会烧钱：同一个任务反复调用十几次还不收敛 典型设置：最多 3 轮、每轮必须产生新证据、达不到就转人工", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">Agent 的关键是三条线</tspan></text><g data-k=\"何时停\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">何时停</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">轮次上限</tspan></text></g><g data-k=\"停在哪\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">停在哪</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">必须有新证据</tspan></text></g><g data-k=\"什么时候放弃\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">什么时候放弃</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">转人工条件</tspan></text></g></svg>", "d": 22.3}, {"t": "没有停止线的代价", "n": "Agent 会反复尝试，关键不是让它更聪明，而是给它三条线：何时停、停在哪、失败几次放弃 没有停止条件的 Agent 会烧钱：同一个任务反复调用十几次还不收敛 典型设置：最多 3 轮、每轮必须产生新证据、达不到就转人工", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">没有停止线的代价</tspan></text><g data-k=\"同一任务跑 17 轮\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">同一任务跑 17 轮</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">成本是正常的 20 倍</tspan></text></g><g data-k=\"反复调用不收敛\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">反复调用不收敛</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">越急越烧钱</tspan></text></g><g data-k=\"设置三条线\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">设置三条线</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">成本立刻可控</tspan></text></g></svg>", "d": 22.3}, {"t": "进展要可核对", "n": "Agent 会反复尝试，关键不是让它更聪明，而是给它三条线：何时停、停在哪、失败几次放弃 没有停止条件的 Agent 会烧钱：同一个任务反复调用十几次还不收敛 典型设置：最多 3 轮、每轮必须产生新证据、达不到就转人工", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">进展要可核对</tspan></text><g data-k=\"不写有进展\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">不写有进展</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">无法判断该停还是继续</tspan></text></g><g data-k=\"写新增一条证据\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">写新增一条证据</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">可核对</tspan></text></g><g data-k=\"写清超成本即停\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">写清超成本即停</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">避免无限追</tspan></text></g></svg>", "d": 22.3}, {"t": "小结", "n": "Agent 会反复尝试，关键不是让它更聪明，而是给它三条线：何时停、停在哪、失败几次放弃 没有停止条件的 Agent 会烧钱：同一个任务反复调用十几次还不收敛 典型设置：最多 3 轮、每轮必须产生新证据、达不到就转人工", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"先约束再谈效果\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">先约束再谈效果</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">没有边界的 Agent 不能用</tspan></text></g><g data-k=\"把三条线写进配置\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">把三条线写进配置</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不要靠人盯</tspan></text></g></svg>", "d": 22.3}]}, {"id": "M2U5", "tier": "adv", "step": "todo", "title": "MCP 与工具调用：连接外部时怎么证明「我是我」", "video": {"dur": "4.8min", "script": ["接外部系统要解决三件事：用什么身份、能做什么、做过什么要能查", "身份靠凭证，权限靠范围，追溯靠日志；三者缺一，安全评审就过不去", "最常见的错误是给了一个超级账号，图省事，最后没人敢上线"]}, "ppt": {"method": "三列清单：身份（凭证怎么发）/ 范围（能做什么）/ 追溯（日志留什么）", "case": "某项目用一个管理员账号接了所有系统，安全评审直接否掉，重做花了三周", "demo": "现场写一张工具调用的权限清单"}, "objective": "能说清一次工具调用的身份、权限范围与日志要求", "transfer": "把这张清单发给安全或运维，问他最担心哪一条", "deliverable": {"type": "document", "name": "工具调用权限清单", "rubric": ["身份写清", "范围最小化", "日志可追溯"], "acceptance": "能产出《工具调用权限清单》并通过本单元评分要点"}, "task": "写清单：这次要接什么系统、用什么身份、只开哪些权限、日志留什么。", "brief": "权限一律按「只开必须的那一个」，不要按「方便以后扩展」。", "template": "【工具调用权限清单】\n系统：\n身份（用什么凭证）：\n权限范围（只开）：\n禁止的操作：\n日志（留什么 / 存多久）：\n谁审批：", "exemplar": "系统：内部工单系统。\n身份：专用服务账号，凭证放密钥管理，90 天轮换。\n权限：只开「读取工单」「写入分类字段」两项。\n禁止：删除、导出全部工单、修改指派对象。\n日志：记录调用人、时间、工单号、写入前后值，保留 180 天。\n审批：信息安全负责人。", "quiz": [{"q": "为了「以后扩展方便」给工具开全部权限，主要风险是？", "opts": ["成本变高", "一旦被误用或泄露，影响面不可控，安全评审也过不了", "速度变慢", "没有风险"], "a": 1, "why": "权限越大，事故半径越大；最小权限是底线。"}, {"q": "工具调用的日志至少要能回答什么？", "opts": ["谁在什么时候做了什么，前后值是什么", "系统跑得快不快", "模型是哪个版本", "花多少钱"], "a": 0, "why": "可追溯是审计与复盘的前提。"}], "vslides": [{"t": "接外部要解决三件事", "n": "接外部系统要解决三件事：用什么身份、能做什么、做过什么要能查 身份靠凭证，权限靠范围，追溯靠日志；三者缺一，安全评审就过不去 最常见的错误是给了一个超级账号，图省事，最后没人敢上线", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">接外部要解决三件事</tspan></text><g data-k=\"用什么身份\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">用什么身份</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">凭证怎么发、多久轮换</tspan></text></g><g data-k=\"能做什么\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">能做什么</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">权限范围</tspan></text></g><g data-k=\"做过什么\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">做过什么</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">日志能否追溯</tspan></text></g></svg>", "d": 18.4}, {"t": "最小权限", "n": "接外部系统要解决三件事：用什么身份、能做什么、做过什么要能查 身份靠凭证，权限靠范围，追溯靠日志；三者缺一，安全评审就过不去 最常见的错误是给了一个超级账号，图省事，最后没人敢上线", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">最小权限</tspan></text><g data-k=\"只开必须的一个\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">只开必须的一个</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不做方便以后扩展</tspan></text></g><g data-k=\"禁止删除与全量导出\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">禁止删除与全量导出</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">事故半径最大</tspan></text></g><g data-k=\"专用服务账号\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">专用服务账号</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不用个人账号代跑</tspan></text></g></svg>", "d": 18.4}, {"t": "日志要能回答什么", "n": "接外部系统要解决三件事：用什么身份、能做什么、做过什么要能查 身份靠凭证，权限靠范围，追溯靠日志；三者缺一，安全评审就过不去 最常见的错误是给了一个超级账号，图省事，最后没人敢上线", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">日志要能回答什么</tspan></text><g data-k=\"谁在什么时候\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">谁在什么时候</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">调用主体与时间</tspan></text></g><g data-k=\"做了什么\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">做了什么</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">接口与参数</tspan></text></g><g data-k=\"前后值\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">前后值</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">写入前后可对比</tspan></text></g></svg>", "d": 18.4}, {"t": "小结", "n": "接外部系统要解决三件事：用什么身份、能做什么、做过什么要能查 身份靠凭证，权限靠范围，追溯靠日志；三者缺一，安全评审就过不去 最常见的错误是给了一个超级账号，图省事，最后没人敢上线", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"安全评审过不去\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">安全评审过不去</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">项目就上不了线</tspan></text></g><g data-k=\"三者缺一\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">三者缺一</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">身份、范围、追溯</tspan></text></g></svg>", "d": 18.4}]}, {"id": "M2U6", "tier": "adv", "step": "todo", "title": "一次可复现的工程自检", "video": {"dur": "4.6min", "script": ["可复现的意思是：换一个人按你写的说明，能跑出同样的结果", "自检清单五项：输入从哪来、参数是什么、校验规则、失败怎么处理、结果存哪", "写不出复现步骤的方案，本质上是「只有你能跑」，交付出去就断了"]}, "ppt": {"method": "复现五问清单：输入 / 参数 / 校验 / 失败 / 落库", "case": "某项目交付后客户自己跑不通，因为参数写在某人的本地配置里，没人知道", "demo": "现场用自己的场景过一遍复现五问，找出答不上来的那一条"}, "objective": "能写出让自己以外的人也能跑通的操作说明，并找出最不可复现的一环", "transfer": "找一位同事，按你的说明跑一次，记录他卡在哪一步", "deliverable": {"type": "document", "name": "可复现自检表", "rubric": ["五问都答了", "找到最弱一环", "说明可交接"], "acceptance": "能产出《可复现自检表》并通过本单元评分要点"}, "task": "写自检表：输入 / 参数 / 校验 / 失败处理 / 结果存放，各写清「在哪、怎么配、谁维护」。", "brief": "最不可复现的一环通常藏在「参数」和「失败处理」里。", "template": "【可复现自检表】\n① 输入从哪来（路径 / 接口）：\n② 参数是什么、存在哪：\n③ 校验规则写在哪：\n④ 失败怎么处理：\n⑤ 结果存哪、谁能看：\n最不可复现的一环：", "exemplar": "① 输入：每日从共享盘 /inbox 目录读取，文件名为日期。\n② 参数：阈值 0.85，写在 config.yaml，由我维护——这里最不可复现，因为只有我知道它放在哪。\n③ 校验：字段非空 + 分类值必须在枚举内，写在脚本 validate.py。\n④ 失败：记录到 error.log 并跳过，人工次日处理。\n⑤ 结果：写入 /outbox，运维可读。", "quiz": [{"q": "「可复现」最准确的意思是？", "opts": ["我能跑通", "换个人按说明能跑出同样结果", "跑得快", "不报错"], "a": 1, "why": "可复现针对的是交接，不是个人熟练度。"}, {"q": "参数写在某人本地配置里，主要问题是？", "opts": ["不安全", "别人无法复现，交付即中断", "运行变慢", "版本冲突"], "a": 1, "why": "配置不可见就无法复现，也无法排障。"}], "vslides": [{"t": "可复现的定义", "n": "可复现的意思是：换一个人按你写的说明，能跑出同样的结果 自检清单五项：输入从哪来、参数是什么、校验规则、失败怎么处理、结果存哪 写不出复现步骤的方案，本质上是「只有你能跑」，交付出去就断了", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">可复现的定义</tspan></text><g data-k=\"换个人能跑\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">换个人能跑</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不是我能跑</tspan></text></g><g data-k=\"按说明能复现\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">按说明能复现</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">结果一致</tspan></text></g><g data-k=\"交付不断档\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">交付不断档</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">人走了还能接着跑</tspan></text></g></svg>", "d": 19.3}, {"t": "复现五问", "n": "可复现的意思是：换一个人按你写的说明，能跑出同样的结果 自检清单五项：输入从哪来、参数是什么、校验规则、失败怎么处理、结果存哪 写不出复现步骤的方案，本质上是「只有你能跑」，交付出去就断了", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">复现五问</tspan></text><g data-k=\"输入从哪来\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">输入从哪来</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">路径或接口</tspan></text></g><g data-k=\"参数存在哪\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">参数存在哪</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">谁维护</tspan></text></g><g data-k=\"失败怎么处理\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">失败怎么处理</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">写清兜底</tspan></text></g></svg>", "d": 19.3}, {"t": "最不可复现的地方", "n": "可复现的意思是：换一个人按你写的说明，能跑出同样的结果 自检清单五项：输入从哪来、参数是什么、校验规则、失败怎么处理、结果存哪 写不出复现步骤的方案，本质上是「只有你能跑」，交付出去就断了", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">最不可复现的地方</tspan></text><g data-k=\"参数藏在本地\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">参数藏在本地</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">别人不知道阈值在哪</tspan></text></g><g data-k=\"失败靠口头\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">失败靠口头</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">没人知道怎么兜底</tspan></text></g><g data-k=\"结果只在自己电脑\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">结果只在自己电脑</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">交不出去</tspan></text></g></svg>", "d": 19.3}, {"t": "小结", "n": "可复现的意思是：换一个人按你写的说明，能跑出同样的结果 自检清单五项：输入从哪来、参数是什么、校验规则、失败怎么处理、结果存哪 写不出复现步骤的方案，本质上是「只有你能跑」，交付出去就断了", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"写说明给别人看\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">写说明给别人看</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不是给自己备忘</tspan></text></g><g data-k=\"让同事跑一次\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">让同事跑一次</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">卡住的地方就是缺口</tspan></text></g></svg>", "d": 19.3}]}]}, {"id": "M3", "title": "M3 进场：挖真需求，破一线抵触", "dims": ["workflow", "strategy", "content"], "units": [{"id": "M3U1", "tier": "basic", "step": "understand", "title": "进场访谈：别急着接需求，先挖三层", "video": {"dur": "5.2min", "script": ["客户说的第一句通常不是需求，是症状；直接照着做，做完他不认", "挖三层：表面要求 → 真实卡点 → 谁受影响；每层用一个具体问题往下钻", "访谈的目标不是收集需求清单，是找到一件能在一周内被验证的事"]}, "ppt": {"method": "三层提问卡：每层两句示范问法", "case": "客户说「给我们做个智能客服」，挖下去发现真问题是售后工单分类错，导致响应超时", "demo": "现场拿一句客户原话，连挖三层"}, "objective": "能用三层提问把一句表面要求挖到真实卡点与受影响的人", "transfer": "下次访谈带这张三层卡，结束后写下三层答案", "deliverable": {"type": "document", "name": "三层访谈记录", "rubric": ["三层都有答案", "找到受影响的人", "落到一件可验证的事"], "acceptance": "能产出《三层访谈记录》并通过本单元评分要点"}, "task": "记三层：他要求什么、真实卡点是什么、谁受影响；最后写「一周内能验证的一件事」。", "brief": "第三层最容易跳过，但决定了一线会不会配合。", "template": "【三层访谈记录】\n① 表面要求（他的原话）：\n② 真实卡点（往下问两层得到）：\n③ 谁受影响（具体到岗位/人）：\n一周内能验证的一件事：", "exemplar": "① 原话：「给我们做个智能客服，客户老投诉回复慢。」\n② 往下问：投诉集中在哪类问题？→ 售后工单分类经常分错，转到错误小组，来回三次。\n③ 受影响：售后一线 12 人，每天多处理约 40 张错转工单；客户等待从 4 小时变 2 天。\n一周可验证：拿 200 张历史工单，看自动分类能不能把错分率降到 10% 以下。", "quiz": [{"q": "客户第一句话最该被当成什么？", "opts": ["最终需求", "症状，需要往下挖", "预算依据", "验收标准"], "a": 1, "why": "第一句多是症状；照做容易做出他不认的东西。"}, {"q": "访谈第三层「谁受影响」为什么重要？", "opts": ["便于写报告", "决定一线会不会配合，也决定价值怎么算", "能拿到更多预算", "可以少做测试"], "a": 1, "why": "受影响的人不配合，方案再好也推不动。"}], "vslides": [{"t": "第一句多是症状", "n": "客户说的第一句通常不是需求，是症状；直接照着做，做完他不认 挖三层：表面要求 → 真实卡点 → 谁受影响；每层用一个具体问题往下钻 访谈的目标不是收集需求清单，是找到一件能在一周内被验证的事", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">第一句多是症状</tspan></text><g data-k=\"照做会返工\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">照做会返工</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">做完他不认</tspan></text></g><g data-k=\"往下挖两层\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">往下挖两层</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">才见到真卡点</tspan></text></g><g data-k=\"找受影响的人\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">找受影响的人</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">决定能不能推</tspan></text></g></svg>", "d": 19.5}, {"t": "三层提问", "n": "客户说的第一句通常不是需求，是症状；直接照着做，做完他不认 挖三层：表面要求 → 真实卡点 → 谁受影响；每层用一个具体问题往下钻 访谈的目标不是收集需求清单，是找到一件能在一周内被验证的事", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">三层提问</tspan></text><g data-k=\"表面要求\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">表面要求</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">他让你做什么</tspan></text></g><g data-k=\"真实卡点\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">真实卡点</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">哪一步真正卡住</tspan></text></g><g data-k=\"谁受影响\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">谁受影响</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">哪个岗位、多少人</tspan></text></g></svg>", "d": 19.5}, {"t": "访谈的目标", "n": "客户说的第一句通常不是需求，是症状；直接照着做，做完他不认 挖三层：表面要求 → 真实卡点 → 谁受影响；每层用一个具体问题往下钻 访谈的目标不是收集需求清单，是找到一件能在一周内被验证的事", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">访谈的目标</tspan></text><g data-k=\"不是需求清单\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">不是需求清单</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">是找到一件可验证的事</tspan></text></g><g data-k=\"一周内能验证\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">一周内能验证</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">才值得马上做</tspan></text></g><g data-k=\"有具体人配合\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">有具体人配合</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">才推得动</tspan></text></g></svg>", "d": 19.5}, {"t": "小结", "n": "客户说的第一句通常不是需求，是症状；直接照着做，做完他不认 挖三层：表面要求 → 真实卡点 → 谁受影响；每层用一个具体问题往下钻 访谈的目标不是收集需求清单，是找到一件能在一周内被验证的事", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"带三层卡去访谈\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">带三层卡去访谈</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">结束写下三层答案</tspan></text></g><g data-k=\"第三层最易跳过\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">第三层最易跳过</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">但决定配合度</tspan></text></g></svg>", "d": 19.5}]}, {"id": "M3U2", "tier": "basic", "step": "understand", "title": "隐性流程：客户自己都说不清的那部分", "video": {"dur": "4.8min", "script": ["流程文档写的是应该怎么做，真实流程里有一堆「大家都知道的例外」", "隐性流程只能靠跟着看：坐在他旁边看一遍，比问十遍准", "记录三类东西：跳过的步骤、私下的表格、口头约定"]}, "ppt": {"method": "三类隐性痕迹：跳过 / 私表 / 口头约定", "case": "某审批流程文档写 4 步，实际有 7 步，多出来的三步是为了绕过系统限制", "demo": "现场跟一次真实操作，记录三类隐性痕迹"}, "objective": "能通过跟随观察找出至少三条隐性流程，并说明它对方案的影响", "transfer": "约一个一线同事，看他把一件真实的事做完，别打断，只记录", "deliverable": {"type": "document", "name": "隐性流程记录", "rubric": ["三类痕迹都有", "写出影响", "标出必须保留的"], "acceptance": "能产出《隐性流程记录》并通过本单元评分要点"}, "task": "记三类：跳过了哪一步、用了哪张私表、有哪些口头约定；每条写「如果不保留会怎样」。", "brief": "不要一上来就说「这个要改掉」；先问「为什么会有这一步」，多数隐性步骤是在补系统的坑。", "template": "【隐性流程记录】\n① 跳过的步骤：/ 为什么跳 / 不保留会怎样\n② 私下的表格：/ 谁维护 / 不保留会怎样\n③ 口头约定：/ 和谁 / 不保留会怎样", "exemplar": "① 跳过系统里的「复核」节点，因为复核人经常出差，卡三天；不保留会怎样：单据积压。\n② 一张私表记录「哪些供应商可以走快速通道」；不保留会怎样：每单都要重新确认，慢一倍。\n③ 口头约定：金额小于 500 元的争议直接找组长，不走流程。不保留：小额争议升级到部门，处理时长翻倍。", "quiz": [{"q": "发现一线跳过了系统里的某个步骤，最该先做什么？", "opts": ["要求他按流程走", "问清为什么跳，多半是在补系统的坑", "上报领导", "写进报告"], "a": 1, "why": "隐性步骤通常有存在理由，先理解再改造。"}, {"q": "隐性流程最可靠的获取方式是？", "opts": ["看流程文档", "发问卷", "坐在旁边看真实操作", "问部门负责人"], "a": 2, "why": "文档写应然，负责人口述会简化；只有观察能看到例外。"}], "vslides": [{"t": "文档写的是应然", "n": "流程文档写的是应该怎么做，真实流程里有一堆「大家都知道的例外」 隐性流程只能靠跟着看：坐在他旁边看一遍，比问十遍准 记录三类东西：跳过的步骤、私下的表格、口头约定", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">文档写的是应然</tspan></text><g data-k=\"真实流程有例外\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">真实流程有例外</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">大家都知道但没写</tspan></text></g><g data-k=\"隐性步骤在补坑\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">隐性步骤在补坑</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">多数是为了绕开系统限制</tspan></text></g><g data-k=\"只能跟着看\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">只能跟着看</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">问十遍不如看一遍</tspan></text></g></svg>", "d": 16.6}, {"t": "三类隐性痕迹", "n": "流程文档写的是应该怎么做，真实流程里有一堆「大家都知道的例外」 隐性流程只能靠跟着看：坐在他旁边看一遍，比问十遍准 记录三类东西：跳过的步骤、私下的表格、口头约定", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">三类隐性痕迹</tspan></text><g data-k=\"跳过的步骤\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">跳过的步骤</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">为什么跳、跳过会怎样</tspan></text></g><g data-k=\"私下的表格\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">私下的表格</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">谁维护、记录什么</tspan></text></g><g data-k=\"口头约定\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">口头约定</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">和谁、什么条件下生效</tspan></text></g></svg>", "d": 16.6}, {"t": "怎么处理隐性流程", "n": "流程文档写的是应该怎么做，真实流程里有一堆「大家都知道的例外」 隐性流程只能靠跟着看：坐在他旁边看一遍，比问十遍准 记录三类东西：跳过的步骤、私下的表格、口头约定", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">怎么处理隐性流程</tspan></text><g data-k=\"先问为什么\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">先问为什么</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">别急着说要改掉</tspan></text></g><g data-k=\"能保留就保留\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">能保留就保留</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">它可能在补系统的坑</tspan></text></g><g data-k=\"要改的先备替代\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">要改的先备替代</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">否则一线会绕回去</tspan></text></g></svg>", "d": 16.6}, {"t": "小结", "n": "流程文档写的是应该怎么做，真实流程里有一堆「大家都知道的例外」 隐性流程只能靠跟着看：坐在他旁边看一遍，比问十遍准 记录三类东西：跳过的步骤、私下的表格、口头约定", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"观察不打断\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">观察不打断</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">只记录不评价</tspan></text></g><g data-k=\"每条写影响\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">每条写影响</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不保留会怎样</tspan></text></g></svg>", "d": 16.6}]}, {"id": "M3U3", "tier": "adv", "step": "demo", "title": "Demo 沟通语言：业务方唯一听得懂的话", "video": {"dur": "5.0min", "script": ["业务方听不懂「模型」「上下文」「Agent」，他们只关心三件事：快了多少、错了谁负责、我要多做什么", "Demo 不要演示功能，要演示「他明天上班的动作变化」", "讲完必须留一个明确的下一步，否则会停在「挺好的，再看看」"]}, "ppt": {"method": "三句话结构：省了什么 / 谁把关 / 你要改哪个动作", "case": "同一套系统，讲功能业务方点头不语；讲「你以后只复核标红的 20%」，当场就问什么时候能用", "demo": "现场把一段技术介绍改写成三句话版本"}, "objective": "能用业务语言讲清一个方案，并让业务方说出「我要改哪个动作」", "transfer": "找一位不懂技术的同事，用三句话讲一遍，看他能不能复述", "deliverable": {"type": "document", "name": "三句话讲稿", "rubric": ["省了什么有数字", "谁把关说清", "动作变化具体"], "acceptance": "能产出《三句话讲稿》并通过本单元评分要点"}, "task": "写三句话：这件事省了什么（带数字）、错了谁把关、你要改哪个动作。不超过 100 字。", "brief": "「谁把关」这句不能省，业务方最担心的是责任。", "template": "【三句话讲稿】\n① 省了什么（数字）：\n② 错了谁把关：\n③ 你要改的动作：", "exemplar": "① 每张单据先机审一遍，审核员只看标红的约 20%，其余直接过，一天从 200 张降到 40 张。\n② 机器只做初筛，最终放行还是你签字；每张标红的都附上它为什么标红。\n③ 你要改的动作：从逐张看，改成只看标红 + 每天抽 5 张没标红的复核。", "quiz": [{"q": "给业务方做 Demo，最该演示什么？", "opts": ["模型能力多强", "他明天上班的动作会怎么变", "技术架构", "用了哪些工具"], "a": 1, "why": "业务方关心自己的动作与责任，不关心技术实现。"}, {"q": "「谁把关」这句话为什么不能省？", "opts": ["显得专业", "业务方最担心责任归属，说清才敢用", "便于通过验收", "能少做测试"], "a": 1, "why": "责任不清的方案，一线不敢签字放行。"}], "vslides": [{"t": "业务方只关心三件事", "n": "业务方听不懂「模型」「上下文」「Agent」，他们只关心三件事：快了多少、错了谁负责、我要多做什么 Demo 不要演示功能，要演示「他明天上班的动作变化」 讲完必须留一个明确的下一步，否则会停在「挺好的，再看看」", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">业务方只关心三件事</tspan></text><g data-k=\"快了多少\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">快了多少</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">带数字</tspan></text></g><g data-k=\"错了谁负责\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">错了谁负责</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">责任归属</tspan></text></g><g data-k=\"我要多做什么\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">我要多做什么</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">动作变化</tspan></text></g></svg>", "d": 21.7}, {"t": "Demo 不演功能", "n": "业务方听不懂「模型」「上下文」「Agent」，他们只关心三件事：快了多少、错了谁负责、我要多做什么 Demo 不要演示功能，要演示「他明天上班的动作变化」 讲完必须留一个明确的下一步，否则会停在「挺好的，再看看」", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">Demo 不演功能</tspan></text><g data-k=\"演动作变化\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">演动作变化</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">他明天上班怎么干</tspan></text></g><g data-k=\"演他的收益\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">演他的收益</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">少做什么</tspan></text></g><g data-k=\"演把关机制\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">演把关机制</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">谁签字</tspan></text></g></svg>", "d": 21.7}, {"t": "讲完要留下一步", "n": "业务方听不懂「模型」「上下文」「Agent」，他们只关心三件事：快了多少、错了谁负责、我要多做什么 Demo 不要演示功能，要演示「他明天上班的动作变化」 讲完必须留一个明确的下一步，否则会停在「挺好的，再看看」", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">讲完要留下一步</tspan></text><g data-k=\"否则停在再看看\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">否则停在再看看</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">没有决策</tspan></text></g><g data-k=\"给明确时间点\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">给明确时间点</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">什么时候试</tspan></text></g><g data-k=\"给明确范围\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">给明确范围</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">先试哪个场景</tspan></text></g></svg>", "d": 21.7}, {"t": "小结", "n": "业务方听不懂「模型」「上下文」「Agent」，他们只关心三件事：快了多少、错了谁负责、我要多做什么 Demo 不要演示功能，要演示「他明天上班的动作变化」 讲完必须留一个明确的下一步，否则会停在「挺好的，再看看」", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"三句话讲清\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">三句话讲清</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">省了什么、谁把关、改哪个动作</tspan></text></g><g data-k=\"让业务复述\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">让业务复述</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">能复述才算讲通</tspan></text></g></svg>", "d": 21.7}]}, {"id": "M3U4", "tier": "adv", "step": "demo", "title": "一线抵触：技术问题都有解法，人的问题没有", "video": {"dur": "5.2min", "script": ["一线抵触通常不是不懂技术，是担心三件事：活变多、责任变大、自己被替代", "有效做法不是讲道理，是把「他的收益」写进方案：少做什么、多拿到什么", "最忌讳的是越级推：领导压下来，一线表面配合，实际绕开系统"]}, "ppt": {"method": "抵触三源：活变多 / 责任变大 / 怕被替代，各配一个应对话术", "case": "某项目领导强推，一线照旧用 Excel，后台数据显示使用率 3%", "demo": "现场写一段面对一线的话术，只讲他能拿到什么"}, "objective": "能识别一线抵触的真实来源，并给出对应的沟通与方案调整", "transfer": "找一个明确表达过抵触的一线，问他最担心哪一条，记下来", "deliverable": {"type": "document", "name": "一线顾虑清单", "rubric": ["三类顾虑都问到", "写出对应调整", "有一条真实反馈"], "acceptance": "能产出《一线顾虑清单》并通过本单元评分要点"}, "task": "写清单：三类顾虑各写「他怎么说的 + 方案要做哪些调整」。", "brief": "不要写「加强宣导」；要写方案里具体改了什么。", "template": "【一线顾虑清单】\n① 担心活变多 —— 他原话：/ 方案调整：\n② 担心责任变大 —— 他原话：/ 方案调整：\n③ 担心被替代 —— 他原话：/ 方案调整：", "exemplar": "① 「本来我一个人干三个人的活，现在还要多录一遍系统。」→ 调整：取消重复录入，系统直接读原有表格。\n② 「机器判错了算谁的？」→ 调整：机器只出建议，签字责任仍在人，且每条建议附依据。\n③ 「是不是以后就不要我们了？」→ 调整：明确岗位不减，工作量转向复核与疑难处理。", "quiz": [{"q": "一线表面配合、实际绕开系统，最可能的原因是？", "opts": ["培训不够", "被越级强推，收益与顾虑都没被处理", "系统太慢", "界面不好看"], "a": 1, "why": "压下来的任务，一线会用脚投票；要处理顾虑而不是加压。"}, {"q": "面对「担心被替代」，最该做的是？", "opts": ["强调 AI 不会替代人", "明确岗位与工作内容怎么变，并落到具体安排", "回避这个问题", "让领导去讲"], "a": 1, "why": "空口安慰无效，具体的岗位安排才让人安心。"}], "vslides": [{"t": "抵触的三个来源", "n": "一线抵触通常不是不懂技术，是担心三件事：活变多、责任变大、自己被替代 有效做法不是讲道理，是把「他的收益」写进方案：少做什么、多拿到什么 最忌讳的是越级推：领导压下来，一线表面配合，实际绕开系统", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">抵触的三个来源</tspan></text><g data-k=\"活变多\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">活变多</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">多录一遍系统</tspan></text></g><g data-k=\"责任变大\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">责任变大</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">机器判错算谁的</tspan></text></g><g data-k=\"怕被替代\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">怕被替代</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">以后还要不要我们</tspan></text></g></svg>", "d": 19.9}, {"t": "讲道理没用", "n": "一线抵触通常不是不懂技术，是担心三件事：活变多、责任变大、自己被替代 有效做法不是讲道理，是把「他的收益」写进方案：少做什么、多拿到什么 最忌讳的是越级推：领导压下来，一线表面配合，实际绕开系统", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">讲道理没用</tspan></text><g data-k=\"越级强推\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">越级强推</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">表面配合实际绕开</tspan></text></g><g data-k=\"后台使用率 3%\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">后台使用率 3%</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">这就是压下来的结果</tspan></text></g><g data-k=\"处理顾虑\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">处理顾虑</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">才能真的用起来</tspan></text></g></svg>", "d": 19.9}, {"t": "把收益写进方案", "n": "一线抵触通常不是不懂技术，是担心三件事：活变多、责任变大、自己被替代 有效做法不是讲道理，是把「他的收益」写进方案：少做什么、多拿到什么 最忌讳的是越级推：领导压下来，一线表面配合，实际绕开系统", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">把收益写进方案</tspan></text><g data-k=\"少做什么\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">少做什么</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">取消重复录入</tspan></text></g><g data-k=\"多拿到什么\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">多拿到什么</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">疑难处理更有价值</tspan></text></g><g data-k=\"岗位怎么变\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">岗位怎么变</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">写具体安排</tspan></text></g></svg>", "d": 19.9}, {"t": "小结", "n": "一线抵触通常不是不懂技术，是担心三件事：活变多、责任变大、自己被替代 有效做法不是讲道理，是把「他的收益」写进方案：少做什么、多拿到什么 最忌讳的是越级推：领导压下来，一线表面配合，实际绕开系统", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"先问最担心哪条\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">先问最担心哪条</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">再改方案</tspan></text></g><g data-k=\"不写加强宣导\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">不写加强宣导</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">写具体调整</tspan></text></g></svg>", "d": 19.9}]}, {"id": "M3U5", "tier": "adv", "step": "todo", "title": "场景优先级：先定场景，再动手", "video": {"dur": "4.8min", "script": ["场景不是越多越好，第一个场景要能「小、痛、可验证」", "四象限：痛感强 × 可验证快，优先做右上；痛感弱又难验证的，先放着", "选错第一个场景的代价：做了半年，没人说得清到底有没有用"]}, "ppt": {"method": "四象限筛选：痛感 / 可验证 / 数据可得 / 谁支持", "case": "某团队先做了最炫的智能问答，半年后被问「省了多少人力」答不上来，项目停掉", "demo": "现场用四象限给三个候选场景排序"}, "objective": "能用四象限给候选场景排序，并说清第一个场景为什么是它", "transfer": "把排序结果给业务负责人看，问他认不认这个顺序", "deliverable": {"type": "document", "name": "场景优先级表", "rubric": ["四个维度都打分", "排序有依据", "第一个场景可验证"], "acceptance": "能产出《场景优先级表》并通过本单元评分要点"}, "task": "写排序：三个候选场景各打四项分，排出顺序，写清第一个为什么是它。", "brief": "第一个场景要在一到两个月内能被验证，否则团队会失去耐心。", "template": "【场景优先级表】\n场景 A / B / C\n痛感（1-5）：\n可验证速度（1-5）：\n数据可得（1-5）：\n有人支持（1-5）：\n排序：\n第一个场景与理由：", "exemplar": "A 售后工单自动分类：痛感 5（每天 40 张错转）、可验证 5（200 张样本一周出结果）、数据 5（历史工单齐全）、支持 4（售后主管想推）\nB 智能问答知识库：痛感 2、可验证 2（说不清怎么算成功）、数据 3、支持 3\nC 合同条款比对：痛感 4、可验证 3、数据 2（扫描件质量差）、支持 3\n排序：A → C → B。第一个做 A，因为一周内能用历史样本验证错分率。", "quiz": [{"q": "第一个场景最重要的特征是？", "opts": ["最能体现技术实力", "痛感强且能在一两个月内被验证", "预算最高", "领导最关心"], "a": 1, "why": "第一个场景要立信，可验证比炫技重要。"}, {"q": "「说不清怎么算成功」的场景，为什么该往后排？", "opts": ["技术难度大", "无法验收，做完也说不清价值，团队会失去耐心", "预算不够", "数据不安全"], "a": 1, "why": "不可验证的项目在复盘时无法自证，容易被砍。"}], "vslides": [{"t": "第一个场景要小、痛、可验证", "n": "场景不是越多越好，第一个场景要能「小、痛、可验证」 四象限：痛感强 × 可验证快，优先做右上；痛感弱又难验证的，先放着 选错第一个场景的代价：做了半年，没人说得清到底有没有用", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">第一个场景要小、痛、可验证</tspan></text><g data-k=\"小\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">一两个月能跑完</tspan></text></g><g data-k=\"痛\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">痛</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">有人天天在骂</tspan></text></g><g data-k=\"可验证\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">可验证</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">能用历史样本回测</tspan></text></g></svg>", "d": 17.8}, {"t": "四象限筛选", "n": "场景不是越多越好，第一个场景要能「小、痛、可验证」 四象限：痛感强 × 可验证快，优先做右上；痛感弱又难验证的，先放着 选错第一个场景的代价：做了半年，没人说得清到底有没有用", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">四象限筛选</tspan></text><g data-k=\"痛感 × 可验证\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">痛感 × 可验证</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">右上优先做</tspan></text></g><g data-k=\"痛但难验\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">痛但难验</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">拆小再验</tspan></text></g><g data-k=\"不痛又难验\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">不痛又难验</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">先放着</tspan></text></g></svg>", "d": 17.8}, {"t": "选错的代价", "n": "场景不是越多越好，第一个场景要能「小、痛、可验证」 四象限：痛感强 × 可验证快，优先做右上；痛感弱又难验证的，先放着 选错第一个场景的代价：做了半年，没人说得清到底有没有用", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">选错的代价</tspan></text><g data-k=\"做最炫的问答\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">做最炫的问答</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">半年说不清价值</tspan></text></g><g data-k=\"无法自证\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">无法自证</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">复盘时被砍</tspan></text></g><g data-k=\"先立信\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">先立信</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">再谈大场景</tspan></text></g></svg>", "d": 17.8}, {"t": "小结", "n": "场景不是越多越好，第一个场景要能「小、痛、可验证」 四象限：痛感强 × 可验证快，优先做右上；痛感弱又难验证的，先放着 选错第一个场景的代价：做了半年，没人说得清到底有没有用", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"排序要给业务看\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">排序要给业务看</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">他认不认这个顺序</tspan></text></g><g data-k=\"第一个场景定生死\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">第一个场景定生死</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">别选错</tspan></text></g></svg>", "d": 17.8}]}, {"id": "M3U6", "tier": "adv", "step": "todo", "title": "一页纸场景立项书", "video": {"dur": "5.0min", "script": ["立项书不是方案书，只需回答五问：解决谁的什么问题、做到什么算成、怎么验、要什么、不要什么", "一页纸的约束是刻意的：写不满说明没想清，写超了说明没取舍", "最常被漏的是「不要什么」，也就是范围边界"]}, "ppt": {"method": "一页五问：谁的问题 / 算成的标准 / 怎么验 / 要什么资源 / 明确不做什么", "case": "两份立项书，一份八页没人看完，一份一页当场过会", "demo": "现场写一页纸，写完让同事用 30 秒复述"}, "objective": "能写出一页纸场景立项书，让别人 30 秒内说清这件事要干什么", "transfer": "把这一页纸发给业务负责人，请他补一句「我不要什么」", "deliverable": {"type": "document", "name": "一页纸立项书", "rubric": ["五问齐全", "验收可量化", "写了不做什么"], "acceptance": "能产出《一页纸立项书》并通过本单元评分要点"}, "task": "写一页纸：五问各一到两句，最后单列「本次明确不做」。", "brief": "「不要什么」写得越具体，后面扯皮越少。", "template": "【一页纸立项书】\n① 谁的问题（岗位 + 现象）：\n② 做到什么算成（数字）：\n③ 怎么验（样本 + 谁看）：\n④ 要什么（人 / 数据 / 权限）：\n⑤ 明确不做：", "exemplar": "① 售后一线 12 人，每天约 40 张工单被分错小组，来回三次。\n② 自动分类错分率从 28% 降到 10% 以下。\n③ 用 200 张历史工单回测，售后主管看结果并签字。\n④ 需要历史工单数据、分类枚举表、一名一线同事做标注。\n⑤ 明确不做：不做客户侧对话机器人，不改工单系统界面，不处理跨系统数据。", "quiz": [{"q": "一页纸立项书里最常被漏、但最能减少扯皮的是？", "opts": ["技术方案", "预算", "明确不做什么（范围边界）", "项目排期"], "a": 2, "why": "边界不清，交付期会不断被加入新需求。"}, {"q": "「做到什么算成」应该写成？", "opts": ["明显提升效率", "错分率从 28% 降到 10% 以下", "业务方满意", "系统稳定运行"], "a": 1, "why": "带基线与目标值的指标才能验收。"}], "vslides": [{"t": "立项书只回答五问", "n": "立项书不是方案书，只需回答五问：解决谁的什么问题、做到什么算成、怎么验、要什么、不要什么 一页纸的约束是刻意的：写不满说明没想清，写超了说明没取舍 最常被漏的是「不要什么」，也就是范围边界", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">立项书只回答五问</tspan></text><g data-k=\"谁的问题\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">谁的问题</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">岗位 + 现象</tspan></text></g><g data-k=\"做到什么算成\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">做到什么算成</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">带基线与目标</tspan></text></g><g data-k=\"怎么验\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">怎么验</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">样本 + 谁签字</tspan></text></g></svg>", "d": 19.3}, {"t": "一页纸是刻意的约束", "n": "立项书不是方案书，只需回答五问：解决谁的什么问题、做到什么算成、怎么验、要什么、不要什么 一页纸的约束是刻意的：写不满说明没想清，写超了说明没取舍 最常被漏的是「不要什么」，也就是范围边界", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">一页纸是刻意的约束</tspan></text><g data-k=\"写不满\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">写不满</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">说明没想清</tspan></text></g><g data-k=\"写超了\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">写超了</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">说明没取舍</tspan></text></g><g data-k=\"八页没人看\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">八页没人看</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">一页能过会</tspan></text></g></svg>", "d": 19.3}, {"t": "最常漏的是边界", "n": "立项书不是方案书，只需回答五问：解决谁的什么问题、做到什么算成、怎么验、要什么、不要什么 一页纸的约束是刻意的：写不满说明没想清，写超了说明没取舍 最常被漏的是「不要什么」，也就是范围边界", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">最常漏的是边界</tspan></text><g data-k=\"明确不做什么\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">明确不做什么</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">范围边界</tspan></text></g><g data-k=\"不写清会加需求\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">不写清会加需求</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">交付期无限延长</tspan></text></g><g data-k=\"写具体\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">写具体</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不做客户侧机器人</tspan></text></g></svg>", "d": 19.3}, {"t": "小结", "n": "立项书不是方案书，只需回答五问：解决谁的什么问题、做到什么算成、怎么验、要什么、不要什么 一页纸的约束是刻意的：写不满说明没想清，写超了说明没取舍 最常被漏的是「不要什么」，也就是范围边界", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"五问齐了就能过会\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">五问齐了就能过会</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不用长篇方案</tspan></text></g><g data-k=\"让别人 30 秒复述\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">让别人 30 秒复述</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">检验是否讲清</tspan></text></g></svg>", "d": 19.3}]}]}, {"id": "M4", "title": "M4 方案与搭建：把场景做成能跑的东西", "dims": ["dev", "data", "workflow"], "units": [{"id": "M4U1", "tier": "basic", "step": "understand", "title": "从场景到方案：画流程图还是 Agent 图", "video": {"dur": "4.8min", "script": ["动手前先判断：这件事是「规则能覆盖」还是「需要判断」", "规则能覆盖的，写成流程与规则表；需要判断的，才上模型与 Agent", "最常见的浪费是用 Agent 做一件两条 if 就能解决的事"]}, "ppt": {"method": "决策树：规则可枚举 / 需要判断 / 需要外部数据", "case": "某团队用 Agent 做发票验真，其实调一个验真接口就够，白花了两个月", "demo": "现场给三个场景各判断一次：规则、模型、还是两者结合"}, "objective": "能判断一个场景该用规则、模型还是组合，并说出判断依据", "transfer": "翻一遍你手上的方案，找出一个「用 Agent 做了本该用规则做」的地方", "deliverable": {"type": "document", "name": "方案形态判断卡", "rubric": ["三个场景都判断过", "依据是任务性质", "给出组合建议"], "acceptance": "能产出《方案形态判断卡》并通过本单元评分要点"}, "task": "写判断卡：每个场景写「能不能枚举所有情况 / 要不要判断 / 要不要外部数据」，再给结论。", "brief": "能枚举完的，一律先写规则；规则覆盖不到的边界再交给模型。", "template": "【方案形态判断卡】\n场景：\n能否枚举所有情况：\n是否需要判断：\n是否需要外部数据：\n结论：□ 规则　□ 模型　□ 规则 + 模型\n理由：", "exemplar": "场景：报销单是否超标准。\n能否枚举：能（按城市分级、按职级定限额）。\n需要判断：弱（只有特殊审批例外）。\n外部数据：需要（城市等级表）。\n结论：规则 + 模型。规则算超标，模型只判断例外理由是否成立。\n理由：主体是查表计算，不需要模型做判断。", "quiz": [{"q": "一件事能用两条规则说清，最合适的方案是？", "opts": ["上 Agent", "写规则", "训一个模型", "先做 Demo"], "a": 1, "why": "规则稳定、成本低、可解释；用模型是过度设计。"}, {"q": "判断该不该用模型，核心看什么？", "opts": ["数据量大小", "任务是否能被规则完全枚举", "预算多少", "领导偏好"], "a": 1, "why": "规则能枚举的不需要模型；枚举不了的边界才交给模型。"}], "vslides": [{"t": "先判断形态再动手", "n": "动手前先判断：这件事是「规则能覆盖」还是「需要判断」 规则能覆盖的，写成流程与规则表；需要判断的，才上模型与 Agent 最常见的浪费是用 Agent 做一件两条 if 就能解决的事", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">先判断形态再动手</tspan></text><g data-k=\"规则能枚举\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">规则能枚举</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">写规则表就够</tspan></text></g><g data-k=\"需要判断\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">需要判断</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">才上模型</tspan></text></g><g data-k=\"要外部数据\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">要外部数据</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">先解决接口</tspan></text></g></svg>", "d": 18.7}, {"t": "用 Agent 做规则活", "n": "动手前先判断：这件事是「规则能覆盖」还是「需要判断」 规则能覆盖的，写成流程与规则表；需要判断的，才上模型与 Agent 最常见的浪费是用 Agent 做一件两条 if 就能解决的事", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">用 Agent 做规则活</tspan></text><g data-k=\"白花两个月\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">白花两个月</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">一个接口就能解决</tspan></text></g><g data-k=\"贵且不稳\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">贵且不稳</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">还说不清为什么这么判</tspan></text></g><g data-k=\"先问能不能枚举\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">先问能不能枚举</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">能就写规则</tspan></text></g></svg>", "d": 18.7}, {"t": "常见三种结论", "n": "动手前先判断：这件事是「规则能覆盖」还是「需要判断」 规则能覆盖的，写成流程与规则表；需要判断的，才上模型与 Agent 最常见的浪费是用 Agent 做一件两条 if 就能解决的事", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">常见三种结论</tspan></text><g data-k=\"纯规则\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">纯规则</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">查表、比对、限额</tspan></text></g><g data-k=\"规则 + 模型\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">规则 + 模型</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">规则算主体，模型判例外</tspan></text></g><g data-k=\"纯模型\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">纯模型</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">真需要理解语义</tspan></text></g></svg>", "d": 18.7}, {"t": "小结", "n": "动手前先判断：这件事是「规则能覆盖」还是「需要判断」 规则能覆盖的，写成流程与规则表；需要判断的，才上模型与 Agent 最常见的浪费是用 Agent 做一件两条 if 就能解决的事", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"方案形态错了\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">方案形态错了</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">后面全白做</tspan></text></g><g data-k=\"能枚举不用模型\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">能枚举不用模型</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">这是纪律</tspan></text></g></svg>", "d": 18.7}]}, {"id": "M4U2", "tier": "basic", "step": "understand", "title": "知识与数据：RAG 的边界、切片与引用溯源", "video": {"dur": "5.0min", "script": ["RAG 解决的是「让模型查资料再回答」，不是「让它变聪明」", "切片决定成败：按章节切比按字数切准，切太碎会丢上下文，切太大检索不准", "必须能溯源：每个结论要能指回原文哪一段，否则业务方不敢用"]}, "ppt": {"method": "三件事：能进什么 / 怎么切 / 怎么指回原文", "case": "某知识库按 500 字硬切，把一条制度的「例外」和「主体」切到两段，回答全错", "demo": "现场拿一份真实制度，做一次切片与溯源演练"}, "objective": "能说明一份材料能否进知识库、怎么切、怎么保证可溯源", "transfer": "把你手上最常用的一份材料做一次切片，看能不能每条结论指回原文", "deliverable": {"type": "document", "name": "RAG 切片方案", "rubric": ["准入判断清楚", "切片按结构", "溯源可定位"], "acceptance": "能产出《RAG 切片方案》并通过本单元评分要点"}, "task": "写方案：哪些材料能进、按什么单位切、每段怎么编号、回答怎么带出处。", "brief": "切片单位优先按「条款/小节」，不要按字数；条款自带完整语义。", "template": "【RAG 切片方案】\n能进的材料：\n不能进的（涉敏/过期）：\n切片单位：\n编号规则：\n回答带出处的形式：", "exemplar": "能进：现行有效的差旅制度、报销细则。\n不能进：含客户名单的附件、已废止的旧版制度。\n切片单位：按条款切，一条一段，保留条款号。\n编号：制度ID-条款号。\n出处形式：回答末尾附「依据：差旅制度 4.3 条」。", "quiz": [{"q": "知识库切片最该按什么单位切？", "opts": ["每 500 字", "按条款或小节，保留结构", "按页", "整篇不切"], "a": 1, "why": "条款自带完整语义，按字数切会把主体与例外切散。"}, {"q": "回答必须能指回原文，主要为了解决？", "opts": ["速度", "业务方敢不敢用、错了能不能查", "成本", "界面美观"], "a": 1, "why": "可溯源是可信度的前提，也是纠错的基础。"}], "vslides": [{"t": "RAG 是让它查资料", "n": "RAG 解决的是「让模型查资料再回答」，不是「让它变聪明」 切片决定成败：按章节切比按字数切准，切太碎会丢上下文，切太大检索不准 必须能溯源：每个结论要能指回原文哪一段，否则业务方不敢用", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">RAG 是让它查资料</tspan></text><g data-k=\"不是变聪明\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">不是变聪明</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">只是能用你的材料</tspan></text></g><g data-k=\"切片决定成败\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">切片决定成败</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">切错一切都错</tspan></text></g><g data-k=\"必须能溯源\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">必须能溯源</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">指回原文才敢用</tspan></text></g></svg>", "d": 19.1}, {"t": "切片按结构切", "n": "RAG 解决的是「让模型查资料再回答」，不是「让它变聪明」 切片决定成败：按章节切比按字数切准，切太碎会丢上下文，切太大检索不准 必须能溯源：每个结论要能指回原文哪一段，否则业务方不敢用", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">切片按结构切</tspan></text><g data-k=\"按条款切\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">按条款切</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">条款自带完整语义</tspan></text></g><g data-k=\"按字数硬切\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">按字数硬切</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">主体与例外被切散</tspan></text></g><g data-k=\"保留编号\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">保留编号</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">方便溯源</tspan></text></g></svg>", "d": 19.1}, {"t": "能进与不能进", "n": "RAG 解决的是「让模型查资料再回答」，不是「让它变聪明」 切片决定成败：按章节切比按字数切准，切太碎会丢上下文，切太大检索不准 必须能溯源：每个结论要能指回原文哪一段，否则业务方不敢用", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">能进与不能进</tspan></text><g data-k=\"能进\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">能进</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">现行有效制度、公开资料</tspan></text></g><g data-k=\"不能进\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">不能进</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">客户名单、涉敏附件</tspan></text></g><g data-k=\"过期材料\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">过期材料</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">一定要清出去</tspan></text></g></svg>", "d": 19.1}, {"t": "小结", "n": "RAG 解决的是「让模型查资料再回答」，不是「让它变聪明」 切片决定成败：按章节切比按字数切准，切太碎会丢上下文，切太大检索不准 必须能溯源：每个结论要能指回原文哪一段，否则业务方不敢用", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"每条结论带出处\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">每条结论带出处</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">依据：某制度 X 条</tspan></text></g><g data-k=\"切太碎丢上下文\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">切太碎丢上下文</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">切太大检索不准</tspan></text></g></svg>", "d": 19.1}]}, {"id": "M4U3", "tier": "adv", "step": "demo", "title": "搭一个最小可用智能体", "video": {"dur": "5.2min", "script": ["最小可用 = 一个真实输入、一个真实输出、中间只有必要步骤", "第一版不要做「全能助手」，做一个「只干一件事」的窄版本", "验收方式是：拿 20 条真实输入跑一遍，看对几条"]}, "ppt": {"method": "三件套：一个输入口、一段固定流程、一个产出文件", "case": "某团队第一版做了 12 个功能，没人会用；砍到一个功能后，一周内 30 人在用", "demo": "现场搭一个只干一件事的版本，用 5 条真实输入试跑"}, "objective": "能搭出一个只干一件事、可被真实输入驱动的最小智能体", "transfer": "把这个最小版本给一个真实用户用一次，记录他卡在哪", "deliverable": {"type": "artifact", "name": "最小可用版本", "rubric": ["只干一件事", "输入真实", "产出可直接用"], "acceptance": "能产出《最小可用版本》并通过本单元评分要点"}, "task": "写清：它只干什么、输入从哪来、输出给谁、现在能对几条。", "brief": "功能清单超过三条，说明第一版还没砍够。", "template": "【最小可用版本】\n它只干这一件事：\n输入：\n处理步骤（≤3 步）：\n输出给谁：\n试跑 5 条，对了几条：", "exemplar": "只干一件事：把工单按分类枚举打标签。\n输入：工单标题 + 描述（从系统复制或接口取）。\n步骤：清洗文本 → 打标签 → 输出标签与置信度。\n输出：给售后派单员。\n试跑 5 条：对 4 条，错 1 条（跨类工单）。", "quiz": [{"q": "第一版智能体最该做成什么样？", "opts": ["功能齐全的全能助手", "只干一件事的窄版本", "带界面的完整产品", "能对话的机器人"], "a": 1, "why": "窄版本能快速验证，功能多反而没人用。"}, {"q": "最小可用版本的验收方式是？", "opts": ["演示好看", "拿真实输入跑，看对几条", "代码量多少", "上线时间"], "a": 1, "why": "真实输入上的正确率才是唯一标准。"}], "vslides": [{"t": "最小可用 = 只干一件事", "n": "最小可用 = 一个真实输入、一个真实输出、中间只有必要步骤 第一版不要做「全能助手」，做一个「只干一件事」的窄版本 验收方式是：拿 20 条真实输入跑一遍，看对几条", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">最小可用 = 只干一件事</tspan></text><g data-k=\"一个真实输入\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">一个真实输入</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">别用示例数据</tspan></text></g><g data-k=\"一段固定流程\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">一段固定流程</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不超过三步</tspan></text></g><g data-k=\"一个产出\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">一个产出</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">别人能直接用</tspan></text></g></svg>", "d": 16.8}, {"t": "第一版别做全能", "n": "最小可用 = 一个真实输入、一个真实输出、中间只有必要步骤 第一版不要做「全能助手」，做一个「只干一件事」的窄版本 验收方式是：拿 20 条真实输入跑一遍，看对几条", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">第一版别做全能</tspan></text><g data-k=\"12 个功能\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">12 个功能</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">没人会用</tspan></text></g><g data-k=\"砍到 1 个\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">砍到 1 个</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">一周 30 人在用</tspan></text></g><g data-k=\"先窄后宽\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">先窄后宽</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">是唯一路径</tspan></text></g></svg>", "d": 16.8}, {"t": "验收方式", "n": "最小可用 = 一个真实输入、一个真实输出、中间只有必要步骤 第一版不要做「全能助手」，做一个「只干一件事」的窄版本 验收方式是：拿 20 条真实输入跑一遍，看对几条", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">验收方式</tspan></text><g data-k=\"拿 5 条真实输入\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">拿 5 条真实输入</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">跑一遍</tspan></text></g><g data-k=\"对了几条\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">对了几条</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">就是当前水平</tspan></text></g><g data-k=\"错的那条\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">错的那条</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">是最有价值的发现</tspan></text></g></svg>", "d": 16.8}, {"t": "小结", "n": "最小可用 = 一个真实输入、一个真实输出、中间只有必要步骤 第一版不要做「全能助手」，做一个「只干一件事」的窄版本 验收方式是：拿 20 条真实输入跑一遍，看对几条", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"功能超过三条\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">功能超过三条</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">说明没砍够</tspan></text></g><g data-k=\"给真实用户用一次\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">给真实用户用一次</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">比内部演示十次有用</tspan></text></g></svg>", "d": 16.8}]}, {"id": "M4U4", "tier": "adv", "step": "demo", "title": "人机分工与人工确认点", "video": {"dur": "4.8min", "script": ["哪些结论必须人来签：涉及钱、涉及对外、涉及人身与合规", "确认点要设计成「一眼能判断」：给出依据，人只做是/否", "没有确认点的方案，一线不敢用；确认点太多的方案，一线不想用"]}, "ppt": {"method": "三色分区：自动通过 / 建议人工 / 必须人工", "case": "某审批助手把「必须人工」的金额设成 5 万，结果 90% 单据都要人看，等于没做", "demo": "现场给一个流程标三色：哪些自动、哪些建议、哪些必须人工"}, "objective": "能为一个流程设计人机分工，并给出确认点的判定依据", "transfer": "把三色分区拿给一线看，问他「这样你敢用吗」", "deliverable": {"type": "document", "name": "人机分工三色图", "rubric": ["三色分区清楚", "确认点可判断", "比例合理"], "acceptance": "能产出《人机分工三色图》并通过本单元评分要点"}, "task": "画三色：自动通过的条件、建议人工的条件、必须人工的条件；最后写各类占比估算。", "brief": "自动通过的比例低于一半，说明阈值设得太保守，方案价值会打折。", "template": "【人机分工三色图】\n自动通过（条件 + 预估占比）：\n建议人工（条件 + 给什么依据）：\n必须人工（条件 + 谁签）：", "exemplar": "自动通过：金额 ≤ 2000 且票据齐全且无异常标记（预估 62%）。\n建议人工：金额 2000–10000 或有一项异常（预估 31%），给出异常依据，审核员一键确认。\n必须人工：金额 > 10000 或涉敏感科目（预估 7%），财务主管签字。", "quiz": [{"q": "「必须人工」的范围设得过大，会导致？", "opts": ["更安全", "绝大多数都要人看，等于没提效", "成本更低", "审计更严"], "a": 1, "why": "提效来自自动通过比例；范围过大就没有价值。"}, {"q": "确认点设计成「一眼能判断」，最关键的是？", "opts": ["界面漂亮", "同时给出判定依据，人只做是/否", "加审批层级", "多写说明文字"], "a": 1, "why": "给人依据，才能快速判断；否则等于把活又推回给人。"}], "vslides": [{"t": "哪些必须人来签", "n": "哪些结论必须人来签：涉及钱、涉及对外、涉及人身与合规 确认点要设计成「一眼能判断」：给出依据，人只做是/否 没有确认点的方案，一线不敢用；确认点太多的方案，一线不想用", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">哪些必须人来签</tspan></text><g data-k=\"涉及钱\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">涉及钱</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">付款、减免、退款</tspan></text></g><g data-k=\"涉及对外\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">涉及对外</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">发客户、发监管</tspan></text></g><g data-k=\"涉及人身与合规\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">涉及人身与合规</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">一律人签</tspan></text></g></svg>", "d": 17.0}, {"t": "确认点要一眼能判断", "n": "哪些结论必须人来签：涉及钱、涉及对外、涉及人身与合规 确认点要设计成「一眼能判断」：给出依据，人只做是/否 没有确认点的方案，一线不敢用；确认点太多的方案，一线不想用", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">确认点要一眼能判断</tspan></text><g data-k=\"给依据\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">给依据</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">为什么标红</tspan></text></g><g data-k=\"只做是/否\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">只做是/否</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不要再让人重算</tspan></text></g><g data-k=\"太多确认点\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">太多确认点</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">一线干脆绕开</tspan></text></g></svg>", "d": 17.0}, {"t": "三色分区", "n": "哪些结论必须人来签：涉及钱、涉及对外、涉及人身与合规 确认点要设计成「一眼能判断」：给出依据，人只做是/否 没有确认点的方案，一线不敢用；确认点太多的方案，一线不想用", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">三色分区</tspan></text><g data-k=\"自动通过\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">自动通过</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">条件明确、风险低</tspan></text></g><g data-k=\"建议人工\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">建议人工</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">给依据，一键确认</tspan></text></g><g data-k=\"必须人工\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">必须人工</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">范围要小</tspan></text></g></svg>", "d": 17.0}, {"t": "小结", "n": "哪些结论必须人来签：涉及钱、涉及对外、涉及人身与合规 确认点要设计成「一眼能判断」：给出依据，人只做是/否 没有确认点的方案，一线不敢用；确认点太多的方案，一线不想用", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"自动通过低于一半\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">自动通过低于一半</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">方案价值打折</tspan></text></g><g data-k=\"没有确认点\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">没有确认点</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">一线不敢用</tspan></text></g></svg>", "d": 17.0}]}, {"id": "M4U5", "tier": "adv", "step": "todo", "title": "评测集：先建 20 条真实样本再动手", "video": {"dur": "5.0min", "script": ["没有评测集，好坏只能凭感觉；有了评测集，每次改动都能对比", "20 条起步就够，但必须真实、覆盖不同难度、有人工标注的正确答案", "评测集要能持续加：每次线上发现新错例，就补进去"]}, "ppt": {"method": "评测集三要素：真实样本 / 标准答案 / 难度分层", "case": "某项目改了三版模型，每版都说「感觉好点了」，直到建了评测集才发现第二版更差", "demo": "现场从历史数据里挑 20 条，人工写出正确答案"}, "objective": "能建一份 20 条起步的评测集，并说明怎么持续扩充", "transfer": "用这 20 条跑一遍当前版本，记录准确率作为基线", "deliverable": {"type": "sheet", "name": "评测集 v1", "rubric": ["20 条真实样本", "有标准答案", "有难度分层"], "acceptance": "能产出《评测集 v1》并通过本单元评分要点"}, "task": "建表：样本编号 / 输入 / 标准答案 / 难度 / 当前输出 / 是否通过。先跑 20 条。", "brief": "难度分层至少两档：典型样本与边界样本，否则准确率会虚高。", "template": "【评测集 v1】\n编号 | 输入摘要 | 标准答案 | 难度（典型/边界） | 当前输出 | 通过？\n\n当前准确率：__/20\n下一步补的样本类型：", "exemplar": "001 | 差旅报销 住宿 800 上海 总监 | 合规 | 典型 | 合规 | 通过\n002 | 差旅报销 住宿 800 上海 专员 | 超标（限额 600） | 边界 | 超标 | 通过\n003 | 报销 无票据 金额 300 | 需补票据 | 典型 | 需补票据 | 通过\n…共 20 条，通过 15 条，准确率 75%。\n下一步补：跨月报销、外币报销两类。", "quiz": [{"q": "为什么必须先建评测集再改进？", "opts": ["方便汇报", "没有基线就无法判断改动是变好还是变差", "客户要求", "能少测几次"], "a": 1, "why": "凭感觉改版，常见结果是越改越差而不自知。"}, {"q": "20 条样本里如果全是典型样本，会怎样？", "opts": ["准确率虚高", "更严谨", "没有影响", "更容易过审"], "a": 0, "why": "缺边界样本，上线后一遇例外就暴露。"}], "vslides": [{"t": "没有评测集只能靠感觉", "n": "没有评测集，好坏只能凭感觉；有了评测集，每次改动都能对比 20 条起步就够，但必须真实、覆盖不同难度、有人工标注的正确答案 评测集要能持续加：每次线上发现新错例，就补进去", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">没有评测集只能靠感觉</tspan></text><g data-k=\"改了三版\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">改了三版</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">都说感觉好点</tspan></text></g><g data-k=\"建了评测集\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">建了评测集</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">发现第二版更差</tspan></text></g><g data-k=\"有基线\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">有基线</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">才能比较</tspan></text></g></svg>", "d": 17.4}, {"t": "20 条起步就够", "n": "没有评测集，好坏只能凭感觉；有了评测集，每次改动都能对比 20 条起步就够，但必须真实、覆盖不同难度、有人工标注的正确答案 评测集要能持续加：每次线上发现新错例，就补进去", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">20 条起步就够</tspan></text><g data-k=\"真实样本\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">真实样本</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">从历史数据里挑</tspan></text></g><g data-k=\"标准答案\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">标准答案</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">人工写</tspan></text></g><g data-k=\"难度分层\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">难度分层</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">典型 + 边界</tspan></text></g></svg>", "d": 17.4}, {"t": "评测集要能长大", "n": "没有评测集，好坏只能凭感觉；有了评测集，每次改动都能对比 20 条起步就够，但必须真实、覆盖不同难度、有人工标注的正确答案 评测集要能持续加：每次线上发现新错例，就补进去", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">评测集要能长大</tspan></text><g data-k=\"线上发现错例\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">线上发现错例</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">就补进去</tspan></text></g><g data-k=\"覆盖新类型\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">覆盖新类型</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">就加样本</tspan></text></g><g data-k=\"版本化管理\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">版本化管理</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">每次改动可回溯</tspan></text></g></svg>", "d": 17.4}, {"t": "小结", "n": "没有评测集，好坏只能凭感觉；有了评测集，每次改动都能对比 20 条起步就够，但必须真实、覆盖不同难度、有人工标注的正确答案 评测集要能持续加：每次线上发现新错例，就补进去", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"先建基线再优化\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">先建基线再优化</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">否则越改越差</tspan></text></g><g data-k=\"全典型样本\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">全典型样本</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">准确率会虚高</tspan></text></g></svg>", "d": 17.4}]}, {"id": "M4U6", "tier": "adv", "step": "todo", "title": "4 小时跑通一个闭环", "video": {"dur": "4.6min", "script": ["闭环的意思是：从真实输入进来，到产出被真实用户接收，中间不断", "4 小时不是做完整个项目，是验证「这条路走得通」", "跑通之后要留下三样：流程说明、评测基线、下一步清单"]}, "ppt": {"method": "闭环四步：拿真输入 / 跑完 / 给人看 / 记下断点", "case": "某团队做了三个月方案，第一次给真实用户看才发现，输出格式他们根本用不了", "demo": "现场安排一次 4 小时闭环，限定只用一个真实任务"}, "objective": "能组织并完成一次 4 小时闭环，输出断点清单与下一步", "transfer": "本周内约一个真实用户，把闭环跑一次，别等方案完美", "deliverable": {"type": "document", "name": "闭环记录", "rubric": ["用了真实输入", "真实用户看过", "记下断点"], "acceptance": "能产出《闭环记录》并通过本单元评分要点"}, "task": "写记录：输入是什么、跑到哪一步、用户说了什么、断点在哪、下一步做什么。", "brief": "断点清单比成功更重要；跑通一次的价值在于发现哪里会断。", "template": "【闭环记录】\n真实输入：\n跑到哪一步：\n真实用户反馈（原话）：\n断点：\n下一步（≤3 条）：", "exemplar": "真实输入：昨天 30 张真实工单。\n跑到哪：自动分类完成，写回系统失败（字段长度限制）。\n用户反馈：「能标出来就行，我自己改。」\n断点：系统字段只支持 10 字，标签超长。\n下一步：① 标签改简写 ② 与 IT 确认字段限制 ③ 周五再跑一次。", "quiz": [{"q": "4 小时闭环的核心目的是？", "opts": ["做完整个项目", "验证这条路走不走得通，找出断点", "拿到验收", "展示成果"], "a": 1, "why": "闭环是探路，不是交付；断点清单才是产出。"}, {"q": "第一次给真实用户看的最佳时机是？", "opts": ["方案完美之后", "能跑通一段之后立刻", "上线之后", "合同签完"], "a": 1, "why": "越早看到真实反馈，返工成本越低。"}], "vslides": [{"t": "闭环是从输入到被接收", "n": "闭环的意思是：从真实输入进来，到产出被真实用户接收，中间不断 4 小时不是做完整个项目，是验证「这条路走得通」 跑通之后要留下三样：流程说明、评测基线、下一步清单", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">闭环是从输入到被接收</tspan></text><g data-k=\"真实输入\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">真实输入</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不是造的数据</tspan></text></g><g data-k=\"跑完全程\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">跑完全程</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不停在中途</tspan></text></g><g data-k=\"真实用户接收\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">真实用户接收</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">他说能不能用</tspan></text></g></svg>", "d": 16.6}, {"t": "4 小时不是做完项目", "n": "闭环的意思是：从真实输入进来，到产出被真实用户接收，中间不断 4 小时不是做完整个项目，是验证「这条路走得通」 跑通之后要留下三样：流程说明、评测基线、下一步清单", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">4 小时不是做完项目</tspan></text><g data-k=\"是验证路走不走得通\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">是验证路走不走得通</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不是交付</tspan></text></g><g data-k=\"断点清单\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">断点清单</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">才是主要产出</tspan></text></g><g data-k=\"下一步 ≤3 条\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">下一步 ≤3 条</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">别列一堆</tspan></text></g></svg>", "d": 16.6}, {"t": "跑通后留下三样", "n": "闭环的意思是：从真实输入进来，到产出被真实用户接收，中间不断 4 小时不是做完整个项目，是验证「这条路走得通」 跑通之后要留下三样：流程说明、评测基线、下一步清单", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">跑通后留下三样</tspan></text><g data-k=\"流程说明\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">流程说明</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">别人能照做</tspan></text></g><g data-k=\"评测基线\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">评测基线</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">能对比</tspan></text></g><g data-k=\"下一步清单\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">下一步清单</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">下周做什么</tspan></text></g></svg>", "d": 16.6}, {"t": "小结", "n": "闭环的意思是：从真实输入进来，到产出被真实用户接收，中间不断 4 小时不是做完整个项目，是验证「这条路走得通」 跑通之后要留下三样：流程说明、评测基线、下一步清单", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"越早给真实用户看\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">越早给真实用户看</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">返工越少</tspan></text></g><g data-k=\"断点比成功重要\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">断点比成功重要</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">它告诉你哪里会崩</tspan></text></g></svg>", "d": 16.6}]}]}, {"id": "M5", "title": "M5 交付：做成，且验得动", "dims": ["workflow", "strategy", "content"], "units": [{"id": "M5U1", "tier": "basic", "step": "understand", "title": "PEV 交付闭环：计划—执行—验证", "video": {"dur": "4.8min", "script": ["P 是计划：这轮要达成什么、怎么算成；E 是执行：按计划做；V 是验证：拿证据对照计划", "三段缺一段就会失控：缺 P 会跑偏，缺 V 会说不清做成没有", "每一轮都短：一周一轮，比三个月一大轮更容易纠偏"]}, "ppt": {"method": "PEV 三段表：计划 / 执行 / 验证，各写一条可核对的东西", "case": "某项目三个月没设验证点，交付时客户说「这不是我要的」，双方都拿不出中间证据", "demo": "现场给本周写一个 PEV 三段"}, "objective": "能用 PEV 组织一次短周期交付，并给出可核对的验证证据", "transfer": "给下周写一个 PEV，验证段写清「拿什么证据、谁看」", "deliverable": {"type": "document", "name": "PEV 周计划", "rubric": ["计划有验收标准", "执行有产出", "验证有证据与看的人"], "acceptance": "能产出《PEV 周计划》并通过本单元评分要点"}, "task": "写三段：本周计划（含算成标准）、执行步骤、验证证据与看的人。", "brief": "验证段不许写「基本达成」，要写具体证据。", "template": "【PEV 周计划】\nP 计划（本周达成 + 算成标准）：\nE 执行（三步）：\nV 验证（证据 + 谁看）：", "exemplar": "P：把工单分类准确率从 75% 提到 85%，用 40 条评测集验证。\nE：① 补 20 条边界样本 ② 调整分类枚举 ③ 重跑评测。\nV：40 条评测集跑分 + 售后主管看错例清单并签字。", "quiz": [{"q": "PEV 里最容易被跳过、但决定成败的是哪一段？", "opts": ["计划", "执行", "验证", "汇报"], "a": 2, "why": "没有验证，就无法证明做成，也无法及时纠偏。"}, {"q": "「验证」段的证据应该是什么样？", "opts": ["基本达成", "客户反馈不错", "40 条评测集跑分 + 具体错例清单", "大家都很努力"], "a": 2, "why": "可回放、可核对的数据才算证据。"}], "vslides": [{"t": "PEV 三段", "n": "P 是计划：这轮要达成什么、怎么算成；E 是执行：按计划做；V 是验证：拿证据对照计划 三段缺一段就会失控：缺 P 会跑偏，缺 V 会说不清做成没有 每一轮都短：一周一轮，比三个月一大轮更容易纠偏", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">PEV 三段</tspan></text><g data-k=\"P 计划\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">P 计划</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">达成什么、怎么算成</tspan></text></g><g data-k=\"E 执行\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">E 执行</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">按计划做</tspan></text></g><g data-k=\"V 验证\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">V 验证</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">拿证据对照计划</tspan></text></g></svg>", "d": 20.1}, {"t": "缺一段就失控", "n": "P 是计划：这轮要达成什么、怎么算成；E 是执行：按计划做；V 是验证：拿证据对照计划 三段缺一段就会失控：缺 P 会跑偏，缺 V 会说不清做成没有 每一轮都短：一周一轮，比三个月一大轮更容易纠偏", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">缺一段就失控</tspan></text><g data-k=\"缺 P\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">缺 P</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">跑偏</tspan></text></g><g data-k=\"缺 V\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">缺 V</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">说不清做成没有</tspan></text></g><g data-k=\"三段齐\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">三段齐</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">每周可纠偏</tspan></text></g></svg>", "d": 20.1}, {"t": "周期要短", "n": "P 是计划：这轮要达成什么、怎么算成；E 是执行：按计划做；V 是验证：拿证据对照计划 三段缺一段就会失控：缺 P 会跑偏，缺 V 会说不清做成没有 每一轮都短：一周一轮，比三个月一大轮更容易纠偏", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">周期要短</tspan></text><g data-k=\"一周一轮\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">一周一轮</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">容易纠偏</tspan></text></g><g data-k=\"三个月一大轮\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">三个月一大轮</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">发现时已晚</tspan></text></g><g data-k=\"每轮留证据\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">每轮留证据</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">可回溯</tspan></text></g></svg>", "d": 20.1}, {"t": "小结", "n": "P 是计划：这轮要达成什么、怎么算成；E 是执行：按计划做；V 是验证：拿证据对照计划 三段缺一段就会失控：缺 P 会跑偏，缺 V 会说不清做成没有 每一轮都短：一周一轮，比三个月一大轮更容易纠偏", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"验证段不写基本达成\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">验证段不写基本达成</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">要写证据</tspan></text></g><g data-k=\"每周 PEV\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">每周 PEV</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">比季度汇报有用</tspan></text></g></svg>", "d": 20.1}]}, {"id": "M5U2", "tier": "basic", "step": "understand", "title": "验收标准：什么样的结果算通过", "video": {"dur": "4.6min", "script": ["验收标准要在开工前写，不能交付时补；补出来的标准一定吵架", "好的标准有三个特征：有基线、有目标值、有判定方式", "「客户满意」不是标准，「错分率 ≤10% 且主管抽检 50 张认可」才是"]}, "ppt": {"method": "三段式：基线 / 目标 / 判定方式", "case": "某项目验收时客户说「感觉不够智能」，因为合同里只写了「满足业务需求」", "demo": "现场把一句模糊验收要求改写成三段式"}, "objective": "能把模糊的验收要求改写成有基线、目标值与判定方式的标准", "transfer": "拿你正在做的项目，写一份三段式验收标准，发给客户确认", "deliverable": {"type": "document", "name": "验收标准卡", "rubric": ["有基线", "有目标值", "有判定方式与签字人"], "acceptance": "能产出《验收标准卡》并通过本单元评分要点"}, "task": "写三段：现在什么水平（基线）、做到什么算通过（目标）、谁来怎么判定（判定方式）。", "brief": "判定方式要写清样本从哪来、谁抽检、抽多少。", "template": "【验收标准卡】\n基线（现在）：\n目标（通过线）：\n判定方式（样本 / 谁 / 多少）：\n未达标的处理：", "exemplar": "基线：错分率 28%（按上月 1200 张统计）。\n目标：错分率 ≤10%，且连续两周稳定。\n判定：取 200 张历史工单回测 + 主管抽检 50 张；由售后主管签字。\n未达标：两周内整改后复测，仍不达标按比例调整服务费。", "quiz": [{"q": "验收标准最晚要在什么时候写？", "opts": ["交付时", "开工前", "验收会上", "合同谈判时不必写"], "a": 1, "why": "开工前写才有约束力；交付时补标准必然扯皮。"}, {"q": "下面哪条是可用的验收标准？", "opts": ["满足业务需求", "客户满意", "错分率 ≤10%，200 张回测 + 主管抽检 50 张", "系统运行稳定"], "a": 2, "why": "有目标值、有判定方式，才能判定通过与否。"}], "vslides": [{"t": "标准要在开工前写", "n": "验收标准要在开工前写，不能交付时补；补出来的标准一定吵架 好的标准有三个特征：有基线、有目标值、有判定方式 「客户满意」不是标准，「错分率 ≤10% 且主管抽检 50 张认可」才是", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">标准要在开工前写</tspan></text><g data-k=\"交付时补\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">交付时补</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">一定吵架</tspan></text></g><g data-k=\"开工前定\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">开工前定</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">才有约束</tspan></text></g><g data-k=\"双方签字\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">双方签字</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">才作数</tspan></text></g></svg>", "d": 18.4}, {"t": "好的标准三个特征", "n": "验收标准要在开工前写，不能交付时补；补出来的标准一定吵架 好的标准有三个特征：有基线、有目标值、有判定方式 「客户满意」不是标准，「错分率 ≤10% 且主管抽检 50 张认可」才是", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">好的标准三个特征</tspan></text><g data-k=\"有基线\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">有基线</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">现在什么水平</tspan></text></g><g data-k=\"有目标值\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">有目标值</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">做到多少算通过</tspan></text></g><g data-k=\"有判定方式\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">有判定方式</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">谁怎么验</tspan></text></g></svg>", "d": 18.4}, {"t": "不能用的标准", "n": "验收标准要在开工前写，不能交付时补；补出来的标准一定吵架 好的标准有三个特征：有基线、有目标值、有判定方式 「客户满意」不是标准，「错分率 ≤10% 且主管抽检 50 张认可」才是", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">不能用的标准</tspan></text><g data-k=\"满足业务需求\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">满足业务需求</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">无法判定</tspan></text></g><g data-k=\"客户满意\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">客户满意</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">无法核对</tspan></text></g><g data-k=\"感觉不够智能\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">感觉不够智能</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">这是结论不是标准</tspan></text></g></svg>", "d": 18.4}, {"t": "小结", "n": "验收标准要在开工前写，不能交付时补；补出来的标准一定吵架 好的标准有三个特征：有基线、有目标值、有判定方式 「客户满意」不是标准，「错分率 ≤10% 且主管抽检 50 张认可」才是", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"基线 + 目标 + 判定\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">基线 + 目标 + 判定</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">三段缺一不可</tspan></text></g><g data-k=\"写清样本与签字人\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">写清样本与签字人</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">避免验收扯皮</tspan></text></g></svg>", "d": 18.4}]}, {"id": "M5U3", "tier": "adv", "step": "demo", "title": "L0–L4 成熟度框架", "video": {"dur": "4.8min", "script": ["成熟度分五级：L0 没开始、L1 有 Demo、L2 有人用、L3 进流程、L4 可复制", "多数项目停在 L1：Demo 很好看，没人真的用", "每一级都有明确的跃迁条件，说不清条件的，就是没到那一级"]}, "ppt": {"method": "五级跃迁条件表：每级写「到达标志」", "case": "某客户自称「已实现 AI 落地」，一问发现只有两个 Demo，实际在 L1", "demo": "现场给自己项目定级，并写清下一步跃迁条件"}, "objective": "能判断一个项目处在 L0–L4 哪一级，并说出下一级的跃迁条件", "transfer": "问客户一个问题：「现在有多少人每周至少用一次」，用答案定级", "deliverable": {"type": "document", "name": "成熟度定级卡", "rubric": ["定级有依据", "写出跃迁条件", "下一步明确"], "acceptance": "能产出《成熟度定级卡》并通过本单元评分要点"}, "task": "写定级：现在第几级、依据是什么、下一级要满足什么条件。", "brief": "定级看行为不看声明：有人每周用，才算 L2。", "template": "【成熟度定级卡】\n当前级别：L__\n依据（谁在用、多久用一次）：\n下一级：L__\n跃迁条件（可核对）：", "exemplar": "当前：L2。依据：售后 12 人中有 8 人每天用分类结果，持续三周。\n下一级：L3。\n跃迁条件：分类结果进入派单流程，派单员不再手工改标签，且月度错分率稳定在 10% 以下。", "quiz": [{"q": "Demo 很好看但没人真的用，处在哪一级？", "opts": ["L0", "L1", "L2", "L3"], "a": 1, "why": "有 Demo 无人用是 L1；有人每周用才到 L2。"}, {"q": "定级最该看什么？", "opts": ["客户怎么说", "实际行为（谁在用、多久一次）", "投入多少钱", "技术多先进"], "a": 1, "why": "成熟度是行为指标，不是声明指标。"}], "vslides": [{"t": "五级成熟度", "n": "成熟度分五级：L0 没开始、L1 有 Demo、L2 有人用、L3 进流程、L4 可复制 多数项目停在 L1：Demo 很好看，没人真的用 每一级都有明确的跃迁条件，说不清条件的，就是没到那一级", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">五级成熟度</tspan></text><g data-k=\"L1 有 Demo\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">L1 有 Demo</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">好看但没人用</tspan></text></g><g data-k=\"L2 有人用\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">L2 有人用</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">每周真的在用</tspan></text></g><g data-k=\"L3 进流程\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">L3 进流程</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">成为必需环节</tspan></text></g></svg>", "d": 19.9}, {"t": "多数停在 L1", "n": "成熟度分五级：L0 没开始、L1 有 Demo、L2 有人用、L3 进流程、L4 可复制 多数项目停在 L1：Demo 很好看，没人真的用 每一级都有明确的跃迁条件，说不清条件的，就是没到那一级", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">多数停在 L1</tspan></text><g data-k=\"Demo 很好看\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">Demo 很好看</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">演示完就结束</tspan></text></g><g data-k=\"没人真的用\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">没人真的用</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">使用率个位数</tspan></text></g><g data-k=\"能复制才到 L4\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">能复制才到 L4</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">换个对象就能用</tspan></text></g></svg>", "d": 19.9}, {"t": "定级看行为", "n": "成熟度分五级：L0 没开始、L1 有 Demo、L2 有人用、L3 进流程、L4 可复制 多数项目停在 L1：Demo 很好看，没人真的用 每一级都有明确的跃迁条件，说不清条件的，就是没到那一级", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">定级看行为</tspan></text><g data-k=\"问有多少人每周用\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">问有多少人每周用</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">答案决定级别</tspan></text></g><g data-k=\"不看声明\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">不看声明</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">看后台数据</tspan></text></g><g data-k=\"跃迁要条件\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">跃迁要条件</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">写清可核对</tspan></text></g></svg>", "d": 19.9}, {"t": "小结", "n": "成熟度分五级：L0 没开始、L1 有 Demo、L2 有人用、L3 进流程、L4 可复制 多数项目停在 L1：Demo 很好看，没人真的用 每一级都有明确的跃迁条件，说不清条件的，就是没到那一级", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"自己说落地不算\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">自己说落地不算</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">有人每周用才算</tspan></text></g><g data-k=\"每级写跃迁条件\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">每级写跃迁条件</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">否则永远说不清</tspan></text></g></svg>", "d": 19.9}]}, {"id": "M5U4", "tier": "adv", "step": "demo", "title": "范围控制四纪律", "video": {"dur": "4.6min", "script": ["交付期最常见的死法：需求不断加，每加一个都要重新验证", "四纪律：新需求进池不插队、变更要换（时间或范围）、每周固定复盘范围、书面确认", "「顺手加个小功能」是范围失控的典型开场"]}, "ppt": {"method": "四纪律清单 + 一句标准回复话术", "case": "某项目原定 6 周，因不断加需求做了 5 个月，最后预算超支被审计", "demo": "现场准备一句「加需求时怎么回」的话术，不带情绪"}, "objective": "能用四条纪律守住交付范围，并有一句可复用的回复话术", "transfer": "下次有人提新需求时，用这句话术回一次，记录对方反应", "deliverable": {"type": "document", "name": "范围纪律卡", "rubric": ["四条纪律都写", "有回复话术", "有变更换法"], "acceptance": "能产出《范围纪律卡》并通过本单元评分要点"}, "task": "写四条纪律 + 一句标准回复；再写「如果一定要加，砍掉哪个」。", "brief": "回复时永远给选项，不要只说「不行」。", "template": "【范围纪律卡】\n① 新需求进池不插队：\n② 变更要换（加时间或减范围）：\n③ 每周固定复盘范围：\n④ 书面确认：\n标准回复：「这个可以做，但需要 ___，你看是加两周，还是把 ___ 放到下一期？」", "exemplar": "① 新需求统一进需求池，每周五评审一次，不在会上直接答应。\n② 加功能必须换：要么工期加两周，要么把「批量导入」延到二期。\n③ 每周五与客户过一遍范围清单，双方签字。\n④ 所有变更邮件确认，口头不算。\n话术：「这个可以做，但需要多两周联调，你看是加两周，还是把批量导入放到二期？」", "quiz": [{"q": "交付期有人提「顺手加个小功能」，最好的回应是？", "opts": ["直接答应，维护关系", "直接拒绝", "给选项：加时间或换范围", "先做着看"], "a": 2, "why": "给选项既保住关系，也守住范围。"}, {"q": "范围失控最典型的信号是？", "opts": ["需求变更没有书面确认", "代码变多", "会议变多", "测试变慢"], "a": 0, "why": "口头变更无法追溯，最后都变成你的责任。"}], "vslides": [{"t": "交付期最常见的死法", "n": "交付期最常见的死法：需求不断加，每加一个都要重新验证 四纪律：新需求进池不插队、变更要换（时间或范围）、每周固定复盘范围、书面确认 「顺手加个小功能」是范围失控的典型开场", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">交付期最常见的死法</tspan></text><g data-k=\"需求不断加\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">需求不断加</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">每个都要重验</tspan></text></g><g data-k=\"工期被吃光\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">工期被吃光</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">最后超支</tspan></text></g><g data-k=\"顺手加个小功能\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">顺手加个小功能</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">失控的典型开场</tspan></text></g></svg>", "d": 17.4}, {"t": "四条纪律", "n": "交付期最常见的死法：需求不断加，每加一个都要重新验证 四纪律：新需求进池不插队、变更要换（时间或范围）、每周固定复盘范围、书面确认 「顺手加个小功能」是范围失控的典型开场", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">四条纪律</tspan></text><g data-k=\"进池不插队\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">进池不插队</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">每周统一评审</tspan></text></g><g data-k=\"变更要换\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">变更要换</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">加时间或减范围</tspan></text></g><g data-k=\"书面确认\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">书面确认</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">口头不算</tspan></text></g></svg>", "d": 17.4}, {"t": "一句话守住范围", "n": "交付期最常见的死法：需求不断加，每加一个都要重新验证 四纪律：新需求进池不插队、变更要换（时间或范围）、每周固定复盘范围、书面确认 「顺手加个小功能」是范围失控的典型开场", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">一句话守住范围</tspan></text><g data-k=\"给选项不给拒绝\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">给选项不给拒绝</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">加两周还是减一项</tspan></text></g><g data-k=\"态度不变\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">态度不变</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">只谈交换</tspan></text></g><g data-k=\"记录每次变更\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">记录每次变更</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">事后可查</tspan></text></g></svg>", "d": 17.4}, {"t": "小结", "n": "交付期最常见的死法：需求不断加，每加一个都要重新验证 四纪律：新需求进池不插队、变更要换（时间或范围）、每周固定复盘范围、书面确认 「顺手加个小功能」是范围失控的典型开场", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"只说不行\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">只说不行</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">关系会僵</tspan></text></g><g data-k=\"只答应不换\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">只答应不换</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">项目会死</tspan></text></g></svg>", "d": 17.4}]}, {"id": "M5U5", "tier": "adv", "step": "todo", "title": "Land and Expand：从一个场景到一类场景", "video": {"dur": "4.8min", "script": ["第一个场景交付成功后，最容易犯的错是「马上开五个新场景」", "正确做法是从一个场景抽象出一类场景：同一套规则、同一批评测集、同一批人", "可复制的标志：换个业务对象，只改数据和枚举，不改流程"]}, "ppt": {"method": "复制三问：同一套规则能用吗 / 评测集能复用吗 / 谁能接手", "case": "某团队第一个审核场景成功后立刻铺 5 个，结果每个都从零做，全部拖期", "demo": "现场写清「这个场景能复制到哪三类对象上」"}, "objective": "能从已交付场景中提炼可复制的模式，并给出下一个场景的选择依据", "transfer": "把你的场景抽象成一句话模板，看能套到几个对象上", "deliverable": {"type": "document", "name": "可复制模式卡", "rubric": ["抽象出一句话模板", "列出可套用的对象", "写清要改什么"], "acceptance": "能产出《可复制模式卡》并通过本单元评分要点"}, "task": "写模板：一句话说清这类场景；列出 3 个可套用对象；写清每个要改的数据与枚举。", "brief": "如果每换一个对象都要重写流程，说明还没抽象出来。", "template": "【可复制模式卡】\n一句话模板：把 ___ 按 ___ 规则判定，输出 ___。\n可套用对象：① ② ③\n每个要改的：数据 / 枚举 / 验收人", "exemplar": "模板：把「单据」按「费用标准规则」判定，输出「合规 / 超标 / 需补材料」。\n可套用：① 差旅报销 ② 采购申请 ③ 招待费用。\n要改的：数据来源（三套系统）、枚举值（三类标准）、验收人（财务/采购/行政主管）。", "quiz": [{"q": "第一个场景成功后，最该做的是？", "opts": ["马上铺开五个新场景", "抽象出一类场景的可复制模式", "扩大团队", "申请更多预算"], "a": 1, "why": "不抽象就复制，等于每个场景从零做。"}, {"q": "判断「可复制」最硬的标志是？", "opts": ["同一套流程能换对象复用，只改数据与枚举", "代码可复用", "客户愿意加钱", "团队有经验了"], "a": 0, "why": "流程不变、只换输入，才是真的抽象出来了。"}], "vslides": [{"t": "别急着铺五个场景", "n": "第一个场景交付成功后，最容易犯的错是「马上开五个新场景」 正确做法是从一个场景抽象出一类场景：同一套规则、同一批评测集、同一批人 可复制的标志：换个业务对象，只改数据和枚举，不改流程", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">别急着铺五个场景</tspan></text><g data-k=\"第一个成功后\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">第一个成功后</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">最容易膨胀</tspan></text></g><g data-k=\"每个从零做\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">每个从零做</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">全部拖期</tspan></text></g><g data-k=\"先抽象\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">先抽象</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">再复制</tspan></text></g></svg>", "d": 18.7}, {"t": "抽象成一句话", "n": "第一个场景交付成功后，最容易犯的错是「马上开五个新场景」 正确做法是从一个场景抽象出一类场景：同一套规则、同一批评测集、同一批人 可复制的标志：换个业务对象，只改数据和枚举，不改流程", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">抽象成一句话</tspan></text><g data-k=\"把 ___ 按 ___ 判定\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">把 ___ 按 ___ 判定</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">输出 ___</tspan></text></g><g data-k=\"换对象只改数据\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">换对象只改数据</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不改流程</tspan></text></g><g data-k=\"评测集可复用\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">评测集可复用</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">才是真抽象</tspan></text></g></svg>", "d": 18.7}, {"t": "复制的三个条件", "n": "第一个场景交付成功后，最容易犯的错是「马上开五个新场景」 正确做法是从一个场景抽象出一类场景：同一套规则、同一批评测集、同一批人 可复制的标志：换个业务对象，只改数据和枚举，不改流程", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">复制的三个条件</tspan></text><g data-k=\"同一套规则能用\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"68.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">同一套规则能用</tspan></text></g><g data-k=\"评测集能复用\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"120.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">评测集能复用</tspan></text></g><g data-k=\"有人能接手\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"172.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">有人能接手</tspan></text></g></svg>", "d": 18.7}, {"t": "小结", "n": "第一个场景交付成功后，最容易犯的错是「马上开五个新场景」 正确做法是从一个场景抽象出一类场景：同一套规则、同一批评测集、同一批人 可复制的标志：换个业务对象，只改数据和枚举，不改流程", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"每换一个对象都要重写\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">每换一个对象都要重写</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">说明没抽象出来</tspan></text></g><g data-k=\"复制不是复制 PPT\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">复制不是复制 PPT</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">是复制流程</tspan></text></g></svg>", "d": 18.7}]}, {"id": "M5U6", "tier": "adv", "step": "todo", "title": "验收报告与复盘会", "video": {"dur": "4.6min", "script": ["验收报告不是成果展示，是「对照开工前标准逐条判定」", "结构：基线 / 目标 / 实测 / 判定 / 遗留问题；每条都要有数据和出处", "复盘会只问三件事：哪做对了、哪做错了、下次改什么"]}, "ppt": {"method": "五段报告 + 三问复盘", "case": "某项目验收报告写了 30 页成果，客户只问一句「当初说的错分率 10% 达到了吗」，答不上来", "demo": "现场用五段结构写一页验收报告"}, "objective": "能写出对照验收标准逐条判定的验收报告，并组织一次三问复盘", "transfer": "把这页报告发给客户，请他逐条确认或提出异议", "deliverable": {"type": "document", "name": "验收报告一页", "rubric": ["五段齐全", "逐条对照", "遗留问题写清"], "acceptance": "能产出《验收报告一页》并通过本单元评分要点"}, "task": "写五段：基线、目标、实测、判定、遗留；每条实测都要写数据来源。", "brief": "遗留问题不要藏，写清比藏着更可信。", "template": "【验收报告一页】\n基线：\n目标：\n实测（数据来源）：\n判定：达标 / 部分达标 / 未达标\n遗留问题与处理：", "exemplar": "基线：错分率 28%（上月 1200 张统计）。\n目标：≤10%，连续两周稳定。\n实测：最近两周 1400 张，错分率 8.6%（系统日志导出）。\n判定：达标。\n遗留：跨类工单仍错 3 成，二期处理；扫描件模糊单据已标记人工。", "quiz": [{"q": "验收报告最核心的部分是？", "opts": ["成果亮点", "对照开工前的标准逐条判定", "团队合影", "技术架构"], "a": 1, "why": "验收是判定，不是展示；标准是开工前定的。"}, {"q": "遗留问题该怎么处理？", "opts": ["不写，避免影响验收", "写清并给出处理计划", "推给客户", "口头说明"], "a": 1, "why": "写清遗留问题反而增加可信度，避免验收后被翻旧账。"}], "vslides": [{"t": "验收报告是判定不是展示", "n": "验收报告不是成果展示，是「对照开工前标准逐条判定」 结构：基线 / 目标 / 实测 / 判定 / 遗留问题；每条都要有数据和出处 复盘会只问三件事：哪做对了、哪做错了、下次改什么", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">验收报告是判定不是展示</tspan></text><g data-k=\"对照开工前标准\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">对照开工前标准</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">逐条判定</tspan></text></g><g data-k=\"每条带数据与出处\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">每条带数据与出处</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">可核对</tspan></text></g><g data-k=\"遗留问题写清\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">遗留问题写清</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">反而更可信</tspan></text></g></svg>", "d": 18.2}, {"t": "五段结构", "n": "验收报告不是成果展示，是「对照开工前标准逐条判定」 结构：基线 / 目标 / 实测 / 判定 / 遗留问题；每条都要有数据和出处 复盘会只问三件事：哪做对了、哪做错了、下次改什么", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">五段结构</tspan></text><g data-k=\"基线 / 目标\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">基线 / 目标</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">开工前定的</tspan></text></g><g data-k=\"实测\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">实测</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">数据来源要写</tspan></text></g><g data-k=\"判定 + 遗留\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">判定 + 遗留</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">达标与否、剩下什么</tspan></text></g></svg>", "d": 18.2}, {"t": "复盘只问三件事", "n": "验收报告不是成果展示，是「对照开工前标准逐条判定」 结构：基线 / 目标 / 实测 / 判定 / 遗留问题；每条都要有数据和出处 复盘会只问三件事：哪做对了、哪做错了、下次改什么", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">复盘只问三件事</tspan></text><g data-k=\"哪做对了\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">哪做对了</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">可复制的</tspan></text></g><g data-k=\"哪做错了\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">哪做错了</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">要改的</tspan></text></g><g data-k=\"下次改什么\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">下次改什么</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">落到动作</tspan></text></g></svg>", "d": 18.2}, {"t": "小结", "n": "验收报告不是成果展示，是「对照开工前标准逐条判定」 结构：基线 / 目标 / 实测 / 判定 / 遗留问题；每条都要有数据和出处 复盘会只问三件事：哪做对了、哪做错了、下次改什么", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"30 页成果不如一条达标\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">30 页成果不如一条达标</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">客户只看标准</tspan></text></g><g data-k=\"藏遗留问题\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">藏遗留问题</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">验收后被翻旧账</tspan></text></g></svg>", "d": 18.2}]}]}, {"id": "M6", "title": "M6 沉淀：把经验变成组织资产", "dims": ["content", "strategy", "workflow"], "units": [{"id": "M6U1", "tier": "basic", "step": "understand", "title": "双向蒸馏：从项目总结到可复用资产", "video": {"dur": "4.8min", "script": ["项目总结写给人看，资产写给别人用；两者不是一回事", "双向蒸馏：向上提炼方法（这类场景怎么做），向下沉淀物料（规则、模板、评测集）", "判断有没有沉淀，看下一个人接手要花多久"]}, "ppt": {"method": "一上一下：方法层 / 物料层", "case": "同一个客户第二年做新场景，团队把去年的资料翻了三小时，最后还是从零开始", "demo": "现场把一个项目拆成「方法」与「物料」两栏"}, "objective": "能把一个项目蒸馏成方法卡与物料包，并说明下一个人能省多少时间", "transfer": "写清你上一个项目留下的东西，别人接手需要多久", "deliverable": {"type": "document", "name": "蒸馏清单", "rubric": ["方法层提炼", "物料层列清", "估算接手时间"], "acceptance": "能产出《蒸馏清单》并通过本单元评分要点"}, "task": "写两栏：这次总结出的方法（3 条以内）、可复用的物料（规则/模板/评测集），再估接手时间。", "brief": "物料要能直接拿去用，不能只是「有这份文档」。", "template": "【蒸馏清单】\n方法层（这类场景怎么做）：\n物料层（可直接用）：规则表 / 模板 / 评测集 / 提示词\n下一个人接手预计耗时：", "exemplar": "方法层：① 先按条款切知识再建评测集 ② 先用规则算超标，模型只判例外 ③ 确认点三色分区。\n物料层：费用标准规则表、20 条评测集、异常说明模板、分类提示词。\n接手预计：半天（读方法卡 + 替换数据）。", "quiz": [{"q": "项目总结与可复用资产的核心差别是？", "opts": ["字数", "一个给人看，一个给别人直接用", "格式", "是否需要领导审"], "a": 1, "why": "资产的标准是「下一个人能直接用」，不是「写得完整」。"}, {"q": "判断沉淀是否有效的标准是？", "opts": ["文档页数", "下一个人接手要花多久", "领导是否表扬", "是否归档"], "a": 1, "why": "接手时间才是沉淀的价值度量。"}], "vslides": [{"t": "总结与资产不是一回事", "n": "项目总结写给人看，资产写给别人用；两者不是一回事 双向蒸馏：向上提炼方法（这类场景怎么做），向下沉淀物料（规则、模板、评测集） 判断有没有沉淀，看下一个人接手要花多久", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">总结与资产不是一回事</tspan></text><g data-k=\"总结写给人看\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">总结写给人看</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">读一遍就完</tspan></text></g><g data-k=\"资产写给别人用\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">资产写给别人用</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">拿去就能跑</tspan></text></g><g data-k=\"判断标准\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">判断标准</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">下一个人花多久接手</tspan></text></g></svg>", "d": 17.0}, {"t": "双向蒸馏", "n": "项目总结写给人看，资产写给别人用；两者不是一回事 双向蒸馏：向上提炼方法（这类场景怎么做），向下沉淀物料（规则、模板、评测集） 判断有没有沉淀，看下一个人接手要花多久", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">双向蒸馏</tspan></text><g data-k=\"向上提炼方法\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">向上提炼方法</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">这类场景怎么做</tspan></text></g><g data-k=\"向下沉淀物料\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">向下沉淀物料</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">规则、模板、评测集</tspan></text></g><g data-k=\"两层都要\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">两层都要</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">缺一层复用得打折</tspan></text></g></svg>", "d": 17.0}, {"t": "接手时间才是度量", "n": "项目总结写给人看，资产写给别人用；两者不是一回事 双向蒸馏：向上提炼方法（这类场景怎么做），向下沉淀物料（规则、模板、评测集） 判断有没有沉淀，看下一个人接手要花多久", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">接手时间才是度量</tspan></text><g data-k=\"半天能接\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">半天能接</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">说明沉淀到位</tspan></text></g><g data-k=\"三小时翻资料\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">三小时翻资料</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">等于没沉淀</tspan></text></g><g data-k=\"从零开始\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">从零开始</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">沉淀失败</tspan></text></g></svg>", "d": 17.0}, {"t": "小结", "n": "项目总结写给人看，资产写给别人用；两者不是一回事 双向蒸馏：向上提炼方法（这类场景怎么做），向下沉淀物料（规则、模板、评测集） 判断有没有沉淀，看下一个人接手要花多久", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"物料要能直接用\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">物料要能直接用</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不是有份文档</tspan></text></g><g data-k=\"方法卡三条以内\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">方法卡三条以内</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">多了没人看</tspan></text></g></svg>", "d": 17.0}]}, {"id": "M6U2", "tier": "basic", "step": "understand", "title": "Skill 沉淀的正确姿势", "video": {"dur": "4.6min", "script": ["Skill 不是提示词合集，是可执行的流程：触发、步骤、产出、边界", "好的 Skill 有验收：用它跑一遍，产出能达到什么标准", "最常见的失败：Skill 里全是「要专业」「要有洞察」这类无法执行的词"]}, "ppt": {"method": "四要素 + 一条验收", "case": "某团队沉淀了 30 个 Skill，常用的只有 3 个，因为其余都太抽象", "demo": "现场把一个抽象 Skill 改写成可执行步骤"}, "objective": "能把个人经验写成带触发、步骤、产出与边界的 Skill", "transfer": "让别人用一次你写的 Skill，看要不要你在旁边解释", "deliverable": {"type": "skill", "name": "可执行 Skill", "rubric": ["触发明确", "步骤可照做", "有边界与验收"], "acceptance": "能产出《可执行 Skill》并通过本单元评分要点"}, "task": "写 Skill：触发 / 步骤（≤5 步）/ 产出 / 不该用时 / 怎么验收。", "brief": "每步都要能回答「交什么」，否则不叫步骤。", "template": "【可执行 Skill】\n名称：\n触发：\n步骤（每步交什么）：\n产出：\n不该用时：\n验收：", "exemplar": "名称：监管简报生成\n触发：收到监管通知或月度报送前\n步骤：① 摘出通知中的硬要求（条款号）→ 清单 ② 对照现有流程标出需改动点 → 差异表 ③ 按模板生成简报 → 一页\n产出：一页简报 + 差异表\n不该用：涉及未公开数据时\n验收：每条要求都有对应改动点，且能指回条款号", "quiz": [{"q": "Skill 里最不该出现的内容是？", "opts": ["步骤", "触发条件", "「要专业」「要有洞察」这类无法执行的词", "边界"], "a": 2, "why": "无法执行的形容词会让 Skill 每次产出都不一样。"}, {"q": "Skill 的验收应该怎么定？", "opts": ["写得完整", "用它跑一遍，产出达到某个可核对的标准", "领导认可", "字数够"], "a": 1, "why": "Skill 的价值在实际产出，验收要对准产出。"}], "vslides": [{"t": "Skill 是可执行流程", "n": "Skill 不是提示词合集，是可执行的流程：触发、步骤、产出、边界 好的 Skill 有验收：用它跑一遍，产出能达到什么标准 最常见的失败：Skill 里全是「要专业」「要有洞察」这类无法执行的词", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">Skill 是可执行流程</tspan></text><g data-k=\"触发\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">触发</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">什么时候用</tspan></text></g><g data-k=\"步骤\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">步骤</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">每步交什么</tspan></text></g><g data-k=\"边界\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">边界</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">什么时候不该用</tspan></text></g></svg>", "d": 20.1}, {"t": "最常见的失败", "n": "Skill 不是提示词合集，是可执行的流程：触发、步骤、产出、边界 好的 Skill 有验收：用它跑一遍，产出能达到什么标准 最常见的失败：Skill 里全是「要专业」「要有洞察」这类无法执行的词", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">最常见的失败</tspan></text><g data-k=\"写满要专业\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">写满要专业</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">每次产出都不一样</tspan></text></g><g data-k=\"写成提示词合集\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">写成提示词合集</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">无法交接</tspan></text></g><g data-k=\"没有验收\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">没有验收</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不知道好坏</tspan></text></g></svg>", "d": 20.1}, {"t": "沉淀前先自问", "n": "Skill 不是提示词合集，是可执行的流程：触发、步骤、产出、边界 好的 Skill 有验收：用它跑一遍，产出能达到什么标准 最常见的失败：Skill 里全是「要专业」「要有洞察」这类无法执行的词", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">沉淀前先自问</tspan></text><g data-k=\"同事不问你能跑吗\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">同事不问你能跑吗</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">能才算写对</tspan></text></g><g data-k=\"产出达标吗\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">产出达标吗</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">有验收标准</tspan></text></g><g data-k=\"换个人会走偏吗\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">换个人会走偏吗</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">边界写清了吗</tspan></text></g></svg>", "d": 20.1}, {"t": "小结", "n": "Skill 不是提示词合集，是可执行的流程：触发、步骤、产出、边界 好的 Skill 有验收：用它跑一遍，产出能达到什么标准 最常见的失败：Skill 里全是「要专业」「要有洞察」这类无法执行的词", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"给同事用一次\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">给同事用一次</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">比自己改十遍有用</tspan></text></g><g data-k=\"无法执行的词\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">无法执行的词</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">一律删掉</tspan></text></g></svg>", "d": 20.1}]}, {"id": "M6U3", "tier": "adv", "step": "demo", "title": "三态溯源与四条红线", "video": {"dur": "4.8min", "script": ["三态：原始材料、加工结论、最终产出；每一样都要能追溯来源", "四条红线：不编数据、不越权定性、不隐瞒不确定、不丢失来源", "沉淀物没有溯源，等于把不可信的东西规模化"]}, "ppt": {"method": "三态链条图：原料 → 加工 → 产出，每段存什么", "case": "某知识库里的结论查不到出处，业务方试用一次后再也没打开", "demo": "现场给一份产出标三态来源"}, "objective": "能为自己的产出设计三态溯源，并说清四条红线怎么落地", "transfer": "检查你现有的一份沉淀物，能不能追到原始材料", "deliverable": {"type": "document", "name": "溯源链条表", "rubric": ["三态齐全", "来源可定位", "红线有落点"], "acceptance": "能产出《溯源链条表》并通过本单元评分要点"}, "task": "写三态：原始材料在哪、加工过程怎么记、产出挂什么标识。", "brief": "溯源的最小单位是「能点回到原文某一段」，不是「有个文档名」。", "template": "【溯源链条表】\n原始材料（存哪 / 版本）：\n加工过程（谁 / 用什么规则）：\n最终产出（挂什么来源标识）：\n四条红线怎么保证：", "exemplar": "原始材料：制度 PDF 存共享盘 /policy/2026，版本号 v3。\n加工：我按条款切片，编号 制度ID-条款号，记录在 sheet。\n产出：每条结论后附「依据：差旅制度 4.3 条」，可点回原文。\n红线：数据只用原文数字；不做合规定性；不确定处标「需核实」；来源链接必填。", "quiz": [{"q": "沉淀物没有溯源，最直接的后果是？", "opts": ["不好看", "业务方不敢用，错了也查不出", "占空间", "加载慢"], "a": 1, "why": "不可溯源就无法建立信任，也无法纠错。"}, {"q": "「不隐瞒不确定」是什么意思？", "opts": ["所有回答都加免责声明", "不确定的地方明确标注需人工核实，而不是编一个答案", "不回答难题", "只说好话"], "a": 1, "why": "标注不确定是可信的表现；编造才是风险。"}], "vslides": [{"t": "三态溯源", "n": "三态：原始材料、加工结论、最终产出；每一样都要能追溯来源 四条红线：不编数据、不越权定性、不隐瞒不确定、不丢失来源 沉淀物没有溯源，等于把不可信的东西规模化", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">三态溯源</tspan></text><g data-k=\"原始材料\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">原始材料</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">存哪、什么版本</tspan></text></g><g data-k=\"加工结论\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">加工结论</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">谁、按什么规则</tspan></text></g><g data-k=\"最终产出\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">最终产出</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">挂什么来源标识</tspan></text></g></svg>", "d": 16.0}, {"t": "四条红线", "n": "三态：原始材料、加工结论、最终产出；每一样都要能追溯来源 四条红线：不编数据、不越权定性、不隐瞒不确定、不丢失来源 沉淀物没有溯源，等于把不可信的东西规模化", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">四条红线</tspan></text><g data-k=\"不编数据\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">不编数据</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">只用原文数字</tspan></text></g><g data-k=\"不越权定性\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">不越权定性</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">合规判断归人</tspan></text></g><g data-k=\"不隐瞒不确定\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">不隐瞒不确定</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">标需核实</tspan></text></g></svg>", "d": 16.0}, {"t": "没有溯源会怎样", "n": "三态：原始材料、加工结论、最终产出；每一样都要能追溯来源 四条红线：不编数据、不越权定性、不隐瞒不确定、不丢失来源 沉淀物没有溯源，等于把不可信的东西规模化", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">没有溯源会怎样</tspan></text><g data-k=\"业务方不敢用\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">业务方不敢用</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">错一次就再也不打开</tspan></text></g><g data-k=\"错了查不出\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">错了查不出</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">无法纠错</tspan></text></g><g data-k=\"不可信的东西\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">不可信的东西</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">规模化就是灾难</tspan></text></g></svg>", "d": 16.0}, {"t": "小结", "n": "三态：原始材料、加工结论、最终产出；每一样都要能追溯来源 四条红线：不编数据、不越权定性、不隐瞒不确定、不丢失来源 沉淀物没有溯源，等于把不可信的东西规模化", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"溯源单位是「能点回原文」\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">溯源单位是「能点回原文」</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不是有个文档名</tspan></text></g><g data-k=\"标注不确定\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">标注不确定</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">是可信的表现</tspan></text></g></svg>", "d": 16.0}]}, {"id": "M6U4", "tier": "adv", "step": "demo", "title": "成本曲线：沉淀的商业价值到底在哪", "video": {"dur": "4.6min", "script": ["沉淀的价值不在第一次，在第二到第 N 次：边际成本下降", "算账方式：第一次投入 X 小时，之后每次省 Y 小时，几次回本", "不算这笔账的沉淀，很容易被当成「额外工作」砍掉"]}, "ppt": {"method": "回本点计算：首投 / 单次节省 / 回本次数", "case": "某团队做了资产库但没人维护，因为没人算过它能省多少时间", "demo": "现场为一个沉淀物算回本点"}, "objective": "能算出一个沉淀物的回本点，并说清值不值得做", "transfer": "用这个算法说服你的上级，或说服自己不做", "deliverable": {"type": "document", "name": "沉淀回本账", "rubric": ["首投可估", "单次节省有依据", "回本点明确"], "acceptance": "能产出《沉淀回本账》并通过本单元评分要点"}, "task": "写账：做这件事要投入多少、之后每次省多少、几次回本。", "brief": "省的时间要来自实际，不要用「大概能省一半」。", "template": "【沉淀回本账】\n沉淀物：\n首次投入：__ 小时\n每次节省：__ 小时\n回本次数：__ 次\n预计使用频次：__ 次/月\n结论：", "exemplar": "沉淀物：费用审核规则表 + 评测集。\n首次投入：约 16 小时（整理规则 8h + 建评测集 8h）。\n每次节省：新场景复用省约 6 小时（不用重新梳理规则、不用重建评测集）。\n回本：3 次。\n频次：约 1 个新场景/月。\n结论：三个月回本，值得做。", "quiz": [{"q": "沉淀的商业价值主要体现在？", "opts": ["第一次做的效率", "第二到第 N 次边际成本下降", "文档美观", "领导认可"], "a": 1, "why": "沉淀的收益是复用，不是首次产出。"}, {"q": "「能省一半时间」为什么不能用？", "opts": ["太乐观", "无法核对，也算不出回本点", "太保守", "客户不信"], "a": 1, "why": "没有基线的估计无法支撑决策。"}], "vslides": [{"t": "价值在第二到第 N 次", "n": "沉淀的价值不在第一次，在第二到第 N 次：边际成本下降 算账方式：第一次投入 X 小时，之后每次省 Y 小时，几次回本 不算这笔账的沉淀，很容易被当成「额外工作」砍掉", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">价值在第二到第 N 次</tspan></text><g data-k=\"第一次投入\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">第一次投入</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">只有成本</tspan></text></g><g data-k=\"之后每次省\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">之后每次省</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">边际成本下降</tspan></text></g><g data-k=\"复用得越多\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">复用得越多</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">越值</tspan></text></g></svg>", "d": 17.0}, {"t": "算回本点", "n": "沉淀的价值不在第一次，在第二到第 N 次：边际成本下降 算账方式：第一次投入 X 小时，之后每次省 Y 小时，几次回本 不算这笔账的沉淀，很容易被当成「额外工作」砍掉", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">算回本点</tspan></text><g data-k=\"首投 X 小时\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">首投 X 小时</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">整理与建库</tspan></text></g><g data-k=\"每次省 Y 小时\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">每次省 Y 小时</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">复用省下的</tspan></text></g><g data-k=\"几次回本\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">几次回本</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">X÷Y</tspan></text></g></svg>", "d": 17.0}, {"t": "不算账的后果", "n": "沉淀的价值不在第一次，在第二到第 N 次：边际成本下降 算账方式：第一次投入 X 小时，之后每次省 Y 小时，几次回本 不算这笔账的沉淀，很容易被当成「额外工作」砍掉", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">不算账的后果</tspan></text><g data-k=\"被当成额外工作\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">被当成额外工作</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">随时砍掉</tspan></text></g><g data-k=\"没人维护\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">没人维护</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">几个月就废</tspan></text></g><g data-k=\"说不清价值\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">说不清价值</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">预算过不了</tspan></text></g></svg>", "d": 17.0}, {"t": "小结", "n": "沉淀的价值不在第一次，在第二到第 N 次：边际成本下降 算账方式：第一次投入 X 小时，之后每次省 Y 小时，几次回本 不算这笔账的沉淀，很容易被当成「额外工作」砍掉", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"不用「大概省一半」\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">不用「大概省一半」</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">无法核对</tspan></text></g><g data-k=\"回本点写出来\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">回本点写出来</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">才说服得了人</tspan></text></g></svg>", "d": 17.0}]}, {"id": "M6U5", "tier": "adv", "step": "todo", "title": "冷启动四条铁律与定价陷阱", "video": {"dur": "4.8min", "script": ["沉淀机制最难的是冷启动：没人愿意先交出自己的经验", "四条铁律：先给后取、从一个人开始、小颗粒起步、让贡献可见", "定价陷阱：把沉淀算成额外工时，结果谁都不愿意做"]}, "ppt": {"method": "四条铁律 + 一个反例", "case": "某公司搞知识库，要求每人每月上传 5 篇，三个月后全是复制粘贴的废话", "demo": "现场设计一个「先给后取」的冷启动动作"}, "objective": "能设计一个可落地的沉淀冷启动方案，避开定价陷阱", "transfer": "本周做一次「先给」：把你的一个模板给别人用", "deliverable": {"type": "document", "name": "冷启动方案", "rubric": ["四条铁律都体现", "有第一个贡献者", "贡献可见"], "acceptance": "能产出《冷启动方案》并通过本单元评分要点"}, "task": "写方案：先给什么、从谁开始、颗粒多大、怎么让贡献被看见。", "brief": "「要求每人上传 N 篇」是最典型的失败设计。", "template": "【冷启动方案】\n先给什么（不要求回报）：\n从谁开始（一个人）：\n颗粒度（一件小事）：\n怎么让贡献可见：\n怎么避免算工时：", "exemplar": "先给：把费用审核规则表免费给采购组用。\n从谁开始：采购组的小李，他正好在做类似的事。\n颗粒：只沉淀「规则表」一件事，不做大而全。\n可见：在周会上展示「因为这个表省了 3 小时」，署名是小李。\n避免算工时：把它算进项目交付物，不额外计工作量。", "quiz": [{"q": "沉淀冷启动最有效的做法是？", "opts": ["规定每人每月上传篇数", "先给出自己的东西，让别人看到好处", "搞积分排名", "领导强制要求"], "a": 1, "why": "先给后取才能建立互惠；强制上传只会产生垃圾。"}, {"q": "「把沉淀算成额外工时」的问题在哪？", "opts": ["成本太高", "没人愿意做额外工作，沉淀就停在纸面", "不好核算", "财务不同意"], "a": 1, "why": "沉淀必须算进交付物，否则永远是「有空再说」。"}], "vslides": [{"t": "冷启动最难", "n": "沉淀机制最难的是冷启动：没人愿意先交出自己的经验 四条铁律：先给后取、从一个人开始、小颗粒起步、让贡献可见 定价陷阱：把沉淀算成额外工时，结果谁都不愿意做", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">冷启动最难</tspan></text><g data-k=\"没人愿意先交\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">没人愿意先交</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">经验是护身符</tspan></text></g><g data-k=\"先给后取\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">先给后取</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">才能建立互惠</tspan></text></g><g data-k=\"强制上传\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">强制上传</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">只会产生垃圾</tspan></text></g></svg>", "d": 15.8}, {"t": "四条铁律", "n": "沉淀机制最难的是冷启动：没人愿意先交出自己的经验 四条铁律：先给后取、从一个人开始、小颗粒起步、让贡献可见 定价陷阱：把沉淀算成额外工时，结果谁都不愿意做", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">四条铁律</tspan></text><g data-k=\"从一个人开始\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">从一个人开始</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">别搞全员运动</tspan></text></g><g data-k=\"小颗粒起步\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小颗粒起步</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">先沉淀一件事</tspan></text></g><g data-k=\"让贡献可见\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">让贡献可见</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">署名 + 用了几次</tspan></text></g></svg>", "d": 15.8}, {"t": "定价陷阱", "n": "沉淀机制最难的是冷启动：没人愿意先交出自己的经验 四条铁律：先给后取、从一个人开始、小颗粒起步、让贡献可见 定价陷阱：把沉淀算成额外工时，结果谁都不愿意做", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">定价陷阱</tspan></text><g data-k=\"算成额外工时\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">算成额外工时</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">谁都不愿意做</tspan></text></g><g data-k=\"算进交付物\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">算进交付物</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">才有位置</tspan></text></g><g data-k=\"不纳入个人考核\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">不纳入个人考核</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">减少抵触</tspan></text></g></svg>", "d": 15.8}, {"t": "小结", "n": "沉淀机制最难的是冷启动：没人愿意先交出自己的经验 四条铁律：先给后取、从一个人开始、小颗粒起步、让贡献可见 定价陷阱：把沉淀算成额外工时，结果谁都不愿意做", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"先给一次\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">先给一次</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">比开十次会有用</tspan></text></g><g data-k=\"要求每人上传 N 篇\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">要求每人上传 N 篇</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">典型失败设计</tspan></text></g></svg>", "d": 15.8}]}, {"id": "M6U6", "tier": "adv", "step": "todo", "title": "信任四问与沉淀载体", "video": {"dur": "4.6min", "script": ["一线愿不愿意交出经验，取决于四问：会不会被挑错、有没有署名、会不会增加考核、交了之后归谁", "载体要选低摩擦的：能在原工作流里顺手留下，而不是另开一个系统", "最常见的错误是新建一个知识库，要求大家「搬过去」"]}, "ppt": {"method": "四问清单 + 载体选择三条判据", "case": "某团队把沉淀做进现有工单系统的一个字段，两个月攒了 200 条真实经验", "demo": "现场回答四问，并选一个低摩擦载体"}, "objective": "能回答一线最关心的四问，并选出一个低摩擦的沉淀载体", "transfer": "问三个一线同事这四问，记录他们真实的顾虑", "deliverable": {"type": "document", "name": "沉淀载体方案", "rubric": ["四问都有答案", "载体低摩擦", "归属写清"], "acceptance": "能产出《沉淀载体方案》并通过本单元评分要点"}, "task": "写四问答案 + 载体选择：放在哪个现有流程里、谁维护、归谁。", "brief": "载体如果是新建系统，先问「能不能放进他们已经在用的地方」。", "template": "【沉淀载体方案】\n① 会不会被挑错：\n② 有没有署名：\n③ 会不会加考核：\n④ 交了归谁：\n载体（放在现有哪个流程里）：", "exemplar": "① 只做事实校对，不做质量评比；错了只改不追责。\n② 每条经验带署名与使用次数。\n③ 不纳入个人考核，只作为团队资产。\n④ 归团队，个人保留署名与优先使用权。\n载体：工单系统的「处理备注」字段，处理完顺手写两句。", "quiz": [{"q": "一线最不愿意交出经验，通常担心什么？", "opts": ["打字麻烦", "被挑错、没署名、加考核、归属不明", "系统难用", "没时间"], "a": 1, "why": "四问都是信任问题，不是工具问题。"}, {"q": "沉淀载体最好的选择是？", "opts": ["新建一个知识库", "放进他们已经在用的流程里，顺手留下", "专门的文档系统", "微信群"], "a": 1, "why": "摩擦越低，沉淀越可能发生。"}], "vslides": [{"t": "一线先问四件事", "n": "一线愿不愿意交出经验，取决于四问：会不会被挑错、有没有署名、会不会增加考核、交了之后归谁 载体要选低摩擦的：能在原工作流里顺手留下，而不是另开一个系统 最常见的错误是新建一个知识库，要求大家「搬过去」", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">一线先问四件事</tspan></text><g data-k=\"会不会被挑错\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">会不会被挑错</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">错了追不追责</tspan></text></g><g data-k=\"有没有署名\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">有没有署名</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">功劳归谁</tspan></text></g><g data-k=\"会不会加考核\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">会不会加考核</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">变成KPI</tspan></text></g></svg>", "d": 20.5}, {"t": "载体要低摩擦", "n": "一线愿不愿意交出经验，取决于四问：会不会被挑错、有没有署名、会不会增加考核、交了之后归谁 载体要选低摩擦的：能在原工作流里顺手留下，而不是另开一个系统 最常见的错误是新建一个知识库，要求大家「搬过去」", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">载体要低摩擦</tspan></text><g data-k=\"放进现有流程\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">放进现有流程</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">顺手留两句</tspan></text></g><g data-k=\"新建知识库\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">新建知识库</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">要求搬过去必失败</tspan></text></g><g data-k=\"别加一步操作\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">别加一步操作</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">越少越好</tspan></text></g></svg>", "d": 20.5}, {"t": "四问怎么答", "n": "一线愿不愿意交出经验，取决于四问：会不会被挑错、有没有署名、会不会增加考核、交了之后归谁 载体要选低摩擦的：能在原工作流里顺手留下，而不是另开一个系统 最常见的错误是新建一个知识库，要求大家「搬过去」", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">四问怎么答</tspan></text><g data-k=\"只做事实校对\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">只做事实校对</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不搞质量评比</tspan></text></g><g data-k=\"团队所有 + 个人署名\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">团队所有 + 个人署名</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">权属写清</tspan></text></g><g data-k=\"不纳入考核\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">不纳入考核</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">写进制度</tspan></text></g></svg>", "d": 20.5}, {"t": "小结", "n": "一线愿不愿意交出经验，取决于四问：会不会被挑错、有没有署名、会不会增加考核、交了之后归谁 载体要选低摩擦的：能在原工作流里顺手留下，而不是另开一个系统 最常见的错误是新建一个知识库，要求大家「搬过去」", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"沉淀是信任问题\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">沉淀是信任问题</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不是工具问题</tspan></text></g><g data-k=\"摩擦越低\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">摩擦越低</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">越可能发生</tspan></text></g></svg>", "d": 20.5}]}]}, {"id": "M7", "title": "M7 安全治理与 12 周养成", "dims": ["security", "workflow", "strategy"], "units": [{"id": "M7U1", "tier": "basic", "step": "understand", "title": "约束三层模型与数据边界", "video": {"dur": "4.8min", "script": ["三层约束：数据层（能碰什么）、模型层（能说什么）、流程层（能做什么决定）", "数据边界先划「进出」：什么能进模型，什么绝不出域", "先划边界再谈功能，顺序反了就要返工"]}, "ppt": {"method": "三层模型图 + 数据进出清单", "case": "某项目上线前发现客户名单被贴进公开模型，整个项目暂停整改", "demo": "现场列一份「能进 / 不能进」清单"}, "objective": "能画出三层约束，并列出本场景的数据进出清单", "transfer": "把清单发给信息安全，请他补两条你没想到的", "deliverable": {"type": "document", "name": "三层约束图", "rubric": ["三层都有内容", "进出清单具体", "有红线项"], "acceptance": "能产出《三层约束图》并通过本单元评分要点"}, "task": "写三层：数据能碰什么 / 模型能说什么 / 流程能决定什么；再列能进与不能进清单。", "brief": "「不能进」一栏必须包含客户信息、合同原文、未公开财务数据。", "template": "【三层约束图】\n① 数据层（能碰 / 不能碰）：\n② 模型层（能说 / 不能说）：\n③ 流程层（能建议 / 必须人定）：\n不能进模型的数据：", "exemplar": "① 数据：可碰脱敏后的单据字段；不可碰客户身份信息、银行账号明文。\n② 模型：可给分类建议与依据；不可下合规定性、不可承诺结果。\n③ 流程：可建议通过/拒绝；放行必须人签。\n不能进：客户名单、合同原文、未公开财务数据、员工个人信息。", "quiz": [{"q": "先划数据边界还是先做功能？", "opts": ["先做功能，边做边划", "先划边界，再谈功能", "同时进行", "看项目大小"], "a": 1, "why": "边界后补意味着返工，甚至项目暂停。"}, {"q": "下面哪类数据绝对不该进公开模型？", "opts": ["公开的产品介绍", "客户名单与合同原文", "已发布的制度", "行业公开报告"], "a": 1, "why": "客户信息与合同属于高敏数据，外泄成本极高。"}], "vslides": [{"t": "三层约束", "n": "三层约束：数据层（能碰什么）、模型层（能说什么）、流程层（能做什么决定） 数据边界先划「进出」：什么能进模型，什么绝不出域 先划边界再谈功能，顺序反了就要返工", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">三层约束</tspan></text><g data-k=\"数据层\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">数据层</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">能碰什么</tspan></text></g><g data-k=\"模型层\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">模型层</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">能说什么</tspan></text></g><g data-k=\"流程层\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">流程层</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">能做什么决定</tspan></text></g></svg>", "d": 16.2}, {"t": "先划边界再谈功能", "n": "三层约束：数据层（能碰什么）、模型层（能说什么）、流程层（能做什么决定） 数据边界先划「进出」：什么能进模型，什么绝不出域 先划边界再谈功能，顺序反了就要返工", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">先划边界再谈功能</tspan></text><g data-k=\"顺序反了\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">顺序反了</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">一定返工</tspan></text></g><g data-k=\"客户名单进模型\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">客户名单进模型</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">项目直接暂停</tspan></text></g><g data-k=\"边界先行\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">边界先行</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">是纪律</tspan></text></g></svg>", "d": 16.2}, {"t": "数据进出清单", "n": "三层约束：数据层（能碰什么）、模型层（能说什么）、流程层（能做什么决定） 数据边界先划「进出」：什么能进模型，什么绝不出域 先划边界再谈功能，顺序反了就要返工", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">数据进出清单</tspan></text><g data-k=\"能进\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">能进</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">脱敏字段、公开资料</tspan></text></g><g data-k=\"不能进\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">不能进</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">客户信息、合同原文</tspan></text></g><g data-k=\"红线项\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">红线项</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">一票否决</tspan></text></g></svg>", "d": 16.2}, {"t": "小结", "n": "三层约束：数据层（能碰什么）、模型层（能说什么）、流程层（能做什么决定） 数据边界先划「进出」：什么能进模型，什么绝不出域 先划边界再谈功能，顺序反了就要返工", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"边界后补\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">边界后补</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">代价是项目停摆</tspan></text></g><g data-k=\"不能进的一栏\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">不能进的一栏</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">要具体到字段</tspan></text></g></svg>", "d": 16.2}]}, {"id": "M7U2", "tier": "basic", "step": "understand", "title": "权限模型与日志审计", "video": {"dur": "4.6min", "script": ["权限三问：谁能问、能问什么、问到多细", "日志要能回答：谁在什么时候、问了什么、得到了什么、有没有被拦", "权限和日志是一对：没有日志的权限等于没有约束"]}, "ppt": {"method": "权限矩阵 + 日志字段清单", "case": "某系统上线后出问题，查不到谁问了什么，只能全部停用", "demo": "现场画一张三列权限矩阵"}, "objective": "能设计一个最小权限矩阵与日志字段清单", "transfer": "拿矩阵去找运维确认，看现在的日志够不够用", "deliverable": {"type": "document", "name": "权限与日志清单", "rubric": ["矩阵三列齐全", "日志字段够用", "有留存期限"], "acceptance": "能产出《权限与日志清单》并通过本单元评分要点"}, "task": "写矩阵：角色 × 能问什么 × 粒度；再列日志字段与留存期。", "brief": "粒度要分「汇总」与「明细」，不能只写「可查看」。", "template": "【权限与日志清单】\n角色 | 能问什么 | 粒度（汇总/明细）\n日志字段：时间 / 主体 / 问题 / 结果 / 是否拦截\n留存：__ 天", "exemplar": "销售：可问自己区域客户 | 明细；主管：可问全区域 | 汇总 + 本区域明细；财务：可问金额相关 | 汇总。\n日志：时间、账号、问题摘要、返回条数、是否命中拦截规则。\n留存：180 天。", "quiz": [{"q": "「可查看客户数据」这条权限描述缺了什么？", "opts": ["缺时间范围", "缺粒度（汇总还是明细）与范围（本区域还是全公司）", "缺审批人", "缺系统名"], "a": 1, "why": "没有粒度与范围，权限形同虚设。"}, {"q": "没有日志的权限系统，最大问题是？", "opts": ["性能差", "出事时无法追溯，只能整体停用", "界面不好看", "成本高"], "a": 1, "why": "无法追溯就无法定位与止损。"}], "vslides": [{"t": "权限三问", "n": "权限三问：谁能问、能问什么、问到多细 日志要能回答：谁在什么时候、问了什么、得到了什么、有没有被拦 权限和日志是一对：没有日志的权限等于没有约束", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">权限三问</tspan></text><g data-k=\"谁能问\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">谁能问</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">角色</tspan></text></g><g data-k=\"能问什么\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">能问什么</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">数据范围</tspan></text></g><g data-k=\"问到多细\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">问到多细</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">汇总还是明细</tspan></text></g></svg>", "d": 14.8}, {"t": "日志要能回答", "n": "权限三问：谁能问、能问什么、问到多细 日志要能回答：谁在什么时候、问了什么、得到了什么、有没有被拦 权限和日志是一对：没有日志的权限等于没有约束", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">日志要能回答</tspan></text><g data-k=\"谁在什么时候\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">谁在什么时候</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">主体与时间</tspan></text></g><g data-k=\"问了什么\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">问了什么</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">问题摘要</tspan></text></g><g data-k=\"得到什么\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">得到什么</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">结果与是否拦截</tspan></text></g></svg>", "d": 14.8}, {"t": "没有日志的权限", "n": "权限三问：谁能问、能问什么、问到多细 日志要能回答：谁在什么时候、问了什么、得到了什么、有没有被拦 权限和日志是一对：没有日志的权限等于没有约束", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">没有日志的权限</tspan></text><g data-k=\"等于没有约束\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">等于没有约束</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">出事查不到</tspan></text></g><g data-k=\"只能整体停用\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">只能整体停用</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">代价极大</tspan></text></g><g data-k=\"留存期要定\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">留存期要定</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">180 天起</tspan></text></g></svg>", "d": 14.8}, {"t": "小结", "n": "权限三问：谁能问、能问什么、问到多细 日志要能回答：谁在什么时候、问了什么、得到了什么、有没有被拦 权限和日志是一对：没有日志的权限等于没有约束", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"粒度与范围\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">粒度与范围</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">缺一不可</tspan></text></g><g data-k=\"权限与日志\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">权限与日志</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">是一对</tspan></text></g></svg>", "d": 14.8}]}, {"id": "M7U3", "tier": "adv", "step": "demo", "title": "三类护栏与人工兜底", "video": {"dur": "4.8min", "script": ["三类护栏：输入护栏（拦住不该问的）、输出护栏（拦住不该说的）、动作护栏（拦住不该做的）", "动作护栏最关键：涉及付款、对外发送、删除数据，一律要人工确认", "人工兜底不是失败，是设计：模型不确定时的默认路径"]}, "ppt": {"method": "三类护栏 + 一处兜底", "case": "某助手自动给客户发了一封措辞不当的邮件，因为没有动作护栏", "demo": "现场为一个场景写三类护栏各一条"}, "objective": "能为一个场景设计三类护栏，并指明兜底路径", "transfer": "检查你现有方案，有没有「自动对外发送」这种无护栏动作", "deliverable": {"type": "document", "name": "护栏清单", "rubric": ["三类都有", "动作护栏明确", "兜底路径清楚"], "acceptance": "能产出《护栏清单》并通过本单元评分要点"}, "task": "写三类护栏各一条，再写「模型不确定时走哪条路」。", "brief": "动作护栏要写「谁确认、在哪确认」，不能只写「需人工」。", "template": "【护栏清单】\n输入护栏：拦什么、拦到后怎么办\n输出护栏：查什么、不合规怎么改\n动作护栏：哪些动作必须人确认、谁确认\n兜底：不确定时走哪条路", "exemplar": "输入护栏：含身份证号/银行卡号的输入直接拒绝并提示脱敏。\n输出护栏：不得出现「保证通过」「一定合规」等承诺性表述，命中即重写。\n动作护栏：对外发送邮件、写入付款字段前必须人工确认，确认人为主办。\n兜底：置信度低于阈值一律转人工，不自动处理。", "quiz": [{"q": "「自动给客户发送邮件」缺少的是哪类护栏？", "opts": ["输入护栏", "输出护栏", "动作护栏", "都不缺"], "a": 2, "why": "对外发送属于动作，必须有动作护栏与人工确认。"}, {"q": "人工兜底应该怎么设计？", "opts": ["能不用就不用", "作为模型不确定时的默认路径写清楚", "只在出错后加", "交给客户处理"], "a": 1, "why": "兜底是设计的一部分，要预先定义触发条件。"}], "vslides": [{"t": "三类护栏", "n": "三类护栏：输入护栏（拦住不该问的）、输出护栏（拦住不该说的）、动作护栏（拦住不该做的） 动作护栏最关键：涉及付款、对外发送、删除数据，一律要人工确认 人工兜底不是失败，是设计：模型不确定时的默认路径", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">三类护栏</tspan></text><g data-k=\"输入护栏\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">输入护栏</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">拦住不该问的</tspan></text></g><g data-k=\"输出护栏\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">输出护栏</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">拦住不该说的</tspan></text></g><g data-k=\"动作护栏\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">动作护栏</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">拦住不该做的</tspan></text></g></svg>", "d": 20.3}, {"t": "动作护栏最关键", "n": "三类护栏：输入护栏（拦住不该问的）、输出护栏（拦住不该说的）、动作护栏（拦住不该做的） 动作护栏最关键：涉及付款、对外发送、删除数据，一律要人工确认 人工兜底不是失败，是设计：模型不确定时的默认路径", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">动作护栏最关键</tspan></text><g data-k=\"付款、对外发送\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">付款、对外发送</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">一律人工确认</tspan></text></g><g data-k=\"删除数据\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">删除数据</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">必须二次确认</tspan></text></g><g data-k=\"没有动作护栏\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">没有动作护栏</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">真会发错邮件</tspan></text></g></svg>", "d": 20.3}, {"t": "人工兜底是设计", "n": "三类护栏：输入护栏（拦住不该问的）、输出护栏（拦住不该说的）、动作护栏（拦住不该做的） 动作护栏最关键：涉及付款、对外发送、删除数据，一律要人工确认 人工兜底不是失败，是设计：模型不确定时的默认路径", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">人工兜底是设计</tspan></text><g data-k=\"不确定时走哪条路\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">不确定时走哪条路</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">预先定义</tspan></text></g><g data-k=\"置信度低转人工\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">置信度低转人工</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不要硬判</tspan></text></g><g data-k=\"兜底不是失败\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">兜底不是失败</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">是稳定性</tspan></text></g></svg>", "d": 20.3}, {"t": "小结", "n": "三类护栏：输入护栏（拦住不该问的）、输出护栏（拦住不该说的）、动作护栏（拦住不该做的） 动作护栏最关键：涉及付款、对外发送、删除数据，一律要人工确认 人工兜底不是失败，是设计：模型不确定时的默认路径", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"只写需人工不够\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">只写需人工不够</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">要写谁在哪确认</tspan></text></g><g data-k=\"三类缺一\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">三类缺一</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">就会出事</tspan></text></g></svg>", "d": 20.3}]}, {"id": "M7U4", "tier": "adv", "step": "demo", "title": "上线自检清单", "video": {"dur": "4.4min", "script": ["上线前过一遍清单，比上线后救火便宜十倍", "清单六项：数据边界、权限、护栏、评测基线、兜底路径、责任人", "自检要有人签字，不能自己勾自己"]}, "ppt": {"method": "六项自检 + 签字人", "case": "某项目上线当天发现没配兜底，模型超时后工单直接卡住，全员手工处理了两天", "demo": "现场过一遍六项清单，标出没准备好的"}, "objective": "能用六项清单完成一次上线自检，并指出未达标项", "transfer": "把清单发给你的负责人，请他签字或指出缺项", "deliverable": {"type": "document", "name": "上线自检表", "rubric": ["六项都过", "有签字人", "未达标项有处理"], "acceptance": "能产出《上线自检表》并通过本单元评分要点"}, "task": "逐项勾：数据边界、权限、护栏、评测基线、兜底、责任人；未达标的写处理计划。", "brief": "六项里最容易漏的是兜底路径和责任人。", "template": "【上线自检表】\n□ 数据边界已划并评审\n□ 权限矩阵已配置\n□ 三类护栏已生效\n□ 评测基线已跑（__/20）\n□ 兜底路径已定义\n□ 责任人已明确\n未达标项与处理：", "exemplar": "☑ 数据边界：已评审，客户信息不进模型\n☑ 权限：三角色矩阵已配置\n☑ 护栏：三类已生效，动作护栏测试通过\n☑ 评测：20 条基线 17 条通过\n☐ 兜底：模型超时目前无处理 → 上线前补「超时转人工」\n☑ 责任人：售后主管 + 我", "quiz": [{"q": "上线自检六项里最容易被漏掉的是？", "opts": ["数据边界", "兜底路径与责任人", "权限", "护栏"], "a": 1, "why": "兜底和责任人最不显眼，出事时却最要紧。"}, {"q": "自检为什么要有人签字？", "opts": ["流程要求", "自己勾自己容易漏，签字人承担确认责任", "便于归档", "显得正式"], "a": 1, "why": "第三方确认能显著降低漏检概率。"}], "vslides": [{"t": "上线前过一遍清单", "n": "上线前过一遍清单，比上线后救火便宜十倍 清单六项：数据边界、权限、护栏、评测基线、兜底路径、责任人 自检要有人签字，不能自己勾自己", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">上线前过一遍清单</tspan></text><g data-k=\"比上线后救火便宜\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">比上线后救火便宜</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">十倍</tspan></text></g><g data-k=\"六项自检\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">六项自检</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">缺一不可</tspan></text></g><g data-k=\"有人签字\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">有人签字</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不能自己勾自己</tspan></text></g></svg>", "d": 13.3}, {"t": "六项清单", "n": "上线前过一遍清单，比上线后救火便宜十倍 清单六项：数据边界、权限、护栏、评测基线、兜底路径、责任人 自检要有人签字，不能自己勾自己", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">六项清单</tspan></text><g data-k=\"数据边界 / 权限\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">数据边界 / 权限</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">先划先配</tspan></text></g><g data-k=\"护栏 / 评测基线\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">护栏 / 评测基线</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">跑通再上</tspan></text></g><g data-k=\"兜底 / 责任人\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">兜底 / 责任人</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">最易漏</tspan></text></g></svg>", "d": 13.3}, {"t": "最容易漏的两项", "n": "上线前过一遍清单，比上线后救火便宜十倍 清单六项：数据边界、权限、护栏、评测基线、兜底路径、责任人 自检要有人签字，不能自己勾自己", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">最容易漏的两项</tspan></text><g data-k=\"兜底路径\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">兜底路径</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">模型超时怎么办</tspan></text></g><g data-k=\"责任人\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">责任人</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">出事找谁</tspan></text></g><g data-k=\"上线当天才发现\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">上线当天才发现</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">全员手工两天</tspan></text></g></svg>", "d": 13.3}, {"t": "小结", "n": "上线前过一遍清单，比上线后救火便宜十倍 清单六项：数据边界、权限、护栏、评测基线、兜底路径、责任人 自检要有人签字，不能自己勾自己", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"自检要第三方确认\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">自检要第三方确认</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">降低漏检</tspan></text></g><g data-k=\"未达标项写处理计划\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">未达标项写处理计划</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">别硬上</tspan></text></g></svg>", "d": 13.3}]}, {"id": "M7U5", "tier": "adv", "step": "todo", "title": "12 周四阶段与四道 Gate", "video": {"dur": "4.6min", "script": ["12 周分四阶段：摸清现状、跑通一个场景、交付上线、沉淀复制", "每阶段末有 Gate：不达标不进下一阶段，宁可延期也不要带病推进", "Gate 的判据必须是可核对的，不能是「感觉差不多了」"]}, "ppt": {"method": "四阶段 + 四 Gate 判据表", "case": "某项目跳过 Gate 直接上线，结果在交付阶段发现场景选错，全部重来", "demo": "现场给自己的项目排 12 周与四道 Gate"}, "objective": "能排出 12 周四阶段计划，并为每道 Gate 写出可核对判据", "transfer": "把这份计划给上级看，问他会不会在哪个 Gate 放你过", "deliverable": {"type": "plan", "name": "12 周计划", "rubric": ["四阶段清楚", "四 Gate 有判据", "时间可检查"], "acceptance": "能产出《12 周计划》并通过本单元评分要点"}, "task": "写四阶段：每阶段做什么、几周、Gate 判据是什么。", "brief": "Gate 判据要能被第三方核对，不写「基本完成」。", "template": "【12 周计划】\n阶段 1（周 1-2）摸清现状 → Gate 1：\n阶段 2（周 3-6）跑通一个场景 → Gate 2：\n阶段 3（周 7-10）交付上线 → Gate 3：\n阶段 4（周 11-12）沉淀复制 → Gate 4：", "exemplar": "阶段 1（1-2 周）：访谈 5 人、拿到 200 条历史数据 → Gate1：三层访谈记录齐全 + 评测集 20 条。\n阶段 2（3-6 周）：最小版本跑通 → Gate2：20 条评测准确率 ≥80% + 真实用户试用 1 次。\n阶段 3（7-10 周）：接进流程上线 → Gate3：错分率 ≤10% + 上线自检六项全过。\n阶段 4（11-12 周）：沉淀与复制 → Gate4：方法卡 + 物料包齐备，第二场景方案已出。", "quiz": [{"q": "Gate 判据的最基本要求是？", "opts": ["领导认可", "可被第三方核对", "写得详细", "有时间点"], "a": 1, "why": "不可核对的判据等于没有 Gate。"}, {"q": "Gate 不达标时应该？", "opts": ["先推进，后面补", "停在原地补齐，宁可延期", "降低判据", "换人"], "a": 1, "why": "带病推进会让问题在后期放大。"}], "vslides": [{"t": "12 周四个阶段", "n": "12 周分四阶段：摸清现状、跑通一个场景、交付上线、沉淀复制 每阶段末有 Gate：不达标不进下一阶段，宁可延期也不要带病推进 Gate 的判据必须是可核对的，不能是「感觉差不多了」", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">12 周四个阶段</tspan></text><g data-k=\"1-2 周 摸清现状\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">1-2 周 摸清现状</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">访谈 + 数据</tspan></text></g><g data-k=\"3-6 周 跑通场景\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">3-6 周 跑通场景</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">最小版本 + 评测</tspan></text></g><g data-k=\"7-10 周 交付上线\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">7-10 周 交付上线</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">接进流程</tspan></text></g></svg>", "d": 18.7}, {"t": "四道 Gate", "n": "12 周分四阶段：摸清现状、跑通一个场景、交付上线、沉淀复制 每阶段末有 Gate：不达标不进下一阶段，宁可延期也不要带病推进 Gate 的判据必须是可核对的，不能是「感觉差不多了」", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">四道 Gate</tspan></text><g data-k=\"不达标不进下一阶段\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">不达标不进下一阶段</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">宁可延期</tspan></text></g><g data-k=\"判据可核对\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">判据可核对</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不能凭感觉</tspan></text></g><g data-k=\"带病推进\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">带病推进</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">后期放大</tspan></text></g></svg>", "d": 18.7}, {"t": "最后两周沉淀", "n": "12 周分四阶段：摸清现状、跑通一个场景、交付上线、沉淀复制 每阶段末有 Gate：不达标不进下一阶段，宁可延期也不要带病推进 Gate 的判据必须是可核对的，不能是「感觉差不多了」", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">最后两周沉淀</tspan></text><g data-k=\"方法卡\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">方法卡</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">这类场景怎么做</tspan></text></g><g data-k=\"物料包\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">物料包</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">规则、评测集</tspan></text></g><g data-k=\"第二场景方案\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">第二场景方案</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">证明可复制</tspan></text></g></svg>", "d": 18.7}, {"t": "小结", "n": "12 周分四阶段：摸清现状、跑通一个场景、交付上线、沉淀复制 每阶段末有 Gate：不达标不进下一阶段，宁可延期也不要带病推进 Gate 的判据必须是可核对的，不能是「感觉差不多了」", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"Gate 是刹车\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">Gate 是刹车</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">不是形式</tspan></text></g><g data-k=\"判据第三方能核对\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">判据第三方能核对</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">才算数</tspan></text></g></svg>", "d": 18.7}]}, {"id": "M7U6", "tier": "adv", "step": "todo", "title": "综合案例：一次完整的结算审核交付", "video": {"dur": "5.4min", "script": ["把整门课串一遍：一个财务结算审核场景，从进场到沉淀", "六个动作：挖需求 → 定场景 → 搭最小版本 → 建评测 → 交付验收 → 沉淀复制", "每一步都留下证据，最终形成一份可复用的资产包"]}, "ppt": {"method": "六步全链路图 + 每步的产出物", "case": "某集团结算审核从 12 人逐张核，到 3 人复核 + 机审初筛，年省约 6000 小时", "demo": "现场用六步复盘一个自己参与过的项目，找出断在哪一步"}, "objective": "能完整复述一次端到端交付，并说清每一步的产出与证据", "transfer": "用六步给你的项目做一次复盘，写清断点", "deliverable": {"type": "document", "name": "端到端复盘", "rubric": ["六步齐全", "每步有产出", "断点明确"], "acceptance": "能产出《端到端复盘》并通过本单元评分要点"}, "task": "写六步：每步做了什么、产出什么、证据是什么；最后写断在哪一步。", "brief": "断点常常在第三步或第五步：搭了但没评测，或上线了但没验收。", "template": "【端到端复盘】\n① 挖需求：产出 / 证据\n② 定场景：产出 / 证据\n③ 搭最小版本：产出 / 证据\n④ 建评测：产出 / 证据\n⑤ 交付验收：产出 / 证据\n⑥ 沉淀复制：产出 / 证据\n断点：", "exemplar": "① 挖需求：三层访谈记录；证据：5 人访谈、200 条历史单据。\n② 定场景：一页纸立项书；证据：错分率 28%→10% 的目标。\n③ 最小版本：分类器；证据：5 条真实输入试跑。\n④ 评测：20 条评测集；证据：基线 75%。\n⑤ 交付验收：验收报告；证据：两周 1400 张，错分率 8.6%。\n⑥ 沉淀：方法卡 + 规则表 + 评测集。\n断点：④，评测集建得晚，导致中途改版无法对比。", "quiz": [{"q": "端到端交付中最常断在哪两步？", "opts": ["挖需求与定场景", "搭版本与建评测（搭了不评测）", "沉淀与复制", "都不断"], "a": 1, "why": "很多团队搭完就演示，缺评测与验收，说不清做成没有。"}, {"q": "整门课反复强调的核心是？", "opts": ["模型越强越好", "每一步都留下可核对、可复用的证据", "多做 Demo", "多培训"], "a": 1, "why": "FDE 的价值是让 AI 落地可验证、可复制。"}], "vslides": [{"t": "六个动作串起全课", "n": "把整门课串一遍：一个财务结算审核场景，从进场到沉淀 六个动作：挖需求 → 定场景 → 搭最小版本 → 建评测 → 交付验收 → 沉淀复制 每一步都留下证据，最终形成一份可复用的资产包", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">六个动作串起全课</tspan></text><g data-k=\"挖需求 → 定场景\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">挖需求 → 定场景</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">决定做不做对</tspan></text></g><g data-k=\"搭版本 → 建评测\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">搭版本 → 建评测</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">决定跑不跑得准</tspan></text></g><g data-k=\"验收 → 沉淀\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">验收 → 沉淀</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">决定能不能复现</tspan></text></g></svg>", "d": 18.7}, {"t": "每步都要留证据", "n": "把整门课串一遍：一个财务结算审核场景，从进场到沉淀 六个动作：挖需求 → 定场景 → 搭最小版本 → 建评测 → 交付验收 → 沉淀复制 每一步都留下证据，最终形成一份可复用的资产包", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">每步都要留证据</tspan></text><g data-k=\"访谈记录\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">访谈记录</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">三层答案</tspan></text></g><g data-k=\"评测集\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">评测集</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">20 条基线</tspan></text></g><g data-k=\"验收报告\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">验收报告</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">逐条判定</tspan></text></g></svg>", "d": 18.7}, {"t": "断点常在第四步", "n": "把整门课串一遍：一个财务结算审核场景，从进场到沉淀 六个动作：挖需求 → 定场景 → 搭最小版本 → 建评测 → 交付验收 → 沉淀复制 每一步都留下证据，最终形成一份可复用的资产包", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">断点常在第四步</tspan></text><g data-k=\"搭完就演示\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">搭完就演示</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">没建评测</tspan></text></g><g data-k=\"上线没验收\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">上线没验收</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">说不清达标</tspan></text></g><g data-k=\"复盘找断点\"><rect x=\"18\" y=\"148.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"165.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">复盘找断点</tspan></text><text x=\"200\" y=\"179.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">比总结有用</tspan></text></g></svg>", "d": 18.7}, {"t": "小结", "n": "把整门课串一遍：一个财务结算审核场景，从进场到沉淀 六个动作：挖需求 → 定场景 → 搭最小版本 → 建评测 → 交付验收 → 沉淀复制 每一步都留下证据，最终形成一份可复用的资产包", "s": "<svg viewBox=\"0 0 400 200\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\"><text x=\"200\" y=\"24\" font-size=\"12.5\" fill=\"#7aa2ff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">小结</tspan></text><g data-k=\"可核对、可复用\"><rect x=\"18\" y=\"44.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"61.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">可核对、可复用</tspan></text><text x=\"200\" y=\"75.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">是 FDE 的底线</tspan></text></g><g data-k=\"一个场景跑完一遍\"><rect x=\"18\" y=\"96.0\" width=\"364\" height=\"40\" rx=\"9\" fill=\"#16204a\" stroke=\"#3b7bff\" stroke-width=\"1.6\"/><text x=\"200\" y=\"113.0\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"700\"><tspan x=\"200\">一个场景跑完一遍</tspan></text><text x=\"200\" y=\"127.0\" font-size=\"9.6\" fill=\"#fff\" opacity=\"0.72\" text-anchor=\"middle\"><tspan x=\"200\">胜过五个 Demo</tspan></text></g></svg>", "d": 18.7}]}]}]};
const CAP_ALIGN = {};
const COURSE_META = {"title": "FDE 前沿部署工程师 · 完整学习课程（M0–M7 · 48 单元）", "industry": "通用（不含行业属性）", "roleLabel": "FDE 前沿部署工程师", "courseTag": "FDE 交付课", "cloudCompany": "FDE 课程", "scenes": ["进场访谈", "场景立项", "智能体搭建", "交付验收", "经验沉淀"], "redlines": ["业务结论与放行责任归人，不替客户下定性判断。", "不编造数据、条款、版本号与价格；不确定的明说「需人工核实」。", "客户数据不出边界：涉敏信息不进公开模型，演示一律脱敏。", "不承诺「一定上线」「保证通过验收」这类无法兑现的结论。"]};
const AUDIO  = {};
/* ===== 配音来源：CDN 优先，拉不动再回落站内 =====
   aidax.cn 走 GitHub Pages，国内直连实测 15–76KB/s：单段 200–350KB 要等 2.5–18.6 秒
   （M0U1 2.5s / M6U7 10.9s / M3U5 18.6s），用户体感就是「点了没反应」。
   同一文件走 jsDelivr 实测 120KB/s，且国内可直连。
   任何一段拉不下来，audio.onerror 会按 audLocal() 回落到站内相对路径，不会断音。 */
const AUDIO_CDN = 'https://cdn.jsdelivr.net/gh/chenshungang1986/aidax@main/';
/* ⚠️ 重新生成/替换配音后必须改这个版本号，否则 CDN 可能继续命中旧文件（换了音色还是老声音） */
const AUDIO_VER = '202611181739';
function audUrl(p){
  if(!p) return '';
  if(/^https?:/i.test(p)) return p;
  return AUDIO_CDN + String(p).replace(/^\.?\//,'') + '?v=' + AUDIO_VER;
}
function audLocal(p){
  const m=String(p==null?'':p).match(/audio\/[\w\-\/\.]+\.(?:m4a|mp3|wav|ogg)/i);
  return m ? m[0] : '';
}
const QUIZ   = {"M0": [{"q": "客户说要上 AI 审核，售前已经把平台卖出去了。此时最该由谁接手？", "opts": ["等算法团队把模型调好再说", "FDE 进场，把「审核」拆成可执行动作并定义什么算审过", "让 IT 部门先做系统集成", "先做一轮全员培训"], "a": 1, "why": "模型准不准是第二步；第一步是有人把场景拆开、定义验收口径，这就是 FDE 的活。"}, {"q": "下面哪项最像 FDE 的交付物，而不是售前或算法的交付物？", "opts": ["一份平台采购合同", "一份模型准确率报告", "一份带验收口径的场景落地包（SOP + 规则 + 评测集）", "一份产品报价单"], "a": 2, "why": "合同归售前，准确率归算法；能把场景跑通并说清「怎么算成」的落地包才是 FDE 的产出。"}], "M1": [{"q": "客户要「一个能每天自动跑、接内部系统、留审计日志的审核工具」，最该落在哪类产品？", "opts": ["对话类知识工作平台", "企业应用开发平台", "AI 编程助手", "设计协作平台"], "a": 1, "why": "要接系统、要跑批、要审计，属于应用形态，不是对话形态。"}, {"q": "判断该用哪个产品，最该先看什么？", "opts": ["哪个产品功能多", "客户最终的交付形态是什么", "哪个便宜", "哪个名气大"], "a": 1, "why": "交付形态决定产品类别；功能列表会让人选大而全但不合适的。"}], "M2": [{"q": "「帮我写个专业点的方案」最大的问题是？", "opts": ["字数太少", "没有输入、约束与输出格式，无法判断对错", "不够礼貌", "没有指定模型"], "a": 1, "why": "没有规格就没有验收标准，产出好坏只能凭感觉。"}, {"q": "下面哪条约束是可判断的？", "opts": ["尽量专业一些", "语气要亲切", "不超过 300 字，且每个结论标注数据来源", "写得有深度"], "a": 2, "why": "可判断的约束能被核对，形容词不能被核对。"}], "M3": [{"q": "客户第一句话最该被当成什么？", "opts": ["最终需求", "症状，需要往下挖", "预算依据", "验收标准"], "a": 1, "why": "第一句多是症状；照做容易做出他不认的东西。"}, {"q": "访谈第三层「谁受影响」为什么重要？", "opts": ["便于写报告", "决定一线会不会配合，也决定价值怎么算", "能拿到更多预算", "可以少做测试"], "a": 1, "why": "受影响的人不配合，方案再好也推不动。"}], "M4": [{"q": "一件事能用两条规则说清，最合适的方案是？", "opts": ["上 Agent", "写规则", "训一个模型", "先做 Demo"], "a": 1, "why": "规则稳定、成本低、可解释；用模型是过度设计。"}, {"q": "判断该不该用模型，核心看什么？", "opts": ["数据量大小", "任务是否能被规则完全枚举", "预算多少", "领导偏好"], "a": 1, "why": "规则能枚举的不需要模型；枚举不了的边界才交给模型。"}], "M5": [{"q": "PEV 里最容易被跳过、但决定成败的是哪一段？", "opts": ["计划", "执行", "验证", "汇报"], "a": 2, "why": "没有验证，就无法证明做成，也无法及时纠偏。"}, {"q": "「验证」段的证据应该是什么样？", "opts": ["基本达成", "客户反馈不错", "40 条评测集跑分 + 具体错例清单", "大家都很努力"], "a": 2, "why": "可回放、可核对的数据才算证据。"}], "M6": [{"q": "项目总结与可复用资产的核心差别是？", "opts": ["字数", "一个给人看，一个给别人直接用", "格式", "是否需要领导审"], "a": 1, "why": "资产的标准是「下一个人能直接用」，不是「写得完整」。"}, {"q": "判断沉淀是否有效的标准是？", "opts": ["文档页数", "下一个人接手要花多久", "领导是否表扬", "是否归档"], "a": 1, "why": "接手时间才是沉淀的价值度量。"}], "M7": [{"q": "先划数据边界还是先做功能？", "opts": ["先做功能，边做边划", "先划边界，再谈功能", "同时进行", "看项目大小"], "a": 1, "why": "边界后补意味着返工，甚至项目暂停。"}, {"q": "下面哪类数据绝对不该进公开模型？", "opts": ["公开的产品介绍", "客户名单与合同原文", "已发布的制度", "行业公开报告"], "a": 1, "why": "客户信息与合同属于高敏数据，外泄成本极高。"}]};
const QUIZ_BANK = {"M0U1": [{"q": "客户说要上 AI 审核，售前已经把平台卖出去了。此时最该由谁接手？", "opts": ["等算法团队把模型调好再说", "FDE 进场，把「审核」拆成可执行动作并定义什么算审过", "让 IT 部门先做系统集成", "先做一轮全员培训"], "a": 1, "why": "模型准不准是第二步；第一步是有人把场景拆开、定义验收口径，这就是 FDE 的活。"}, {"q": "下面哪项最像 FDE 的交付物，而不是售前或算法的交付物？", "opts": ["一份平台采购合同", "一份模型准确率报告", "一份带验收口径的场景落地包（SOP + 规则 + 评测集）", "一份产品报价单"], "a": 2, "why": "合同归售前，准确率归算法；能把场景跑通并说清「怎么算成」的落地包才是 FDE 的产出。"}], "M0U2": [{"q": "判断一个人是不是真 FDE，最有效的一问是？", "opts": ["你熟悉哪些 AI 工具", "你做过多少个项目", "拿到这句抱怨，你打算拆成哪几个动作、怎么证明做成了", "你能拿到多少预算"], "a": 2, "why": "工具和项目数量都可包装；能否拆解并定义验收，是能力本身。"}, {"q": "「客户说好用」为什么不能算验收通过？", "opts": ["因为客户可能客气", "因为它不可回放、不可复现，换个人来无法判断是否真的达标", "因为要写进合同才算", "因为客户不懂技术"], "a": 1, "why": "口头满意无法复盘；可回放的样本加口径，才能在下一次交付里复现。"}], "M0U3": [{"q": "业务方总说「你们这个不好用」，偏 Delta 的 FDE 最该补的动作是？", "opts": ["再优化一次模型准确率", "请业务方带你走一遍真实操作，找出他跳过的步骤", "加一份使用说明", "换一个更快的界面"], "a": 1, "why": "「不好用」通常指流程不匹配；走一遍真实操作才能看到隐性步骤，这是 Echo 侧能力。"}, {"q": "找互补的人时，最该写清的是？", "opts": ["请他多帮忙", "把请他做的事写到具体交付物", "给他一部分项目奖金", "让他全程参与所有会议"], "a": 1, "why": "「多帮忙」无法交接；写到交付物，别人才知道做到什么程度算完成。"}], "M0U4": [{"q": "「把纸质审批搬成线上审批，审核员仍然逐张看」属于哪个陷阱？", "opts": ["Demo 陷阱", "培训陷阱", "搬运陷阱", "都不属于"], "a": 2, "why": "流程没变，只换了载体，效率不会变——这是搬运陷阱。"}, {"q": "破这三个陷阱的共同前提是？", "opts": ["换更强的模型", "交付物必须是一段被改过的日常流程", "多做几次演示", "增加培训场次"], "a": 1, "why": "演示、培训、工具都不改变日常动作；只有流程被改，才算落地。"}], "M0U5": [{"q": "选择 FDE 归属时最该优先看的是？", "opts": ["哪个部门人更多", "谁掌握改流程的签字权", "哪个部门预算更多", "领导的个人偏好"], "a": 1, "why": "FDE 的价值在改流程；离签字权越远，落地越慢。"}, {"q": "把 FDE 放在 IT 中台最常见的代价是？", "opts": ["技术能力不足", "每个流程改动都要业务侧审批，周期被拉长", "薪资成本更高", "无法接触到数据"], "a": 1, "why": "技术资源反而更稳，卡点在业务授权与审批链条。"}], "M0U6": [{"q": "90 天计划里最该避免的写法是？", "opts": ["第 2 月主导一个场景", "提升业务理解能力", "第 1 月交出 20 条评测样本", "第 3 月交验收报告"], "a": 1, "why": "「提升某能力」无法检查；要写成具体交付物与检查人。"}, {"q": "五块能力自评时，没有证据的分数应该怎么处理？", "opts": ["按自己的感觉给", "按最低分算，直到拿出证据", "取中间值", "跳过不评"], "a": 1, "why": "无证据的高分会让计划建立在错误假设上，按最低分算才诚实。"}], "M1U1": [{"q": "客户要「一个能每天自动跑、接内部系统、留审计日志的审核工具」，最该落在哪类产品？", "opts": ["对话类知识工作平台", "企业应用开发平台", "AI 编程助手", "设计协作平台"], "a": 1, "why": "要接系统、要跑批、要审计，属于应用形态，不是对话形态。"}, {"q": "判断该用哪个产品，最该先看什么？", "opts": ["哪个产品功能多", "客户最终的交付形态是什么", "哪个便宜", "哪个名气大"], "a": 1, "why": "交付形态决定产品类别；功能列表会让人选大而全但不合适的。"}], "M1U2": [{"q": "第一次用 WorkBuddy，最该选什么任务？", "opts": ["最复杂的行业分析报告", "今天真要交的一件小事", "官方教程里的示例", "越难越能学到东西"], "a": 1, "why": "真实小任务能立刻判断产物可用性；难题会让人卡在调试上，学不到界面逻辑。"}, {"q": "「跑通了」的判断标准是？", "opts": ["它给出了回答", "回答看起来专业", "产出的文件能直接用，不需要再大改", "用时很短"], "a": 2, "why": "产出可用才算跑通；看起来专业不等于能用。"}], "M1U3": [{"q": "什么样的工作最值得做成 Skill？", "opts": ["一年做一次的年度规划", "每月重复三次以上、步骤基本固定的活", "需要大量创意的工作", "领导临时交办的活"], "a": 1, "why": "高频且步骤稳定，才能固化；一次性或高创意的工作做成 Skill 收益低。"}, {"q": "判断 Skill 写得好不好，最直接的标准是？", "opts": ["字数够多", "同事不问你自己就能跑起来", "你自己看得懂", "步骤写得漂亮"], "a": 1, "why": "Skill 的价值在可交接；需要口头解释的，说明步骤没写清。"}], "M1U4": [{"q": "AI 总回答「我不知道你们客户的情况」，最该补的是？", "opts": ["换一个更强的模型", "接连接器，让它能读到 CRM 数据", "写更长的提示词", "给它配一个专家人设"], "a": 1, "why": "缺的是数据不是人设；连接器负责把真实数据接进来。"}, {"q": "接数据前必须写清的是？", "opts": ["数据总量有多大", "谁能问、能问到什么粒度、谁批准", "数据库用什么版本", "多久同步一次"], "a": 1, "why": "权限粒度与批准人是治理底线，先定边界再接。"}], "M1U5": [{"q": "自动化任务最该先算清的是？", "opts": ["技术实现难度", "单次消耗、月频次与折合人工节省", "用哪个模型", "能不能接微信"], "a": 1, "why": "成本与收益算不清，项目在采购环节就会被否掉。"}, {"q": "收益写「提效明显」的问题是什么？", "opts": ["不够专业", "无法核对，也无法与成本比较", "老板不喜欢", "太短"], "a": 1, "why": "要折成人时或金额，才能与成本放在一张表里比较。"}], "M1U6": [{"q": "「工具买了、培训也做了，但没人真的在用」，卡在第几层？", "opts": ["第一层 有工具", "第二层 会用", "第三层 用得上", "第四层 能规模化"], "a": 2, "why": "会用了但没有接进业务流，卡在「用得上」这一层。"}, {"q": "判断客户卡点的写法，哪个是可用的？", "opts": ["意识不足", "领导不重视", "装了但月活不到 10%，三个部门只试过一次", "缺乏数字化基因"], "a": 2, "why": "可核对的现象才能指导动作；形容词无法验证也无法改进。"}], "M2U1": [{"q": "「帮我写个专业点的方案」最大的问题是？", "opts": ["字数太少", "没有输入、约束与输出格式，无法判断对错", "不够礼貌", "没有指定模型"], "a": 1, "why": "没有规格就没有验收标准，产出好坏只能凭感觉。"}, {"q": "下面哪条约束是可判断的？", "opts": ["尽量专业一些", "语气要亲切", "不超过 300 字，且每个结论标注数据来源", "写得有深度"], "a": 2, "why": "可判断的约束能被核对，形容词不能被核对。"}], "M2U2": [{"q": "把整本制度一次贴进去，最可能的后果是？", "opts": ["更准确", "模型抓住不相关段落，判断被稀释，还更慢更贵", "更安全", "没有任何影响"], "a": 1, "why": "上下文越多，注意力越分散；相关性比数量重要。"}, {"q": "判断某段上下文该不该给，最好的标准是？", "opts": ["是不是公司文件", "它能不能改变这次结论", "字数多不多", "是不是最新版本"], "a": 1, "why": "能改变结论的才必须给；不能改变的只会干扰。"}], "M2U3": [{"q": "Harness 里最常被省掉、但上线后最容易出事的是哪一段？", "opts": ["输入整理", "模型调用", "结果校验", "输出落地"], "a": 2, "why": "没有校验，模型返回异常格式会直接把错误带进下游系统。"}, {"q": "模型返回半截 JSON 导致下游崩溃，正确的修法是？", "opts": ["换更强的模型", "在调用与落地之间加校验段，不通过就丢弃或重试", "多试几次总会成功", "让用户自己检查"], "a": 1, "why": "稳定性靠工程约束，不靠模型自觉。"}], "M2U4": [{"q": "Agent 反复尝试不收敛，最该先设的是？", "opts": ["更长的提示词", "轮次上限与转人工条件", "更多工具", "更强的模型"], "a": 1, "why": "没有停止线，成本会失控；先约束再谈效果。"}, {"q": "「每轮必须有进展」里的进展应该怎么定义？", "opts": ["感觉比上一轮好", "新增一条可核对的证据", "用时更短", "回答更长"], "a": 1, "why": "进展要可核对，否则无法判断该停还是该继续。"}], "M2U5": [{"q": "为了「以后扩展方便」给工具开全部权限，主要风险是？", "opts": ["成本变高", "一旦被误用或泄露，影响面不可控，安全评审也过不了", "速度变慢", "没有风险"], "a": 1, "why": "权限越大，事故半径越大；最小权限是底线。"}, {"q": "工具调用的日志至少要能回答什么？", "opts": ["谁在什么时候做了什么，前后值是什么", "系统跑得快不快", "模型是哪个版本", "花多少钱"], "a": 0, "why": "可追溯是审计与复盘的前提。"}], "M2U6": [{"q": "「可复现」最准确的意思是？", "opts": ["我能跑通", "换个人按说明能跑出同样结果", "跑得快", "不报错"], "a": 1, "why": "可复现针对的是交接，不是个人熟练度。"}, {"q": "参数写在某人本地配置里，主要问题是？", "opts": ["不安全", "别人无法复现，交付即中断", "运行变慢", "版本冲突"], "a": 1, "why": "配置不可见就无法复现，也无法排障。"}], "M3U1": [{"q": "客户第一句话最该被当成什么？", "opts": ["最终需求", "症状，需要往下挖", "预算依据", "验收标准"], "a": 1, "why": "第一句多是症状；照做容易做出他不认的东西。"}, {"q": "访谈第三层「谁受影响」为什么重要？", "opts": ["便于写报告", "决定一线会不会配合，也决定价值怎么算", "能拿到更多预算", "可以少做测试"], "a": 1, "why": "受影响的人不配合，方案再好也推不动。"}], "M3U2": [{"q": "发现一线跳过了系统里的某个步骤，最该先做什么？", "opts": ["要求他按流程走", "问清为什么跳，多半是在补系统的坑", "上报领导", "写进报告"], "a": 1, "why": "隐性步骤通常有存在理由，先理解再改造。"}, {"q": "隐性流程最可靠的获取方式是？", "opts": ["看流程文档", "发问卷", "坐在旁边看真实操作", "问部门负责人"], "a": 2, "why": "文档写应然，负责人口述会简化；只有观察能看到例外。"}], "M3U3": [{"q": "给业务方做 Demo，最该演示什么？", "opts": ["模型能力多强", "他明天上班的动作会怎么变", "技术架构", "用了哪些工具"], "a": 1, "why": "业务方关心自己的动作与责任，不关心技术实现。"}, {"q": "「谁把关」这句话为什么不能省？", "opts": ["显得专业", "业务方最担心责任归属，说清才敢用", "便于通过验收", "能少做测试"], "a": 1, "why": "责任不清的方案，一线不敢签字放行。"}], "M3U4": [{"q": "一线表面配合、实际绕开系统，最可能的原因是？", "opts": ["培训不够", "被越级强推，收益与顾虑都没被处理", "系统太慢", "界面不好看"], "a": 1, "why": "压下来的任务，一线会用脚投票；要处理顾虑而不是加压。"}, {"q": "面对「担心被替代」，最该做的是？", "opts": ["强调 AI 不会替代人", "明确岗位与工作内容怎么变，并落到具体安排", "回避这个问题", "让领导去讲"], "a": 1, "why": "空口安慰无效，具体的岗位安排才让人安心。"}], "M3U5": [{"q": "第一个场景最重要的特征是？", "opts": ["最能体现技术实力", "痛感强且能在一两个月内被验证", "预算最高", "领导最关心"], "a": 1, "why": "第一个场景要立信，可验证比炫技重要。"}, {"q": "「说不清怎么算成功」的场景，为什么该往后排？", "opts": ["技术难度大", "无法验收，做完也说不清价值，团队会失去耐心", "预算不够", "数据不安全"], "a": 1, "why": "不可验证的项目在复盘时无法自证，容易被砍。"}], "M3U6": [{"q": "一页纸立项书里最常被漏、但最能减少扯皮的是？", "opts": ["技术方案", "预算", "明确不做什么（范围边界）", "项目排期"], "a": 2, "why": "边界不清，交付期会不断被加入新需求。"}, {"q": "「做到什么算成」应该写成？", "opts": ["明显提升效率", "错分率从 28% 降到 10% 以下", "业务方满意", "系统稳定运行"], "a": 1, "why": "带基线与目标值的指标才能验收。"}], "M4U1": [{"q": "一件事能用两条规则说清，最合适的方案是？", "opts": ["上 Agent", "写规则", "训一个模型", "先做 Demo"], "a": 1, "why": "规则稳定、成本低、可解释；用模型是过度设计。"}, {"q": "判断该不该用模型，核心看什么？", "opts": ["数据量大小", "任务是否能被规则完全枚举", "预算多少", "领导偏好"], "a": 1, "why": "规则能枚举的不需要模型；枚举不了的边界才交给模型。"}], "M4U2": [{"q": "知识库切片最该按什么单位切？", "opts": ["每 500 字", "按条款或小节，保留结构", "按页", "整篇不切"], "a": 1, "why": "条款自带完整语义，按字数切会把主体与例外切散。"}, {"q": "回答必须能指回原文，主要为了解决？", "opts": ["速度", "业务方敢不敢用、错了能不能查", "成本", "界面美观"], "a": 1, "why": "可溯源是可信度的前提，也是纠错的基础。"}], "M4U3": [{"q": "第一版智能体最该做成什么样？", "opts": ["功能齐全的全能助手", "只干一件事的窄版本", "带界面的完整产品", "能对话的机器人"], "a": 1, "why": "窄版本能快速验证，功能多反而没人用。"}, {"q": "最小可用版本的验收方式是？", "opts": ["演示好看", "拿真实输入跑，看对几条", "代码量多少", "上线时间"], "a": 1, "why": "真实输入上的正确率才是唯一标准。"}], "M4U4": [{"q": "「必须人工」的范围设得过大，会导致？", "opts": ["更安全", "绝大多数都要人看，等于没提效", "成本更低", "审计更严"], "a": 1, "why": "提效来自自动通过比例；范围过大就没有价值。"}, {"q": "确认点设计成「一眼能判断」，最关键的是？", "opts": ["界面漂亮", "同时给出判定依据，人只做是/否", "加审批层级", "多写说明文字"], "a": 1, "why": "给人依据，才能快速判断；否则等于把活又推回给人。"}], "M4U5": [{"q": "为什么必须先建评测集再改进？", "opts": ["方便汇报", "没有基线就无法判断改动是变好还是变差", "客户要求", "能少测几次"], "a": 1, "why": "凭感觉改版，常见结果是越改越差而不自知。"}, {"q": "20 条样本里如果全是典型样本，会怎样？", "opts": ["准确率虚高", "更严谨", "没有影响", "更容易过审"], "a": 0, "why": "缺边界样本，上线后一遇例外就暴露。"}], "M4U6": [{"q": "4 小时闭环的核心目的是？", "opts": ["做完整个项目", "验证这条路走不走得通，找出断点", "拿到验收", "展示成果"], "a": 1, "why": "闭环是探路，不是交付；断点清单才是产出。"}, {"q": "第一次给真实用户看的最佳时机是？", "opts": ["方案完美之后", "能跑通一段之后立刻", "上线之后", "合同签完"], "a": 1, "why": "越早看到真实反馈，返工成本越低。"}], "M5U1": [{"q": "PEV 里最容易被跳过、但决定成败的是哪一段？", "opts": ["计划", "执行", "验证", "汇报"], "a": 2, "why": "没有验证，就无法证明做成，也无法及时纠偏。"}, {"q": "「验证」段的证据应该是什么样？", "opts": ["基本达成", "客户反馈不错", "40 条评测集跑分 + 具体错例清单", "大家都很努力"], "a": 2, "why": "可回放、可核对的数据才算证据。"}], "M5U2": [{"q": "验收标准最晚要在什么时候写？", "opts": ["交付时", "开工前", "验收会上", "合同谈判时不必写"], "a": 1, "why": "开工前写才有约束力；交付时补标准必然扯皮。"}, {"q": "下面哪条是可用的验收标准？", "opts": ["满足业务需求", "客户满意", "错分率 ≤10%，200 张回测 + 主管抽检 50 张", "系统运行稳定"], "a": 2, "why": "有目标值、有判定方式，才能判定通过与否。"}], "M5U3": [{"q": "Demo 很好看但没人真的用，处在哪一级？", "opts": ["L0", "L1", "L2", "L3"], "a": 1, "why": "有 Demo 无人用是 L1；有人每周用才到 L2。"}, {"q": "定级最该看什么？", "opts": ["客户怎么说", "实际行为（谁在用、多久一次）", "投入多少钱", "技术多先进"], "a": 1, "why": "成熟度是行为指标，不是声明指标。"}], "M5U4": [{"q": "交付期有人提「顺手加个小功能」，最好的回应是？", "opts": ["直接答应，维护关系", "直接拒绝", "给选项：加时间或换范围", "先做着看"], "a": 2, "why": "给选项既保住关系，也守住范围。"}, {"q": "范围失控最典型的信号是？", "opts": ["需求变更没有书面确认", "代码变多", "会议变多", "测试变慢"], "a": 0, "why": "口头变更无法追溯，最后都变成你的责任。"}], "M5U5": [{"q": "第一个场景成功后，最该做的是？", "opts": ["马上铺开五个新场景", "抽象出一类场景的可复制模式", "扩大团队", "申请更多预算"], "a": 1, "why": "不抽象就复制，等于每个场景从零做。"}, {"q": "判断「可复制」最硬的标志是？", "opts": ["同一套流程能换对象复用，只改数据与枚举", "代码可复用", "客户愿意加钱", "团队有经验了"], "a": 0, "why": "流程不变、只换输入，才是真的抽象出来了。"}], "M5U6": [{"q": "验收报告最核心的部分是？", "opts": ["成果亮点", "对照开工前的标准逐条判定", "团队合影", "技术架构"], "a": 1, "why": "验收是判定，不是展示；标准是开工前定的。"}, {"q": "遗留问题该怎么处理？", "opts": ["不写，避免影响验收", "写清并给出处理计划", "推给客户", "口头说明"], "a": 1, "why": "写清遗留问题反而增加可信度，避免验收后被翻旧账。"}], "M6U1": [{"q": "项目总结与可复用资产的核心差别是？", "opts": ["字数", "一个给人看，一个给别人直接用", "格式", "是否需要领导审"], "a": 1, "why": "资产的标准是「下一个人能直接用」，不是「写得完整」。"}, {"q": "判断沉淀是否有效的标准是？", "opts": ["文档页数", "下一个人接手要花多久", "领导是否表扬", "是否归档"], "a": 1, "why": "接手时间才是沉淀的价值度量。"}], "M6U2": [{"q": "Skill 里最不该出现的内容是？", "opts": ["步骤", "触发条件", "「要专业」「要有洞察」这类无法执行的词", "边界"], "a": 2, "why": "无法执行的形容词会让 Skill 每次产出都不一样。"}, {"q": "Skill 的验收应该怎么定？", "opts": ["写得完整", "用它跑一遍，产出达到某个可核对的标准", "领导认可", "字数够"], "a": 1, "why": "Skill 的价值在实际产出，验收要对准产出。"}], "M6U3": [{"q": "沉淀物没有溯源，最直接的后果是？", "opts": ["不好看", "业务方不敢用，错了也查不出", "占空间", "加载慢"], "a": 1, "why": "不可溯源就无法建立信任，也无法纠错。"}, {"q": "「不隐瞒不确定」是什么意思？", "opts": ["所有回答都加免责声明", "不确定的地方明确标注需人工核实，而不是编一个答案", "不回答难题", "只说好话"], "a": 1, "why": "标注不确定是可信的表现；编造才是风险。"}], "M6U4": [{"q": "沉淀的商业价值主要体现在？", "opts": ["第一次做的效率", "第二到第 N 次边际成本下降", "文档美观", "领导认可"], "a": 1, "why": "沉淀的收益是复用，不是首次产出。"}, {"q": "「能省一半时间」为什么不能用？", "opts": ["太乐观", "无法核对，也算不出回本点", "太保守", "客户不信"], "a": 1, "why": "没有基线的估计无法支撑决策。"}], "M6U5": [{"q": "沉淀冷启动最有效的做法是？", "opts": ["规定每人每月上传篇数", "先给出自己的东西，让别人看到好处", "搞积分排名", "领导强制要求"], "a": 1, "why": "先给后取才能建立互惠；强制上传只会产生垃圾。"}, {"q": "「把沉淀算成额外工时」的问题在哪？", "opts": ["成本太高", "没人愿意做额外工作，沉淀就停在纸面", "不好核算", "财务不同意"], "a": 1, "why": "沉淀必须算进交付物，否则永远是「有空再说」。"}], "M6U6": [{"q": "一线最不愿意交出经验，通常担心什么？", "opts": ["打字麻烦", "被挑错、没署名、加考核、归属不明", "系统难用", "没时间"], "a": 1, "why": "四问都是信任问题，不是工具问题。"}, {"q": "沉淀载体最好的选择是？", "opts": ["新建一个知识库", "放进他们已经在用的流程里，顺手留下", "专门的文档系统", "微信群"], "a": 1, "why": "摩擦越低，沉淀越可能发生。"}], "M7U1": [{"q": "先划数据边界还是先做功能？", "opts": ["先做功能，边做边划", "先划边界，再谈功能", "同时进行", "看项目大小"], "a": 1, "why": "边界后补意味着返工，甚至项目暂停。"}, {"q": "下面哪类数据绝对不该进公开模型？", "opts": ["公开的产品介绍", "客户名单与合同原文", "已发布的制度", "行业公开报告"], "a": 1, "why": "客户信息与合同属于高敏数据，外泄成本极高。"}], "M7U2": [{"q": "「可查看客户数据」这条权限描述缺了什么？", "opts": ["缺时间范围", "缺粒度（汇总还是明细）与范围（本区域还是全公司）", "缺审批人", "缺系统名"], "a": 1, "why": "没有粒度与范围，权限形同虚设。"}, {"q": "没有日志的权限系统，最大问题是？", "opts": ["性能差", "出事时无法追溯，只能整体停用", "界面不好看", "成本高"], "a": 1, "why": "无法追溯就无法定位与止损。"}], "M7U3": [{"q": "「自动给客户发送邮件」缺少的是哪类护栏？", "opts": ["输入护栏", "输出护栏", "动作护栏", "都不缺"], "a": 2, "why": "对外发送属于动作，必须有动作护栏与人工确认。"}, {"q": "人工兜底应该怎么设计？", "opts": ["能不用就不用", "作为模型不确定时的默认路径写清楚", "只在出错后加", "交给客户处理"], "a": 1, "why": "兜底是设计的一部分，要预先定义触发条件。"}], "M7U4": [{"q": "上线自检六项里最容易被漏掉的是？", "opts": ["数据边界", "兜底路径与责任人", "权限", "护栏"], "a": 1, "why": "兜底和责任人最不显眼，出事时却最要紧。"}, {"q": "自检为什么要有人签字？", "opts": ["流程要求", "自己勾自己容易漏，签字人承担确认责任", "便于归档", "显得正式"], "a": 1, "why": "第三方确认能显著降低漏检概率。"}], "M7U5": [{"q": "Gate 判据的最基本要求是？", "opts": ["领导认可", "可被第三方核对", "写得详细", "有时间点"], "a": 1, "why": "不可核对的判据等于没有 Gate。"}, {"q": "Gate 不达标时应该？", "opts": ["先推进，后面补", "停在原地补齐，宁可延期", "降低判据", "换人"], "a": 1, "why": "带病推进会让问题在后期放大。"}], "M7U6": [{"q": "端到端交付中最常断在哪两步？", "opts": ["挖需求与定场景", "搭版本与建评测（搭了不评测）", "沉淀与复制", "都不断"], "a": 1, "why": "很多团队搭完就演示，缺评测与验收，说不清做成没有。"}, {"q": "整门课反复强调的核心是？", "opts": ["模型越强越好", "每一步都留下可核对、可复用的证据", "多做 Demo", "多培训"], "a": 1, "why": "FDE 的价值是让 AI 落地可验证、可复制。"}]};

/* v157 账号级隔离 BEGIN */
function _axSession(){ try{ return JSON.parse(localStorage.getItem('ai_training_session')||'{}')||{}; }catch(e){ return {}; } }
function _axOwnerKey(){
  var s=_axSession();
  if(!s||(!s.user&&!s.name)) return '';
  if(s.role==='admin') return 'admin';
  if(s.role==='ent'){
    /* v164：企业学习数据按登录账号分桶 —— 一个 CO 账号一份记录，不再按姓名区分 */
    if(s.loginId) return 'ent:acct:'+s.loginId;
    return 'ent:'+(s.companyId||s.company||'');
  }
  if(s.loginType==='user'&&s.loginId) return 'user:'+s.loginId;
  if(s.loginType==='guest'&&s.loginId) return 'guest:'+(s.company||'')+':'+(s.phone||'')+':'+s.loginId;
  if(s.phone) return 'guest:'+(s.company||'')+':'+s.phone;
  if(s.loginId) return 'user:'+s.loginId;
  return '';
}
/* v162：老数据要认领，得先证明「是我的」，而且一台设备只结算一次。
   v157 的写法是「本机存在任何无主档案就允许认领」—— 只要留着一条 v157 之前的数据，
   之后每个新账号都会把同一份老进度复制到自己名下，换谁都看到同一个人的记录。 */
function _axLegacyIsMine(){
  var s=_axSession()||{}, es=[];
  try{ es=JSON.parse(localStorage.getItem('ai_training_employees')||'[]')||[]; }catch(e){ return false; }
  for(var i=0;i<es.length;i++){
    var e=es[i]; if(!e||e.ownerKey) continue;      // 有归属的走精确匹配，不算老证物
    if(s.loginId&&e.loginId&&String(e.loginId)===String(s.loginId)) return true;
    if(s.phone&&e.phone&&String(e.phone)===String(s.phone)) return true;
    if(s.name&&e.name&&s.company&&e.company&&e.name===s.name&&e.company===s.company) return true;
  }
  return false;
}
function _axHasMyRecords(own){
  try{
    var es=JSON.parse(localStorage.getItem('ai_training_employees')||'[]')||[];
    for(var i=0;i<es.length;i++){ if(es[i]&&(es[i].ownerKey||'')===own) return true; }
  }catch(e){}
  return _axLegacyIsMine();
}
function _axClaim(base){
  var own=_axOwnerKey(); if(!own) return;
  try{
    var key=base+'::'+own;
    if(localStorage.getItem(key)!=null) return;
    var mark='aidax_claim_'+base;
    if(localStorage.getItem(mark)) return;         // 这台设备的老数据已经结算过
    if(!_axHasMyRecords(own)) return;
    var legacy=localStorage.getItem(base);
    if(legacy!=null){ localStorage.setItem(key, legacy); localStorage.setItem(mark, own); }
  }catch(e){}
}
/* v164：本机老桶（ent:<公司> 或 v163 的 ent:<公司>:姓名）在账号首次打开时接管到 ent:acct:<登录账号>，
   否则换成分桶规则后进度会「归零」。一台设备每个账号只结算一次。 */
function _axMergeBucket(nk, ov){
  try{
    var nv=localStorage.getItem(nk); if(nv==null){ localStorage.setItem(nk, ov); return; }
    var a=JSON.parse(nv), b=JSON.parse(ov);
    if(!a||!b||typeof a!=='object'||typeof b!=='object'||a instanceof Array) return;
    for(var k in b){ if(!Object.prototype.hasOwnProperty.call(b,k)) continue;
      if(a[k]===undefined){ a[k]=b[k]; continue; }
      if(a[k]&&b[k]&&typeof a[k]==='object'&&typeof b[k]==='object'&&!(a[k] instanceof Array)){
        for(var k2 in b[k]){ if(Object.prototype.hasOwnProperty.call(b[k],k2)&&a[k][k2]===undefined) a[k][k2]=b[k][k2]; }
      }
    }
    localStorage.setItem(nk, JSON.stringify(a));
  }catch(e){}
}
function _axMigrate(){
  var s=_axSession()||{};
  if(s.role!=='ent'||!s.loginId) return;
  var mark='aidax_ent_migr_kv:'+s.loginId;
  try{ if(localStorage.getItem(mark)) return; }catch(e){ return; }
  var target='ent:acct:'+s.loginId, pref='ent:'+(s.companyId||s.company||'');
  try{
    var keys=[];
    for(var i=0;i<localStorage.length;i++){ var kk=localStorage.key(i); if(kk) keys.push(kk); }
    for(var j=0;j<keys.length;j++){
      var k=keys[j], idx=k.lastIndexOf('::'); if(idx<0) continue;
      var own=k.slice(idx+2);
      if(own!==pref && own.indexOf(pref+':')!==0) continue;
      var nk=k.slice(0,idx+2)+target, ov=localStorage.getItem(k)||'';
      if(localStorage.getItem(nk)==null){ localStorage.setItem(nk, ov); }
      else { _axMergeBucket(nk, ov); }
      localStorage.removeItem(k);
    }
    localStorage.setItem(mark,'1');
  }catch(e){}
}
function _axKey(base){ var own=_axOwnerKey(); if(own){ _axMigrate(); _axClaim(base); } return own? base+'::'+own : base; }
/* v162：换账号必须整页换账本。STORE / prog 都是加载时按当时的账号算好的，
   在别的标签页切号后只重画顶栏，进度仍读写上一个账号 —— 看起来就是「还是同一个人的记录」。 */
var _axBound=_axOwnerKey();
var _axReloading=false;
function _axWatch(){
  var now=_axOwnerKey();
  if(now===_axBound||_axReloading) return false;
  _axReloading=true;
  _axBound=now;
  location.reload();                 // 按新账号整页重载，避免半新半旧
  return true;
}
window.addEventListener('storage',function(e){ if(e.key==='ai_training_session') _axWatch(); });
window.addEventListener('focus',_axWatch);
window.addEventListener('pageshow',function(e){ if(e.persisted) _axWatch(); });
document.addEventListener('visibilitychange',function(){ if(document.visibilityState==='visible') _axWatch(); });
/* v157 账号级隔离 END */
const STORE=_axKey('aidax_fin_full_v2');
let prog = loadProg();
function loadProg(){ try{ return JSON.parse(localStorage.getItem(STORE))||{units:{},quizzes:{}}; }catch(e){ return {units:{},quizzes:{}}; } }
function saveProg(){ try{ localStorage.setItem(STORE, JSON.stringify(prog)); }catch(e){} syncMapProgress(); }

// 主站 URL 参数：?m=MX 深链定位模块；?weak=a,b 测评弱维（用于个性化高亮）。与主站进度 key 解耦又互通。
const UP=new URLSearchParams(location.search);
const WEAK=(UP.get('weak')||'').split(',').map(s=>s.trim()).filter(Boolean);
const DEEP_MODULE=UP.get('m')||'';

// 把学习进度回写主站（localStorage 同源共享），主站监听 storage 事件实时刷新。
// A6：不再只写「模块全通关」一个布尔值——逐单元写 done/watched/score，并给模块完成度 pct 与均分，
// 主站学习地图才能显示「做了几单元、得了多少分」，而不是要么 0% 要么 100%。
function syncMapProgress(){
  try{
    const key=_axKey('ai_training_progress');
    let cp={}; try{ cp=JSON.parse(localStorage.getItem(key))||{}; }catch(_){}
    const xp=totalXP();
    COURSE.modules.forEach((m,mi)=>{
      // cid 用模块编号（M3→m3），不用数组下标：样板间/子集课程里下标会错位（M3 变 m1），
      // 主站学习地图按 retail_pm_m3 取进度，对不上就永远显示 0%。
      const cid='newbie_grad_m'+String(m.id||('M'+mi)).replace(/^M/,'');
      const units={}; let doneCnt=0, scoreSum=0, scoreCnt=0, taskCnt=0;
      m.units.forEach(u=>{
        const st=prog.units[u.id]||{};
        if(st.done) doneCnt++;
        if(st.taskDone) taskCnt++;
        if(typeof st.score==='number'){ scoreSum+=st.score; scoreCnt++; }
        units[u.id]={done:!!st.done, watched:!!st.watched,
                     score:(typeof st.score==='number')?st.score:null};
      });
      const allDone=(doneCnt===m.units.length);
      const prev=cp[cid]||{};
      cp[cid]=Object.assign({},prev,{
        done:allDone, pct:Math.round(doneCnt/m.units.length*100),
        doneCount:doneCnt, unitCount:m.units.length,
        units:(Object.keys(units).length?units:prev.units||null),
        avgScore:(scoreCnt?Math.round(scoreSum/scoreCnt):null),
        xp:xp, updatedAt:Date.now()
      });
      if(allDone && !prev.completedAt) cp[cid].completedAt=Date.now();
    });
    localStorage.setItem(key, JSON.stringify(cp));
  }catch(_){}
}

/* ===================== 管理员预览模式 =====================
   开启方式：URL 带 ?admin=1 或 ?preview=1，或点击页头「管理员预览」开关。
   作用：顶部显示横幅，练习/陪练/测验标注为可选，结算可跳过测试直接标记已观看。
   对学员（未开启）流程零影响。 */
const ADMIN_KEY='aidax_newbie_grad_admin';
function isAdmin(){
  try{
    const p=new URLSearchParams(location.search);
    if(p.has('admin')||p.has('preview')){ try{localStorage.setItem(ADMIN_KEY,'1');}catch(e){} return true; }
    return localStorage.getItem(ADMIN_KEY)==='1';
  }catch(e){ return false; }
}
let ADMIN=isAdmin();
function toggleAdmin(){
  ADMIN=!ADMIN;
  try{ localStorage.setItem(ADMIN_KEY, ADMIN?'1':'0'); }catch(e){}
  applyAdminUI();
  if(prog.cur && findUnit(prog.cur)) openUnit(prog.cur);
}
function applyAdminUI(){
  const tg=document.getElementById('admin-toggle');
  if(tg) tg.textContent='管理员预览：'+(ADMIN?'开':'关');
  const bn=document.getElementById('admin-banner');
  if(bn) bn.style.display=ADMIN?'block':'none';
}
function refreshProg(){
  const u=Object.values(prog.units).filter(x=>x&&x.done).length;
  const tot=(typeof COURSE!=='undefined'&&COURSE.modules)?COURSE.modules.reduce((a,m)=>a+m.units.length,0):64;
  const pct=Math.round(u/(tot||64)*100);
  const q=Object.values(prog.quizzes).filter(Boolean).length;
  const sc=prog.scores? Object.values(prog.scores).filter(v=>typeof v==='number').length : 0;
  /* 顶栏只留一条进度条：具体数字收进设置面板 / 侧边栏，学员一眼看「走了多远」就够 */
  const bar=document.getElementById('prog-bar');
  if(bar){ bar.style.width=Math.max(pct?3:0,pct)+'%'; bar.parentNode.title='已完成 '+u+' / '+tot+' 单元'; }
  const set=function(id,v){ const e=document.getElementById(id); if(e) e.textContent=v; };
  set('prog-done',u); set('prog-total',tot); set('prog-pct',pct+'%');
  set('prog-quiz',q); set('prog-mods',(COURSE.modules||[]).length);
  set('prog-score',sc); set('prog-xp',totalXP()); set('admin-units',tot);
}

/* ===================== 设置面板 =====================
   分三块，每块都写清「改了会影响什么」，不留填了没用的框：
   ① 我的身份 —— 反馈署名与回访（本机保存）；
   ② AI 陪练场景 —— 只改陪练/评审提示词里的行业举例，不改课程正文；
      机构、产品两个词只有当课程正文里真的留了 {{company}}/{{product}} 占位符时才显示
      （零售深版正文全写实、占位符 0 处 → 不显示；金融课有 10/71 处 → 显示）；
   ③ 学习状态与高级项。 */
function phCount(k){
  try{ return (JSON.stringify(COURSE).match(new RegExp('\\{\\{'+k+'\\}\\}','g'))||[]).length; }catch(e){ return 0; }
}
function openCfg(){
  const box=document.getElementById('cfg-box'); if(!box) return;
  const tot=(typeof COURSE!=='undefined'&&COURSE.modules)?COURSE.modules.reduce((a,m)=>a+m.units.length,0):64;
  const done=Object.values(prog.units).filter(x=>x&&x.done).length;
  const nCom=phCount('company'), nPro=phCount('product');
  const hasId=!!(IDENT.name||IDENT.company);
  box.innerHTML='<h3 style="text-align:left">\u2699 设置</h3>'
    +'<div class="cfg-label">我的身份'+(hasId?'<span class="ident-chip" style="margin-left:8px">'+esc(identLabel())+'</span>':'')+'</div>'
    +'<div class="cfg-hint">只存本机浏览器，不上传。提交反馈时会带上，我们才知道是谁提的、怎么回访你；导出产出物也用它署名。</div>'
    +'<div class="cfg-row"><label>姓名</label><input id="id-name" placeholder="如：张三" value="'+esc(IDENT.name||'')+'"></div>'
    +'<div class="cfg-row"><label>企业</label><input id="id-company" placeholder="如：某连锁零售集团" value="'+esc(IDENT.company||'')+'"></div>'
    +'<div class="cfg-row"><label>岗位</label><input id="id-role" placeholder="'+esc(META.roleLabel)+'" value="'+esc(IDENT.role||'')+'"></div>'
    +'<div class="cfg-row"><label>联系方式</label><input id="id-contact" placeholder="微信 / 手机 / 邮箱（选填）" value="'+esc(IDENT.contact||'')+'"></div>'
    +'<div style="text-align:right;margin-top:6px"><button class="btn" onclick="saveIdent(1)">保存身份</button></div>'
    +'<hr class="cfg-sep">'
    +'<div class="cfg-label">AI 陪练场景</div>'
    +'<div class="cfg-row"><label>行业</label><input id="cfg-industry" value="'+esc(CUSTOM.industry)+'"></div>'
    +'<div class="cfg-hint">只影响 AI 陪练和评审时的举例与措辞，<b>不改课程正文</b>（正文固定为「'+esc(META.industry)+'」）。换成你自己公司所在的行业，陪练的例子会更贴你的活。</div>'
    +(nCom?'<div class="cfg-row"><label>机构</label><input id="cfg-company" value="'+esc(CUSTOM.company)+'"></div>':'')
    +(nPro?'<div class="cfg-row"><label>产品</label><input id="cfg-product" value="'+esc(CUSTOM.product)+'"></div>':'')
    +(nCom||nPro?'<div class="cfg-hint">本课程正文里有 '+nCom+' 处机构、'+nPro+' 处产品按此替换。</div>':'')
    +'<div style="text-align:right;margin-top:6px"><button class="btn ghost" onclick="applyCustom(1)">保存场景词</button></div>'
    +'<hr class="cfg-sep">'
    +'<div class="cfg-row"><span style="color:var(--mut)">学习进度</span><b style="margin-left:auto">'+done+' / '+tot+' 单元 · 积分 '+totalXP()+'</b></div>'
    +'<div class="cfg-row"><span style="color:var(--mut)">AI 能力</span><span class="llm" id="llm-badge" style="margin-left:auto" onclick="openLlm()"><i></i><span id="llm-text">检测中</span></span></div>'
    +'<div class="cfg-hint" id="llm-hint"></div>'
    +'<hr class="cfg-sep">'
    +'<div class="cfg-row"><button id="admin-toggle" class="admin-toggle" style="margin:0" onclick="toggleAdmin()">管理员预览：'+(ADMIN?'开':'关')+'</button>'
    +'<button class="btn ghost" style="margin-left:auto" onclick="closeCfg();openScore(\'capstone\')">\uD83C\uDFC1 结业产出物评审</button></div>'
    +'<div style="text-align:right;margin-top:14px"><button class="btn ghost" onclick="closeCfg()">关闭</button></div>';
  document.getElementById('cfg-modal').classList.add('on');
  applyAdminUI(); paintLlm();
}
function closeCfg(){ const m=document.getElementById('cfg-modal'); if(m) m.classList.remove('on'); }

/* ===================== 课程级元信息（A1：行业标识参数化） =====================
   由构建器注入 COURSE_META（course_kit.build_course），每门课各自一份；
   模板里不再出现任何写死的行业/课程名/红线话术，缺省值仅供金融课单跑时兜底。
   CUSTOM.industry 是「学员可改的行业词」，META.industry 是「课程出厂行业」，两者用途不同：
   - 陪练/评审提示词里的行业描述用 CUSTOM.industry（学员换成自己公司时跟着变）
   - 云端上报的 page/company、红线条款用 META（同一门课的记录必须聚到同一个位置） */
/* 构建器注入的课程元信息；未注入时为 null（回退到下面的金融缺省值，保证模板本身可独立运行） */
var META=Object.assign({
  title:'金融 × 产品经理 AI 实战 · 完整学习课程（M0–M7 · 64 单元）',
  industry:'金融', roleLabel:'产品经理(PM)', courseTag:'金融×PM 课程',
  cloudCompany:'金融PM课程',
  scenes:['信贷','财富','保险','支付'],
  redlines:['金融合规/风控/放款/营销适当性等结论必须由人拍板，你不替用户下定性业务结论。',
            '不编造监管条款、文件号、数据；不确定的明说「需人工核实」。',
            '不回显任何可识别个人数据，不生成误导性金融建议。']
},(typeof COURSE_META!=='undefined'&&COURSE_META)||{});
/* 占位符替换：默认词先取课程数据里的 customization（行业/机构/产品定制），不再写死金融默认值 */
let CUSTOM=Object.assign({industry:META.industry,company:'模拟机构 X',product:'主推产品'},(typeof COURSE!=='undefined'&&COURSE.customization)||{});
/* 本机自定义只认 v2 写入：旧版本存下来的是别的课程留下的值（如「游戏 / 模拟某游戏X / 棋牌游戏」），
   与当前课程行业不符却会盖掉默认值，表现就是「设置里写着游戏，课程内容却是零售电商」。 */
try{
  var _cs=localStorage.getItem('aidax_newbie_grad_custom');
  if(_cs){ var _co=JSON.parse(_cs); if(_co && Number(_co._v)>=2) CUSTOM=Object.assign(CUSTOM,_co); }
}catch(e){}

/* ===================== 学员身份（只存本机） =====================
   用途：① 提交反馈时带上姓名/企业，后台能对应到「是谁提的、哪个班、怎么回访」；
        ② 产出物导出时署名；③ AI 陪练可直呼姓名。
   只在本机 localStorage，不上传；仅随本人主动提交的反馈一起发送。 */
var IDENT=(function(){
  var d={name:'',company:'',role:'',contact:''};
  try{ var s=localStorage.getItem(_axKey('aidax_ident_v1')); if(s) d=Object.assign(d,JSON.parse(s)||{}); }catch(e){}
  if(!d.role) d.role=META.roleLabel;
  return d;
})();
function identLabel(){
  var n=(IDENT.name||'').trim(), c=(IDENT.company||'').trim();
  if(!n && !c) return '';
  return [n,c].filter(Boolean).join(' · ');
}
function saveIdent(close){
  var v=function(id){ var e=document.getElementById(id); return e? e.value.trim() : ''; };
  IDENT={name:v('id-name'),company:v('id-company'),role:v('id-role')||META.roleLabel,contact:v('id-contact')};
  try{ localStorage.setItem(_axKey('aidax_ident_v1'),JSON.stringify(IDENT)); }catch(e){}
  if(close) closeCfg();
  toast(IDENT.name? ('已保存身份：'+identLabel()) : '已保存（未填姓名，反馈会记为匿名学员）');
  var chip=document.getElementById('fb-ident-chip');
  if(chip) chip.textContent=identLabel()? ('👤 '+identLabel()) : '👤 未填身份 · 点这里补';
}
/* 默认播放倍速：产品决定默认 1.25×（用户明确要求「所有播放器默认 1.25 倍」）。
   代价要知晓：1.25× 会把 3.4 分钟的单元压到约 2.7 分钟，低于课程标准 3–4 分钟，
   且二次变速会削掉一部分自然停顿。倍速按钮保留，学员可随时退回 1.0×。 */
const RATE_DEF=1.25;
/* 单元真实音频秒数：有实测时长(d)用 d，没有才按字数估 0.205 秒/字 */
function unitSec(u){
  return ((u&&u.vslides)||[]).reduce(function(a,s){
    const d=Number(s.d);
    return a+(d>0?d:Math.max(2,sub(s.n).length*0.205));
  },0);
}
function sub(t){ return (t||'').replace(/\{\{industry\}\}/g,CUSTOM.industry).replace(/\{\{company\}\}/g,CUSTOM.company).replace(/\{\{product\}\}/g,CUSTOM.product); }
function applyCustom(close){
  const v=id=>{ const e=document.getElementById(id); return e? e.value.trim() : ''; };
  CUSTOM={industry:v('cfg-industry')||CUSTOM.industry,
          company:v('cfg-company')||CUSTOM.company,
          product:v('cfg-product')||CUSTOM.product,
          _v:2};
  try{ localStorage.setItem('aidax_newbie_grad_custom',JSON.stringify(CUSTOM)); }catch(e){}
  if(close) closeCfg();
  renderUnit(prog.cur); renderSidebar();
  toast('已保存：AI 陪练将按「'+CUSTOM.industry+'」举例');
}
const STEP_LABEL={understand:'理解',demo:'演示',todo:'我要做',spar:'陪练'};

/* ===================== 模型接入层 =====================
   唯一通道：课程自有 AI 陪练服务（Supabase Edge Function aidax-chat，DeepSeek Key 只放服务端 Secret）。
   探测顺序：localStorage 记住的地址 → 同源 /ping → Supabase aidax-chat → https://chat.aidax.cn/ping
   （本地 http 开发时再追加 127.0.0.1:3000）。/ping 必须返回 {ok:true,service:'aidax-llm-proxy'}，
   避免把 GitHub Pages 的 404 页面误判为服务可用。全部失败则降级本地规则引擎，学习不中断。
   前端不保存、不展示任何 API Key；模型固定 deepseek-flash（服务端强制，忽略前端传值）。 */
const CHAT_CANDIDATES = ['', 'https://nyqiwjwzbpnepamldqto.supabase.co/functions/v1/aidax-chat', 'https://chat.aidax.cn'];
if(location.protocol==='http:' || location.hostname==='127.0.0.1' || location.hostname==='localhost'){
  CHAT_CANDIDATES.push('http://127.0.0.1:3000');
}
let LLM = (function(){
  try{ return JSON.parse(localStorage.getItem('aidax_llm'))||{}; }catch(e){ return {}; }
})();
/* 旧版把本地代理 / 其他应用的云地址写进了 localStorage，统一迁移回同源 */
if(typeof LLM.base!=='string' || /127\.0\.0\.1:3000|workbuddy\.host/.test(LLM.base)) LLM.base='';
try{
  const q=new URLSearchParams(location.search).get('chat');
  if(q==='reset'){ LLM.base=''; saveLlm(); }
  else if(q) LLM.base=q;
}catch(e){}
LLM.state='unknown';                 /* unknown | proxy | off */
function saveLlm(){ try{ localStorage.setItem('aidax_llm', JSON.stringify({base:LLM.base})); }catch(e){} }
function chatOrigin(){ return LLM.base ? LLM.base.replace(/\/$/,'') : ''; }
const WORKER_FALLBACK_SYS='你是 AIDAX 企业 AI 实训课程的内嵌陪练教练。回答简洁具体、面向真实业务场景；需要真实数据的地方明确标出待填，绝不编造数字。';
async function pingAt(base){
  try{
    const ctl=new AbortController(); const t=setTimeout(()=>ctl.abort(),6000);
    let r;
    try{ r=await fetch((base?base.replace(/\/$/,''):'')+'/ping',{cache:'no-store',signal:ctl.signal}); }
    finally{ clearTimeout(t); }
    if(!r.ok) return false;
    const j=await r.json().catch(()=>null);
    return !!(j && j.ok===true && j.service==='aidax-llm-proxy');
  }catch(e){ return false; }
}
async function llmChat(messages, opts){
  if(LLM.state==='off') throw new Error('陪练服务未连接');
  let msgs=(messages||[]).slice();
  if(!msgs.length || msgs[0].role!=='system') msgs.unshift({role:'system',content:WORKER_FALLBACK_SYS});
  const body=Object.assign({model:'deepseek-flash',messages:msgs,temperature:0.6,max_tokens:700},opts||{});
  delete body.stream;
  const ctl=new AbortController(); const tm=setTimeout(()=>ctl.abort(),30000);
  try{
    const r=await fetch(chatOrigin()+'/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body),signal:ctl.signal});
    if(!r.ok){
      let m='HTTP '+r.status, code='';
      try{ const j=await r.json(); if(j&&j.error){ code=j.error.code||''; m=j.error.message||m; } }catch(e){}
      throw new Error((code?'['+code+'] ':'')+m);
    }
    const j=await r.json();
    const c=j&&j.choices&&j.choices[0]&&j.choices[0].message&&j.choices[0].message.content;
    if(!c) throw new Error('模型返回空回复');
    return String(c).trim();
  } finally { clearTimeout(tm); }
}
async function llmProbe(silent){
  const ordered=[];
  if(LLM.base) ordered.push(LLM.base);
  CHAT_CANDIDATES.forEach(x=>{ if(!ordered.includes(x)) ordered.push(x); });
  const res=await Promise.all(ordered.map(pingAt));
  const i=res.indexOf(true);
  LLM.state = i>=0 ? 'proxy' : 'off';
  if(i>=0){ LLM.base=ordered[i]; saveLlm(); }
  paintLlm();
  if(!silent && LLM.state==='off') openLlm();
  return LLM.state;
}
let _llmUiObs=null;
function paintLlm(){
  const b=document.getElementById('llm-badge');
  const t=document.getElementById('llm-text');
  const h=document.getElementById('llm-hint');
  if(b){
    b.classList.remove('on','off');
    if(LLM.state==='proxy') b.classList.add('on');
    else if(LLM.state==='off') b.classList.add('off');
  }
  if(t){
    if(LLM.state==='proxy') t.textContent='AI 陪练已就绪';
    else if(LLM.state==='off') t.textContent='AI 未连接 · 点此处理';
    else t.textContent='AI 能力检测中';
  }
  if(h){
    if(LLM.state==='proxy') h.innerHTML='已连接课程自带的 AI 陪练服务，回答由真实大模型生成；<b>判分与进度不受影响</b>。';
    else if(LLM.state==='off') h.innerHTML='AI 陪练服务暂未接通，已自动回退到本地规则引擎：照样能提问、能按规则点评，<b>判分与进度不受影响</b>，只是回答不如真模型灵活。可点上方状态查看说明。';
  }
  /* 状态条在「设置」面板里动态生成，页面加载时往往还不在 DOM 里。
     旧实现遇到元素缺失直接 return，导致学员打开设置也看不到真实状态；
     这里挂一次性观察器，元素出现后补画一次即断开。 */
  if(!b && !_llmUiObs && typeof MutationObserver!=='undefined'){
    _llmUiObs=new MutationObserver(()=>{
      if(document.getElementById('llm-badge')){ _llmUiObs.disconnect(); _llmUiObs=null; paintLlm(); }
    });
    try{ _llmUiObs.observe(document.documentElement,{childList:true,subtree:true}); }catch(e){ _llmUiObs=null; }
  }
}
function llmReady(){ return LLM.state==='proxy' || LLM.state==='unknown'; }

/* ===================== 模型接入弹窗 ===================== */
function openLlm(){
  paintLlm();
  const box=document.getElementById('llm-box');
  const ready=(LLM.state==='proxy');
  box.innerHTML='<div class="mclose" onclick="closeLlm()">\u2715</div>'
   +'<h3>AI 陪练能力</h3>'
   +'<div class="note" style="text-align:left;padding:10px 12px;'+(ready?'background:#ecfdf5;border-color:#86efac':'')+'">'
   +(ready
     ? '<b style="color:#166534">\u2713 已就绪，学员无需任何配置</b><div style="margin-top:6px">AI 陪练、演示生成、实操点评都走课程自带的模型服务，打开网页直接可用。</div>'
     : '<b>当前未连接 AI 陪练服务</b><div style="margin-top:6px">课程已自动回退到本地规则引擎：能提问、能按规则点评，判分与进度不受影响，只是回答不如真模型灵活。服务由企业统一配置，学员无需任何操作。</div>')
   +'</div>'
   +'<div class="note" style="margin-top:10px;text-align:left;padding:10px 12px">出于安全，页面<b>不接受学员填写 API Key</b>；如持续显示未连接，请联系课程管理员检查陪练服务状态。</div>'
   +'<div class="acts" style="margin-top:14px">'
   +'<button class="btn" onclick="saveLlmForm()">重新检测</button>'
   +'<button class="btn ghost" onclick="closeLlm()">关闭</button></div>'
   +'<div id="llm-res" style="margin-top:10px;font-size:12.6px"></div>';
  document.getElementById('llm-modal').classList.add('on');
}
function closeLlm(){ document.getElementById('llm-modal').classList.remove('on'); }
async function saveLlmForm(){
  const st=await llmProbe(true);
  const res=document.getElementById('llm-res');
  if(st==='proxy'){
    let msg='陪练服务已连接';
    try{ const t=await llmChat([{role:'user',content:'回复两个字：可用'}],{max_tokens:8}); msg='模型回话正常：'+t; }
    catch(e){ msg='服务已连通，但调用失败：'+esc(e.message); }
    res.innerHTML='<span style="color:#166534">\u2713 '+esc(msg)+'</span>';
  } else {
    res.innerHTML='<span style="color:#be123c">\u2717 未连上陪练服务。</span>'
      +'<div style="margin-top:4px">已探测课程同源地址与备用服务地址，均未响应；课程继续使用本地规则引擎，学习不中断。</div>';
  }
}

/* ===================== 侧栏（问题 8：跟随当前学习进度） ===================== */
function curModIndex(){
  const i=COURSE.modules.findIndex(m=>m.units.some(x=>x.id===prog.cur));
  return i<0?0:i;
}
function renderSidebar(){
  const sb=document.getElementById('sidebar'); sb.innerHTML='';
  const openIdx=curModIndex();
  /* 短板标记的分寸：原先只要模块沾到任一弱维就打「📌 短板」，学员 8 维全弱时整栏 8 个模块全红，
     等于没给优先级。现在弱维 ≤4 时照常全标；超过 4 个只标命中数最多的前 3 个模块。 */
  const hitCnt = COURSE.modules.map(m=>((m.dims||[]).filter(d=>WEAK.includes(d)).length));
  const markAll = WEAK.length <= 4;
  const topIdx = new Set(hitCnt.map((n,i)=>({n:n,i:i})).filter(x=>x.n>0)
    .sort((a,b)=>b.n-a.n).slice(0,3).map(x=>x.i));
  /* v157 weak-reorder：按弱维命中数把模块重排到前面（测评「建议必修」），
     但全套模块照常全部渲染，不 filter、不锁 —— 必修/选修只是建议。
     展开态改用模块 id 判断：排序后遍历序号已不是原始模块序号，用 mi 会错位。 */
  const openModId = (COURSE.modules[openIdx]||{}).id;
  const DISPLAY = COURSE.modules.map((m,i)=>({m:m, i:i, hit:hitCnt[i]||0}))
    .map(function(e){
      /* 教学约束：M0 导论（边界预期）恒定第一、M7 合规与结业恒定最后，
         只重排中间 M1–M6 —— 没建立「什么不能交」就先学提示词有数据外泄风险。 */
      const L=COURSE.modules.length-1;
      e.rank = e.i===0 ? -1 : (e.i===L ? 2 : (e.hit>0 ? 0 : 1));
      return e;
    })
    .sort((a,b)=> a.rank-b.rank || a.i-b.i);
  DISPLAY.forEach(function(entry){
    const m=entry.m, mi=entry.i;
    const mod=document.createElement('div'); mod.className='mod'+(m.id===openModId?' open':'');
    const done=m.units.filter(u=>prog.units[u.id]&&prog.units[u.id].done).length;
    const allDone=done===m.units.length;
    const passed=!!prog.quizzes[m.id];
    const weakHit = m.dims && m.dims.some(d=>WEAK.includes(d)) && (markAll || topIdx.has(mi));
    if(weakHit) mod.className+=' weak';
    const hd=document.createElement('div'); hd.className='mod-h';
    /* 模块标题在数据里可能自带「M1 」前缀（应届生深版就是），侧栏已单独渲染代号，
       不剥掉就会显示成「M1 M1 写出第一句好用的提示词」。 */
    const mTitle=modTitle(m);
    hd.innerHTML='<div class="mh-top"><span class="mid">'+m.id+'</span><span class="mtitle">'+esc(mTitle)+'</span></div>'
      +'<div class="mh-meta">'
      +(allDone?'<span class="mdone">'+done+'/8 已通关</span>':'<span class="mdone" style="color:var(--mut);font-weight:500">'+done+'/8</span>')
      +(weakHit?'<span class="mweak" style="font-size:11px;color:#dc2626;border:1px solid #fecaca;background:#fef2f2;border-radius:6px;padding:0 5px;cursor:default;white-space:nowrap">📌 短板</span>':'')
      +'<span class="mquiz" style="'+(passed?'color:#166534;border-color:#86efac;background:#ecfdf5':'')+'">'+(passed?'\u2713 测验':'\uD83D\uDCDD 测验')+'</span>'
      +'</div>';
    const body=document.createElement('div'); body.className='mod-b';
    m.units.forEach(u=>{
      const el=document.createElement('div');
      el.className='unit'+(prog.cur===u.id?' active':'')+((prog.units[u.id]&&prog.units[u.id].done)?' done':'');
      el.innerHTML='<span class="ut">'+esc(u.title)+'</span><span class="st">'+STEP_LABEL[u.step]+'</span>';
      el.onclick=()=>openUnit(u.id);
      body.appendChild(el);
    });
    mod.appendChild(hd); mod.appendChild(body);
    hd.onclick=()=>mod.classList.toggle('open');
    hd.querySelector('.mquiz').onclick=ev=>{ ev.stopPropagation(); openQuiz(m.id); };
    sb.appendChild(mod);
  });
  const ft=document.createElement('div'); ft.className='sb-foot';
  ft.innerHTML='<button class="sb-cap" onclick="openScore(\'capstone\')">\uD83C\uDFC1 结业产出物评审</button>';
  sb.appendChild(ft);
  const act=sb.querySelector('.unit.active');
  if(act && act.scrollIntoView) act.scrollIntoView({block:'nearest'});
}

/* ===================== 单元主页 ===================== */
let CUR=null;   /* 当前单元播放器句柄，切换单元时先 stop */
let CHECK=null; /* 多邻国式分步通关状态：{uid, idx, steps} */
/* 配音预取：手机上点播放到出声要等一段下载，很像「点了没反应」。
   ⚠️ 用媒体元素预取，别用 fetch：audio 发的是 Range 请求，fetch 下来的整包缓存
   满足不了 Range，等于白下（这个坑踩过）。媒体元素之间共享媒体缓存，所以有效。
   预取只下载不播放，muted 保证不会有声。 */
let _pf={}, _pfOrder=[];
function prefetchAud(u){
  const url=audUrl(u);
  if(!url) return Promise.resolve();
  if(_pf[url]) return Promise.resolve();
  return new Promise(function(res){
    try{
      const a=new Audio(); a.preload='auto'; a.muted=true; a.src=url;
      _pf[url]=a; _pfOrder.push(url);
      /* 只留最近 12 段，别让长逛的用户攒一堆实例吃内存 */
      while(_pfOrder.length>12){ const old=_pfOrder.shift(); try{ _pf[old].src=''; }catch(e){} delete _pf[old]; }
      let done=false;
      const fin=function(){ if(done) return; done=true; res(); };
      a.addEventListener('canplaythrough',fin,{once:true});
      a.addEventListener('error',fin,{once:true});
      setTimeout(fin, 25000);
      try{ a.load(); }catch(e){}
    }catch(e){ res(); }
  });
}
/* 整单元顺序预取：第一段立刻拉，后面两段等前一段落地再排队，
   避免三段并发抢同一条慢链路，把第一段拖得更久。 */
function prefetchUnit(list){
  const q=(list||[]).slice();
  (function step(){
    const one=q.shift();
    if(!one) return;
    prefetchAud(one).then(function(){ setTimeout(step, 60); });
  })();
}

function findUnit(uid){ for(const m of COURSE.modules){ const u=m.units.find(x=>x.id===uid); if(u) return {m,u}; } return null; }
function flatUnits(){ const a=[]; COURSE.modules.forEach(m=>m.units.forEach(u=>a.push(u))); return a; }
function nextUnit(uid){ const a=flatUnits(), i=a.findIndex(x=>x.id===uid); return i>=0&&i+1<a.length?a[i+1]:null; }
function prevUnit(uid){ const a=flatUnits(), i=a.findIndex(x=>x.id===uid); return i>0?a[i-1]:null; }

function toggleSb(){
  const sb=document.querySelector('.sidebar'); if(sb) sb.classList.toggle('open');
}
function closeSb(){
  const sb=document.querySelector('.sidebar'); if(sb) sb.classList.remove('open');
}
function openUnit(uid){
  prog.cur=uid; saveProg(); renderUnit(uid); renderSidebar();
  const mn=document.getElementById('main'); if(mn) mn.scrollTop=0;
  /* 手机上选完单元就把目录收起来：目录是为了选单元，不是用来一直占屏幕的 */
  if(window.innerWidth<=860) closeSb();
}

function renderUnit(uid){
  if(CUR){ try{CUR.stop();}catch(e){} CUR=null; }
  const f=findUnit(uid); if(!f) return;
  const {m,u}=f;
  CHECK={uid:uid, idx:resumeIdx(uid), steps:buildSteps(u)};
  const mn=document.getElementById('main');
  mn.innerHTML='<div class="stepper" id="stepper"></div><div class="cp" id="cp"></div>';
  if(mn) mn.scrollTop=0;
  renderCheckpoint();
  /* 进单元先只拉第一段配音：第一段独占带宽才出得来第一声，
     后两段等真的开始播了再补（见 audio.onplaying），别在进页面时三段一起抢。 */
  const _aud=(typeof AUDIO!=='undefined'&&AUDIO[uid])||[];
  if(_aud[0]) prefetchAud(_aud[0]);
}

/* ===== 多邻国式分步通关 ===== */
function buildSteps(u){
  /* 三步制：看视频 → 做任务 → 结算。
     以前凡是有 deliverable 的单元都多插一步「交付物与陪练」，结果**理解型单元**
     （纯方法论、课上根本没有 AI 工具演示）也会弹「▶ 开始实战（复制陪练指令）」，
     点进去是一个没有靶子的空壳陪练——学员练两次就不信陪练了。
     现在：理解/演示环节做完自检与记录直接结算；产出与陪练只在「我要做 / 陪练」环节里。 */
  return [{key:'watch',icon:'\uD83D\uDCFA',title:'看视频'},
          {key:'task',icon:'\uD83D\uDCDD',title:'做任务'},
          {key:'settle',icon:'\uD83C\uDFC1',title:'结算'}];
}
function resumeIdx(uid){
  const st=prog.units[uid]||{};
  if(!st.watched) return 0;
  if(!st.taskDone) return 1;
  return 2;
}
function renderStepper(){
  const el=document.getElementById('stepper'); if(!el||!CHECK) return;
  const pct=CHECK.steps.length>1? Math.round(CHECK.idx/(CHECK.steps.length-1)*100):0;
  let h='';
  CHECK.steps.forEach((s,i)=>{
    const cls='st'+(i===CHECK.idx?' cur':'')+(i<CHECK.idx?' done':'');
    const ck=i<CHECK.idx?'✓':'';
    h+='<span class="'+cls+'"'+(i<CHECK.idx?' onclick="jumpStep('+i+')" style="cursor:pointer" title="回到这一步"':'')+'><span class="si">'+s.icon+'</span>'+s.title+(ck?' <span class="ck">'+ck+'</span>':'')+'</span>';
  });
  h+='<span class="sbar"><i style="width:'+pct+'%"></i></span>';
  el.innerHTML=h;
}
function renderCheckpoint(){
  if(!CHECK) return;
  if(CUR){ try{CUR.stop();}catch(e){} CUR=null; }
  const {uid}=CHECK;
  const f=findUnit(uid); if(!f) return;
  const {m,u}=f;
  const step=CHECK.steps[CHECK.idx];
  const cp=document.getElementById('cp');
  const mins=(unitSec(u)/60/RATE_DEF).toFixed(1);
  const ui=m.units.indexOf(u);
  if(step.key==='watch'){
    cp.className='cp';
    cp.innerHTML='<div class="cp-head"><div class="cp-title">\uD83D\uDCFA 视频讲解</div>'
      +'<div class="cp-sub">第 '+(ui+1)+'/'+m.units.length+' 单元 · 约 '+mins+' 分钟（'+RATE_DEF+'\u00D7 速）</div></div>'
      + objBox(u)
      +'<div class="card"><h3>\uD83C\uDFAC 视频讲解<span class="h3lnk" onclick="openSparChat(\''+uid+'\')">边看边问 ›</span></h3>'
      +'<div class="vwrap" id="p-wrap">'
      +'<div class="vp"><div class="stage" id="p-stage"></div><div class="dots" id="p-dots"></div>'
      +'<div class="pbuf" id="p-buf"><i></i><span id="p-buft">正在加载配音…</span></div>'
      +'<div class="cap" id="p-sub">点击播放，字幕与人声同步</div></div>'
      +'<div class="vbar"><button class="play" id="p-play">\u25B6 播放</button>'
      +'<div class="seek" id="p-seek"><div class="fill"></div><div class="knob"></div></div>'
      +'<span class="time" id="p-time">0:00 / 0:00</span>'
      +'<button class="pbtn" id="p-rate" title="倍速播放（默认 '+RATE_DEF+'\u00D7）">'+RATE_DEF+'\u00D7</button>'
      +'<button class="pbtn" id="p-fs" title="全屏观看">\u26F6 全屏</button></div>'
      +'</div>'
      +'<div class="aud-note" id="p-note"></div></div>'
      +'<details class="cp-notes"><summary>\uD83D\uDCCC 本课要点（讲义）</summary>'
      +'<div class="kv"><b>方法论：</b>'+sub(u.ppt.method)+'</div>'
      +'<div class="kv"><b>案例：</b>'+sub(u.ppt.case)+'</div>'
      +'<div class="kv"><b>演示要点：</b>'+sub(u.ppt.demo)+'</div></details>'
      +'<details class="cp-notes"><summary>\uD83D\uDDDE\uFE0F 本单元怎么学</summary>'+guideCard(uid,m,u,prog.units[uid]||{})+'</details>'
      +'<div class="cp-actions">'
      +'<button class="btn" onclick="setWatched(\''+uid+'\')">✓ 我看完了，下一步 →</button>'
      +'</div>';
    const aud=(AUDIO[uid]||null);
    const note=document.getElementById('p-note');
    if(note){ note.textContent = aud? '' : '本节语音制作中，暂用系统朗读'; note.style.display = aud? 'none' : ''; }
    CUR=makePlayer(uid,u.vslides,aud);
  } else if(step.key==='task'){
    cp.className='cp';
    cp.innerHTML='<div class="cp-head"><div class="cp-title">\uD83D\uDCDD 做任务</div>'
      +'<div class="cp-sub">'+STEP_LABEL[u.step]+'环节 · '+STEP_HINT[u.step]+'</div></div>'
      +'<div id="act-area"></div>';
    renderActivity(u,uid);
  } else if(step.key==='deliv'){
    /* 已取消独立的「交付物与陪练」步骤：产出/陪练都留在「做任务」里，避免理解型单元被迫做空壳陪练。
       这里保留兜底，防止旧进度里残留的 deliv 序号把页面渲染成空白。 */
    cp.className='cp';
    cp.innerHTML='<div class="cp-head"><div class="cp-title">\uD83D\uDCE6 交付物</div></div>'
      + delivStrip(u)
      +'<div class="cp-actions"><button class="btn" onclick="setDelivSeen(\''+uid+'\')">继续 →</button></div>';
  } else {
    cp.className='cp centered settle';
    const st=prog.units[uid]||{};
    const nx=nextUnit(uid);
    const score=st.score||0;
    cp.innerHTML='<div style="font-size:40px">\uD83C\uDF89</div>'
      +'<div class="cp-title" style="margin-top:6px">本单元通关</div>'
      +'<div class="cp-score">+'+score+' 分</div>'
      +'<p style="font-size:13px;color:#5b7a63">你已完成「'+sub(u.title)+'」，累计积分 '+totalXP()+' 分。</p>'
      + trBox(u)
      /* 任务做完就地把标准答案放出来：哪几格选项判对、AI 输出该删/改/补哪几处。
         情景题单元才需要（理解型单元只有选择题和收获，那边自带解析）。 */
      + ((shOf(u)&&st.taskDone)?('<details class="ansbox" open><summary>\uD83D\uDCD6 标准答案 · 逐格对答 + 模型输出该改哪几处</summary>'+shRefHtml(u)+'</details>'):'')
      +'<div class="cp-actions">'
      +(nx?'<button class="btn ok" onclick="openUnit(\''+nx.id+'\')">继续下一个单元 →</button>':'<button class="btn ok" onclick="openUnit(\'M0U1\')">回到起点重学</button>')
      +'</div>'
      +'<div style="margin-top:10px;font-size:12.6px">'
      +((u.step==='todo'||u.step==='spar')?'<span class="lnk" onclick="openScore(\''+uid+'\')">请 AI 评审官给这份产出打分 ›</span>　':'')
      +'<span class="lnk" onclick="replayUnit(\''+uid+'\')">再练一遍本单元 ›</span></div>';
  }
  renderStepper();
}
function jumpStep(i){ if(!CHECK) return; if(i>=CHECK.idx) return; CHECK.idx=i; renderCheckpoint(); }
function advCheck(){ if(!CHECK) return; if(CHECK.idx<CHECK.steps.length-1){ CHECK.idx++; renderCheckpoint(); } else { renderCheckpoint(); } }
function prevCheck(){ if(!CHECK) return; if(CHECK.idx>0){ CHECK.idx--; renderCheckpoint(); } }
function setWatched(uid){ const st=prog.units[uid]||{}; prog.units[uid]=Object.assign({},st,{watched:true}); saveProg(); if(CUR){try{CUR.stop();}catch(e){}CUR=null;} advCheck(); }
function setDelivSeen(uid){ const st=prog.units[uid]||{}; prog.units[uid]=Object.assign({},st,{delivSeen:true}); saveProg(); advCheck(); }
function totalXP(){ let s=0; for(const k in prog.units){ const u=prog.units[k]; if(u&&u.done) s+=(u.score||0); } return s; }
function replayUnit(uid){ const st=prog.units[uid]||{}; prog.units[uid]=Object.assign({},st,{watched:false,taskDone:false,delivSeen:false,done:false,acts:{},score:0,detail:[]}); saveProg(); refreshProg(); renderSidebar(); openUnit(uid); }

/* ===================== P1：可运行产出物卡片 + 真·AI 陪练（路线①） ===================== */
/* 徽标文字一律中文；CSS class 仍用英文 key 走配色。
   历史问题：map 的值就是 key 本身，页面上直接显示「skill / agent」英文，学员看不懂。 */
var DELIV_TXT={skill:'技能',agent:'智能体',workflow:'工作流',kb:'知识库'};
function delivTxt(t){ return DELIV_TXT[t]||'技能'; }
function delivBadge(t){
  const k=DELIV_TXT[t]?t:'skill';
  return '<span class="badge '+k+'">'+esc(delivTxt(t))+'</span>';
}
/* 可测学习目标 / 行为转化提示：老课程没有这两个字段，函数返回空串即不渲染，向后兼容。 */
function objBox(u){
  if(!u||!u.objective) return '';
  return '<div class="objbox"><span class="ob-t">\uD83C\uDFAF 学完你能做到</span>'+esc(sub(u.objective))+'</div>';
}
function trBox(u){
  if(!u||!u.transfer) return '';
  return '<div class="trbox"><span class="tb-t">\uD83D\uDE80 回工位第一件事（48 小时内）</span>'+esc(sub(u.transfer))+'</div>';
}
/* A2：模板 / 范例的统一取值口。
   历史上这里取的是 d.templateText / d.exemplarText，而构建器从未写过这两个字段
   （模板在 u.template，范例在 u.practice.exemplar），结果「查看范例」按钮压根不渲染、
   陪练提示词恒为「（暂无范例）」。现在统一从单元对象取，两处旧字段仅作历史兼容。 */
function artTexts(u){
  var d=(u&&u.deliverable)||null;
  // 优先级：交付物上内联的正文（金融课由 build_full_course.py 内联完整模板/范例）
  //        → 单元级 template / practice.exemplar / exemplar（course_kit 生成的课）
  var tpl=(d&&d.templateText)||(u&&u.template)||'';
  var ex=(d&&d.exemplarText)||(u&&u.practice&&u.practice.exemplar)||(u&&u.exemplar)||'';
  return {tpl:tpl, ex:ex};
}
/* 模板里常自带一整套「参考样式」（8 项工作 + 耗时 + 红线 + 责任人，够得上一份完整答案）。
   把它当模板摆出来，学员就会整段贴回输入框。这里把它拆出来单列为范例：
   骨架负责「照着填」，范例负责「照着看颗粒度」，两件事不混在一屏。 */
function splitTplSample(tpl){
  const s=sub(tpl||'');
  const m=s.match(/^[ \t]*(?:■[ \t]*)?(参考样式|参考范例|参考答案|示例|样例|范例)[ \t]*[（(:：]/m);
  if(!m || m.index<0) return {skel:s, sample:''};
  return {skel:s.slice(0,m.index).trim(), sample:s.slice(m.index).trim()};
}
/* 交付物摘要条：只回答「交什么、按什么验收、评审看哪三条」。
   独立「交付物与陪练」步骤取消后，这三行信息并进「做任务」页顶部，不再单独占一屏。 */
function delivStrip(u){
  const d=u&&u.deliverable;
  if(!d||typeof d!=='object'||!d.name) return '';
  const rub=(d.rubric&&d.rubric.length)? d.rubric.join(' \u00B7 ') : '';
  const bcls=(d.type==='agent')?'agent':(d.type==='workflow')?'workflow':(d.type==='kb')?'kb':'skill';
  return '<div class="dstrip">'
    +'<div class="ds-h"><b>交这个：'+esc(d.name)+'</b>'+(d.type?('<span class="badge '+bcls+'">'+esc(delivTxt(d.type))+'</span>'):'')+'</div>'
    +(d.acceptance?('<div class="ds-a">验收：'+esc(d.acceptance)+'</div>'):'')
    +(rub?('<div class="ds-r">评审看：'+esc(rub)+'</div>'):'')
    +'</div>';
}
function openArt(kind,uid){
  const f=findUnit(uid); if(!f) return;
  const d=f.u.deliverable; if(!d) return;
  const A=artTexts(f.u);
  const text = kind==='tpl'? A.tpl : A.ex;
  const title = kind==='tpl'? ('模板 · '+d.name) : ('范例 · '+d.name);
  const box=document.getElementById('art-box');
  box.innerHTML='<h3 style="text-align:left">'+esc(title)+'</h3>'
    +'<div class="art-body">'+esc(text||'（内容缺失）')+'</div>'
    +'<div class="acts"><button class="btn" onclick="copyArt(\''+kind+'\',\''+uid+'\')">\uD83D\uDCCB 复制全文</button><button class="btn ghost" onclick="closeArt()">关闭</button></div>';
  document.getElementById('art-modal').classList.add('on');
}
function copyArt(kind,uid){
  const f=findUnit(uid); if(!f) return;
  const A=artTexts(f.u);
  copyText(kind==='tpl'? A.tpl : A.ex);
}
function closeArt(){ document.getElementById('art-modal').classList.remove('on'); }
function buildSparPrompt(u,m,d){
  const STEP_LABEL={understand:'理解',demo:'演示',practice:'我要做',spar:'陪练'};
  const stepLabel=STEP_LABEL[u.step]||u.step||'学习';
  const DIM_NAME={prompt:'提示词工程',tools:'AI工具实战',data:'AI数据分析与决策',content:'AI内容创作',
                  dev:'AI辅助开发',workflow:'AI协同工作流',security:'AI安全与合规',strategy:'AI战略思维'};
  const dims=(m.dims&&m.dims.length)? m.dims.map(function(k){return DIM_NAME[k]||k;}).join('、') : 'AI 通用能力';
  let rub=(d&&d.rubric&&d.rubric.length)? d.rubric.join('、')
        : (u.rubric? (Array.isArray(u.rubric)? u.rubric.join('、') : u.rubric) : '完整性、可用性、红线合规');
  const acc=(d&&d.acceptance)? d.acceptance : '产出可独立带回工作使用';
  const A=artTexts(u);
  const tpl=A.tpl||'（本单元无特定模板）';
  const ex=A.ex||'（暂无范例）';
  const brief=(u.brief||'').slice(0,600);
  const task=(u.task||'').slice(0,400);
  const dn=(d? (d.type+' —— 《'+d.name+'》') : '本单元产出');
  const L=[];
  L.push('# 角色');
  L.push('你是「'+META.courseTag+' · '+modTitle(m)+' ·（'+stepLabel+'环节）《'+u.title+'》」的专属 AI 陪练（资深带教导师）。');
  L.push('学员正在学习，并要亲手产出：'+dn+'。');
  L.push('');
  L.push('# 你的使命');
  L.push('用苏格拉底式引导，帮助学员**自己**把这份产出做出来，而不是替他写。最终学员的产出要能对照下方验收标准打到「通过」。');
  L.push('');
  L.push('# 学员背景（本单元）');
  L.push('- 行业：'+CUSTOM.industry+'；岗位：'+META.roleLabel);
  L.push('- 能力维度：'+dims);
  if(brief) L.push('- 单元要点：'+brief);
  if(task)  L.push('- 本单元任务：'+task);
  L.push('- 产出模板（引导学员按此结构填）：见「模板」');
  L.push('- 合格范例（仅作对照，禁止直接给学员照搬）：见「范例」');
  L.push('');
  L.push('# 陪练工作流');
  L.push('1. 先澄清：问学员当前理解、卡点（一次只问一个关键问题）。');
  L.push('2. 带拆解：把《'+(d?d.name:'本单元产出')+'》拆成 3–5 个可执行子任务，先让学员说思路。');
  L.push('3. 让动手：要求学员产出具体段落/字段，不接受泛泛而谈。');
  L.push('4. 评与改：对照验收标准与 rubric 给 0–100 分 + Top3 改进项，明确「通过 / 待改进」。');
  L.push('5. 通关：达标后总结这份产出可直接带回工作用的要点。');
  L.push('');
  L.push('# 评分标准（rubric）');
  L.push(rub);
  L.push('');
  L.push('# 验收标准');
  L.push(acc);
  L.push('');
  L.push('# 模板');
  L.push(tpl);
  L.push('');
  L.push('# 范例（仅作对照，禁止直接照搬给学员）');
  L.push(ex);
  L.push('');
  L.push('# 红线（必须遵守）');
  META.redlines.forEach(function(x){ L.push('- '+x); });
  L.push('- 全程中文，语气像资深带教导师，给具体、可执行的反馈。');
  return L.join('\n');
}
function openSparAI(uid, silent){
  const f=findUnit(uid); if(!f) return;
  const m=f.m, u=f.u, d=u.deliverable||null;
  const prompt=buildSparPrompt(u,m,d);
  window.__sparPrompt=prompt;
  copyText(prompt); // 进入即自动复制
  if(silent){ launchWorkBuddy(); toast('\uD83E\uDD4A 陪练指令已复制，粘到 WorkBuddy 就能开练'); return; }
  const box=document.getElementById('art-box');
  box.innerHTML='<h3 style="text-align:left">\uD83E\uDD4A 真·AI 陪练（路线① · 零后端）</h3>'
    +'<p style="text-align:left;color:var(--muted)">陪练指令已自动复制到剪贴板 ✓。去 WorkBuddy 新建对话 → 把指令粘贴为系统设定 → 把你的产出贴给它即可开练。下方可查看 / 再复制完整指令。</p>'
    +'<div class="art-body">'+esc(prompt)+'</div>'
    +'<div class="acts">'
      +'<button class="btn" onclick="copyText(window.__sparPrompt)">\uD83D\uDCCB 再复制一次</button>'
      +'<button class="btn ghost" onclick="launchWorkBuddy()">打开 WorkBuddy</button>'
      +'<button class="btn ghost" onclick="closeArt()">关闭</button>'
    +'</div>';
  document.getElementById('art-modal').classList.add('on');
}
function launchWorkBuddy(){
  // 同步唤起，确保在用户手势内：先开网页版（可手动粘贴），再尝试客户端 scheme
  try{ window.open('https://www.workbuddy.cn/','_blank'); }catch(e){}
  try{ const a=document.createElement('a'); a.href='workbuddy://new'; a.style.display='none'; document.body.appendChild(a); a.click(); a.remove(); }catch(e){}
  toast('已打开 WorkBuddy，指令在剪贴板，去粘贴即可');
}
/* ===================== P3：产出物评审 · AI 打分（路线①·零后端） ===================== */
function buildScorePrompt(d, learnerText, u){
  const name=(d&&d.name)? d.name : '结业产出物';
  const type=(d&&d.type)? d.type : 'artifact';
  const rub=(d&&d.rubric&&d.rubric.length)? d.rubric.join('、') : '完整性、可用性、合规';
  const acc=(d&&d.acceptance)? d.acceptance : '产出可独立带回工作使用';
  const A=artTexts(u);
  const tpl=A.tpl||(d&&d.templateText)||'（无特定模板）';
  const ex=A.ex||(d&&d.exemplarText)||'（暂无范例）';
  const L=[];
  L.push('# 角色');
  L.push('你是「'+META.courseTag+' · 产出物评审官」。你负责按统一三维 rubric 评审学员产出的 '+type+'：《'+name+'》。只评审、不代写。');
  L.push('');
  L.push('# 评审任务');
  L.push('下面是一份学员提交的产出物。请严格按三维 rubric 打分并给改进建议，不要替学员重写，只指出该怎么改。');
  L.push('');
  L.push('# 三维 rubric（每项先给 0–100 子分，再给综合分）');
  L.push('- 完整性：是否覆盖《'+name+'》应含的关键结构与要素（对照下方模板 / 范例）。');
  L.push('- 可用性：学员拿到后能否真正用于工作（可落地、可执行、无空洞、贴合'+CUSTOM.industry+' '+META.roleLabel+'的实际场景）。');
  L.push('- 合规：是否触碰本课程红线（'+META.redlines.map(function(x){return x.replace(/。$/,'');}).join('；')+'）；如有必须明确指出。');
  L.push('');
  L.push('# 评分标准');
  L.push(rub);
  L.push('');
  L.push('# 验收标准');
  L.push(acc);
  L.push('');
  L.push('# 期望模板（评审时对照结构）');
  L.push(tpl);
  L.push('');
  L.push('# 合格范例（仅作结构对照，不要要求学员照抄）');
  L.push(ex);
  L.push('');
  L.push('# 学员提交的产出物');
  L.push('```');
  L.push(learnerText);
  L.push('```');
  L.push('');
  L.push('# 输出格式（必须照此返回）');
  L.push('1. 三维子分：完整性 X / 可用性 Y / 合规 Z（各 0–100）');
  L.push('2. 综合分：N / 100');
  L.push('3. 结论：通过 / 待改进（综合 ≥ 60 为通过）');
  L.push('4. Top3 改进项（具体、可操作，指向能改的地方）');
  L.push('5. 一句话点评');
  return L.join('\n');
}
function openScore(uid){
  let d=null, name='', key='capstone', unit=null;
  if(uid && uid!=='capstone'){
    const f=findUnit(uid); if(!f||!f.u.deliverable){ toast('该单元无产出物'); return; }
    d=f.u.deliverable; name=d.name; key='u_'+uid; unit=f.u;
  } else {
    d={ type:'artifact', name:'结业产出物（自选 skill / agent / workflow / kb）',
        rubric:['完整性','可用性','合规'],
        acceptance:'学员能运用课程方法，独立产出一份可带回工作使用的 AI 产物。',
        templateText:'（按你选择的产物类型，对照课程中各模块模板）',
        exemplarText:'（参考课程中各模块范例）' };
    name='结业产出物'; key='capstone';
  }
  window.__scoreCtx={uid:uid,d:d,name:name,key:key,u:unit};
  const prev=(prog.scores&&prog.scores[key]!=null)? ('当前已记录 '+prog.scores[key]+' 分') : '';
  const rub=(d.rubric&&d.rubric.length)? '<div class="rub" style="text-align:left">'+d.rubric.map(r=>'<span class="chip2">'+esc(r)+'</span>').join('')+'</div>' : '';
  const box=document.getElementById('art-box');
  box.innerHTML='<h3 style="text-align:left">\uD83D\uDCDD 产出物评审 · AI 打分（路线①·零后端）</h3>'
    +'<p style="text-align:left;color:var(--muted)">把你的成品粘贴到下方 → 点「生成评审指令」→ 复制到 WorkBuddy 新会话、把产出贴给它，即得三维 rubric 打分 + 改进建议（本环节为选学·不计权重，仅作能力佐证）。</p>'
    +rub
    +'<textarea id="score-ta" class="score-ta" placeholder="在此粘贴你构建的 skill / agent / workflow / kb 文本…"></textarea>'
    +'<div class="acts"><button class="btn" onclick="genScore()">\uD83D\uDCCB 生成评审指令（路线①）</button><button class="btn ghost" onclick="closeArt()">关闭</button></div>'
    +'<hr style="margin:14px 0;border:none;border-top:1px solid #eef1f6">'
    +'<div class="kv" style="text-align:left">回填分数：把 WorkBuddy 给的 0–100 分填这里，仅作能力佐证、不计权重'+(prev?'（'+prev+'）':'')+'</div>'
    +'<div class="acts"><input id="score-back" type="number" min="0" max="100" placeholder="0–100" class="score-inp"><button class="btn ghost" onclick="saveScore()">保存分数到学习档案</button></div>'
    +'<div id="score-saved" class="tip"></div>';
  document.getElementById('art-modal').classList.add('on');
}
function genScore(){
  const ta=document.getElementById('score-ta');
  const text=(ta&&ta.value||'').trim();
  const ctx=window.__scoreCtx; if(!ctx) return;
  if(!text){ toast('请先粘贴你的产出物'); return; }
  const prompt=buildScorePrompt(ctx.d, text, ctx.u);
  copyText(prompt);
  toast('评审指令已复制，去 WorkBuddy 粘贴');
  launchWorkBuddy();
}
function saveScore(){
  const inp=document.getElementById('score-back');
  const ctx=window.__scoreCtx; if(!ctx) return;
  const v=parseInt((inp&&inp.value)||'',10);
  if(isNaN(v)||v<0||v>100){ toast('请填 0–100 的整数'); return; }
  prog.scores=prog.scores||{};
  prog.scores[ctx.key]=v;
  saveProg(); refreshProg();
  const el=document.getElementById('score-saved');
  if(el) el.innerHTML='\u2705 已记录 '+v+' 分（'+(ctx.name||'产出物')+'），可在学习档案查看。';
}

function copyText(t){
  if(!t) return;
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(t).then(()=>toast('已复制到剪贴板'),()=>fallbackCopy(t));
  } else fallbackCopy(t);
}
function fallbackCopy(t){
  const ta=document.createElement('textarea'); ta.value=t; document.body.appendChild(ta); ta.select();
  try{ document.execCommand('copy'); toast('已复制'); }catch(e){ toast('复制失败，请手动选择'); }
  document.body.removeChild(ta);
}
let _toastT=null;
function toast(msg){
  let el=document.getElementById('toast');
  if(!el){ el=document.createElement('div'); el.id='toast'; el.style.cssText='position:fixed;left:50%;bottom:32px;transform:translateX(-50%);background:#0f172a;color:#fff;padding:9px 16px;border-radius:10px;font-size:13px;z-index:200;opacity:0;transition:.2s'; document.body.appendChild(el); }
  el.textContent=msg; el.style.opacity='1';
  clearTimeout(_toastT); _toastT=setTimeout(()=>el.style.opacity='0',1600);
}

/* ---------- 问题 2：视频下方立刻给题 ---------- */
function inlinePractice(u,uid){
  const adminNote = ADMIN ? '<div style="margin:8px 0;font-size:12.5px;color:#1a5cff;background:#eef3ff;padding:8px 10px;border-radius:8px">🔓 管理员预览：本单元视频可直接观看，下方练习 / 模板 / 评分要点均为可选，无需完成。</div>' : '';
  const tpl = u.template ? ('<details><summary>\uD83D\uDCCB 展开填写模板（照着填，不用从零想）</summary><div class="tpl">'+esc(sub(u.template))+'</div></details>') : '';
  const rub = (u.rubric&&u.rubric.length)? ('<details><summary>\uD83C\uDFAF 评分要点（做完自检一遍）</summary><ul class="rub">'+u.rubric.map(r=>'<li>'+esc(r)+'</li>').join('')+'</ul></details>') : '';
  return '<div class="card ip"><h3>\uD83D\uDCDD 看完就练 · 本单元题目 <span class="bd">'+STEP_LABEL[u.step]+'环节</span></h3>'
    + '<div class="ip-task">'+esc(sub(u.task||'完成本单元练习'))+'</div>'
    + '<details class="brief-fold" style="margin:8px 0"><summary style="cursor:pointer;font-size:12.5px;color:var(--mut)">场景背景 / 硬约束（视频里已演示怎么读懂与产出，需要时点开看文字版）</summary><div class="brief" style="margin-top:8px">'+esc(sub(u.brief||''))+'</div></details>'
    + tpl + rub
    + '<button class="btn" onclick="gotoAct()">开始作答 \u2193</button>'
    + '<button class="btn ghost" onclick="document.getElementById(\'p-play\').click()">先看视频再答</button>'
    + adminNote
    + '</div>';
}
function gotoAct(){
  const a=document.getElementById('act-area');
  if(a){ a.scrollIntoView({behavior:'smooth',block:'start'});
    setTimeout(()=>{ const t=document.querySelector('#act-area textarea'); if(t) t.focus(); },420); }
}
function navBar(pv,nx,uid){
  return '<div class="card" style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">'
   +(pv?'<button class="btn ghost" onclick="openUnit(\''+pv.id+'\')">\u2190 上一单元 '+pv.id+'</button>':'')
   +(nx?'<button class="btn" onclick="openUnit(\''+nx.id+'\')">下一单元 '+nx.id+' \u2192</button>':'')
   +'<span style="font-size:12.5px;color:var(--mut);margin-left:auto">本单元编号 '+uid+'</span></div>';
}
function doneCard(st,uid){
  const nx=nextUnit(uid);
  const det=(st.detail||[]).map(d=>'<li class="'+(d.ok?'ok':'')+'">'+esc(d.k)+(d.ok?'':' <span class="hint">（'+esc(d.hint||'')+'）</span>')+'</li>').join('');
  return '<div class="done-card"><h3>\u2705 本单元通关</h3>'
    +'<div class="cp-score">'+(st.score||'\u2014')+' 分</div>'
    +'<p style="font-size:13px;color:#5b7a63;margin-bottom:8px">你已完成「'+sub(findUnit(uid).u.title)+'」，可继续下一单元。</p>'
    + doneNext(uid)
    +(det?('<ul class="rub" style="text-align:left;max-width:520px;margin:0 auto 10px">'+det+'</ul>'):'')
    +'<div class="acts"><button class="btn ok" onclick="openUnit(\''+(nx?nx.id:uid)+'\')">'+(nx?'下一单元 '+(nx.id)+' \u2192':'回到起点重练')+'</button>'
    +'<button class="btn ghost" onclick="openUnit(\''+uid+'\')">再练一遍本单元</button></div></div>';
}

/* ===================== 播放器（字幕与真人声对齐；高亮跟讲解逐项点亮） ===================== */
/* 设计要点（2026-10-29 重写，对应三条用户反馈）：
   1) 暂停后再按播放必须「接着放」。→ 全局只用 1 个 Audio 实例 + 每段记住 posOf，
      续播时直接改 currentTime 再 play()，不再 new Audio 从头开始。
   2) 进度条可拖。→ pointerdown/move/up 连续 seek，拖动过程不中断播放状态。
   3) 不能出现「暂停了还有声音」。→ 实例唯一 + 所有回调校验 mode/audioIdx/playing。 */
function makePlayer(uid, slides, aud){
  const gid=id=>document.getElementById(id);
  const stage=gid('p-stage'), subEl=gid('p-sub'), dots=gid('p-dots'), seek=gid('p-seek'),
        timeEl=gid('p-time'), playBtn=gid('p-play'), wrap=gid('p-wrap'),
        rateBtn=gid('p-rate'), fsBtn=gid('p-fs'), bufEl=gid('p-buf'), bufTxt=gid('p-buft');
  /* 缓冲反馈：慢网下首声要等几秒，必须让人看见「在动」，否则会被当成点了没反应 */
  let bufT0=0, bufTimer=null;
  function bufOn(txt){
    if(!bufEl) return;
    if(!bufT0) bufT0=performance.now();
    if(bufTxt) bufTxt.textContent=txt||'正在加载配音…';
    bufEl.classList.add('on');
  }
  function bufOff(){
    bufT0=0; clearInterval(bufTimer); bufTimer=null;
    if(bufEl) bufEl.classList.remove('on');
  }
  /* 有 duration 时按已缓冲字节占比报进度；没有就只报秒数，别编百分比 */
  function bufHint(){
    if(!audio) return;
    if(!bufT0) bufT0=performance.now();   /* 别在算完 t 之后再设，否则第一次会报成「已等页面载入时长」 */
    const b=(audio.buffered&&audio.buffered.length)? audio.buffered.end(audio.buffered.length-1) : 0;
    const d=audio.duration||0;
    const t=((performance.now()-bufT0)/1000).toFixed(0);
    if(d>0&&b>0) bufOn('正在缓冲 '+Math.min(99,Math.round(b/d*100))+'% · 已等 '+t+' 秒');
    else bufOn('正在加载配音… 已等 '+t+' 秒');
  }
  function bufWatch(on){
    clearInterval(bufTimer); bufTimer=null;
    if(!on){ bufOff(); return; }
    bufHint();
    bufTimer=setInterval(bufHint, 400);
  }
  let cur=0, playing=false, mode=null, rate=RATE_DEF, dragging=false;
  /* CDN 看门狗：jsDelivr 在部分地区会被拖住（不报错、就是不动）。
     3 秒还没拿到元数据就换站内地址，别让人对着转圈等到放弃。 */
  let cdnTimer=null;
  function armCdnWatch(a){
    clearTimeout(cdnTimer); cdnTimer=null;
    if(!a || !/cdn\.jsdelivr/.test(a.dataset.full||'')) return;
    cdnTimer=setTimeout(function(){
      if(!playing||mode!=='audio'||audioIdx!==cur) return;
      if(a.readyState>=1) return;
      const loc=localOf(a.dataset.full||'');
      if(!loc||a.dataset.fb===loc) return;
      a.dataset.fb=loc;
      a.src=loc;
      bufOn('线路较慢，已切换备用地址…');
      try{ const p=a.play(); if(p&&p.catch) p.catch(function(){}); }catch(e){}
    }, 3000);
  }
  let ttsTimer=null, ttsPulse=null, ttsStart=0, ttsGuard=null, pulsedIdx=-1;
  let audio=null, audioIdx=-1, pendingAt=null;      /* 单实例：物理上不可能两路同时响 */
  const posOf={};                                   /* 每段已播到的秒数 */
  const dur=slides.map(s=>Number(s.d)>0?Number(s.d):Math.max(2, sub(s.n).length*0.205));
  const fmt=t=>{t=Math.max(0,t);const m=Math.floor(t/60),s=Math.floor(t%60);return m+':'+(s<10?'0':'')+s;};
  const total=()=>dur.reduce((a,b)=>a+b,0);

  /* ---------- 字幕：按标点切成 ≤26 字的短语，一次只显示一行 ---------- */
  const caps={};
  function capChunks(i){
    if(caps[i]) return caps[i];
    const n=sub(slides[i].n), parts=[]; let last=0, m;
    const re=/[。！？；，、：\n]/g;
    while((m=re.exec(n))){ parts.push([last, m.index+1]); last=m.index+1; }
    if(last<n.length) parts.push([last,n.length]);
    const out=[]; let from=-1,to=0,buf='';
    parts.forEach(function(p){
      const t=n.slice(p[0],p[1]).replace(/\s+/g,'').trim();
      if(!t) return;
      if(buf && buf.length+t.length>26){ out.push({s:buf,from:from,to:to}); buf=t; from=p[0]; to=p[1]; }
      else { if(!buf) from=p[0]; buf+=t; to=p[1]; }
    });
    if(buf) out.push({s:buf,from:from,to:to});
    caps[i]=out;
    return out;
  }
  function setCaption(i,frac){
    const ch=capChunks(i);
    if(!ch.length){ subEl.textContent=''; return; }
    let k=0;
    const cal=(typeof CAP_ALIGN!=='undefined'&&CAP_ALIGN[uid+'_'+i]);
    if(cal&&cal.length){
      /* v158：按转录时间戳定位字幕块（消除 TTS 停顿导致的 1.5-4.4s 滞后）。
         frac*dur 换算出真实秒数，在块起点数组里取最后一个 <= t 的块。 */
      const t=frac*(dur[i]||1);
      for(let x=0;x<cal.length;x++){ if(t+0.05>=cal[x]) k=x; }
      k=Math.min(k,ch.length-1);
    }else{
      const n=sub(slides[i].n), spoken=frac*Math.max(1,n.length);
      for(let x=0;x<ch.length;x++){ if(spoken+0.5>=ch[x].from) k=x; }
    }
    if(subEl.dataset.i===String(i) && subEl.dataset.k===String(k)) return;
    subEl.dataset.i=String(i); subEl.dataset.k=String(k);
    subEl.textContent=ch[k].s;
    subEl.classList.remove('swap'); void subEl.offsetWidth; subEl.classList.add('swap');
  }

  /* ---------- 高亮：按旁白里「提到该条目的位置」逐项点亮 ---------- */
  let hlEls=[], hlAt=[], hlLast=-2;
  function resetHl(i){
    hlEls=[]; hlAt=[]; hlLast=-2;
    const sl=stage.querySelectorAll('.slide')[i];
    if(!sl) return;
    const nodes=[].slice.call(sl.querySelectorAll('[data-k]'));
    if(!nodes.length) return;
    const n=sub(slides[i].n);
    /* 按标点切出「讲述单元」，高亮就挂在讲到的那一句上 */
    const clauses=[]; (function(){
      let from=0, m; const re=/[。！？；，、：\n]/g;
      while((m=re.exec(n))){ clauses.push({s:n.slice(from,m.index+1), from:from}); from=m.index+1; }
      if(from<n.length) clauses.push({s:n.slice(from), from:from});
    })();
    const cjk=function(t){ return String(t).replace(/[^\u4e00-\u9fa5A-Za-z0-9]/g,''); };
    const clauseSets=clauses.map(function(c){
      const set=new Set(); const t=cjk(c.s);
      for(let x=0;x<t.length;x++) set.add(t[x]);
      return set;
    });
    const posOfKey=function(el){
      const raw=String(el.getAttribute('data-k')||'');
      const whole=cjk(raw);
      if(!whole) return -1;
      const cands=[whole];
      /* 「数据不裸奔：订单与隐私不进公开模型」这种带冒号的长条目，
         整条永远匹配不上整句，必须退到冒号前的短标签上对位 */
      String(raw).split(/[：:，,、；;（）()\[\]\/]/).forEach(function(part){
        const t=cjk(part);
        if(t && t!==whole && t.length>=2 && cands.indexOf(t)<0) cands.push(t);
      });
      for(let c=0;c<cands.length;c++){
        const r=matchOne(cands[c]);
        if(r>=0) return r;
      }
      return -1;
    };
    const uniqOf=function(k){ const set=new Set(); for(let x=0;x<k.length;x++) set.add(k[x]); return [...set]; };
    function matchOne(key){
      /* 1) 原样命中：最准 */
      const exact=n.indexOf(key);
      if(exact>=0) return exact;
      /* 2) 逐句算字面重合率：讲到「提示词里把边界写死」时，
            「提示词写死边界」这种改写也能对上（原样匹配会漏） */
      const uniq=uniqOf(key);
      const need=uniq.length<=3? 0.8 : 0.65;
      let bestAt=-1, bestScore=0;
      clauses.forEach(function(c,x){
        let hit=0;
        uniq.forEach(function(ch){ if(clauseSets[x].has(ch)) hit++; });
        const score=hit/uniq.length;
        if(score>bestScore+1e-9){ bestScore=score; bestAt=c.from; }
      });
      return bestScore>=need? bestAt : -1;
    }
    const pts=nodes.map(posOfKey);
    const known=[]; pts.forEach(function(p,x){ if(p>=0) known.push(x); });
    const endAt=Math.max(1, n.length);
    hlAt=nodes.map(function(el,x){
      let p=pts[x];
      if(p<0){
        const prev=known.filter(function(y){ return y<x; }).pop();
        let next=null; for(let y=0;y<known.length;y++){ if(known[y]>x){ next=known[y]; break; } }
        if(prev!==undefined && next!==null){
          p=pts[prev]+(pts[next]-pts[prev])*(x-prev)/(next-prev);
        } else if(prev!==undefined){
          p=pts[prev]+(endAt-pts[prev])*(x-prev)/Math.max(1,nodes.length-prev);
        } else if(next!==null){
          p=Math.max(0, pts[next]-(next-x)*Math.max(8, pts[next]/Math.max(1,next)));
        } else {
          /* 整页都没匹配上关键词（例如概念图）：按条目数均分旁白，最后一条在 2/3 处亮，
             不放到 100%——否则最后一条几乎永远等不到。 */
          p=endAt*x/Math.max(1,nodes.length);
        }
      }
      return Math.max(0, Math.min(p, n.length-0.5));
    });
    for(let x=1;x<hlAt.length;x++){ if(hlAt[x]<hlAt[x-1]) hlAt[x]=hlAt[x-1]; }
    hlEls=nodes;
  }
  function paintHl(i,frac){
    if(!hlEls.length) return;
    const spoken=frac*Math.max(1,sub(slides[i].n).length);
    let k=-1;
    for(let x=0;x<hlAt.length;x++){ if(spoken+1>=hlAt[x]) k=x; }
    const sl=stage.querySelectorAll('.slide')[i];
    /* 还没讲到第一个条目：整页正常显示，不提前压暗（否则一进来就是一片灰） */
    if(k<0){
      if(hlLast!==-2){
        hlLast=-2;
        hlEls.forEach(function(el){ el.classList.remove('k-on'); });
        if(sl) sl.classList.remove('spot');
      }
      return;
    }
    if(k===hlLast) return;
    hlLast=k;
    if(sl) sl.classList.add('spot');
    hlEls.forEach(function(el,x){ el.classList.toggle('k-on', x===k); });
  }
  /* 老内容（SVG 里只写了 class="hl"、没有 data-k）仍按 34% 呼吸一次 */
  function maybePulse(i,frac){
    if(hlEls.length){ paintHl(i,frac); return; }
    if(pulsedIdx===i || frac<0.34) return;
    const s=stage.querySelectorAll('.slide')[i]; if(!s) return;
    const h=s.querySelector('.hl'); if(!h) return;
    pulsedIdx=i;
    h.classList.remove('pulse'); void h.offsetWidth; h.classList.add('pulse');
    setTimeout(function(){ h.classList.remove('pulse'); },2600);
  }

  function updateSeek(){
    let start=0; for(let k=0;k<cur;k++) start+=dur[k];
    let local=posOf[cur]||0, d=dur[cur]||1;
    if(mode==='audio'&&audio&&audioIdx===cur){ local=audio.currentTime||local; d=audio.duration||d; }
    else if(mode==='tts'){ local=Math.max(local,(performance.now()-ttsStart)/1000); }
    const gt=start+Math.min(local,d), frac=total()?gt/total():0;
    seek.querySelector('.fill').style.width=(frac*100)+'%';
    seek.querySelector('.knob').style.left=(frac*100)+'%';
    timeEl.textContent=fmt(gt)+' / '+fmt(total());
  }
  /* 音频可能挂在 CDN 上（页面在 aidax.cn、音频走加速）。个别网络会挡住 CDN，
     这时先把同一份文件换成站点内的相对路径再试一次，别直接退化成机器音。 */
  function localOf(u){
    if(!u || String(u).indexOf('http')!==0) return '';
    const m=String(u).match(/(audio\/[\w\-\/\.]+\.(?:m4a|mp3|wav|ogg))/i);
    return m? m[1] : '';
  }
  function audioFail(){
    const n=gid('p-note');
    if(n){ n.textContent='\u26a0 配音加载失败，已改用本机语音代读（音色会明显不同）';
           n.style.color='#b45309'; n.style.fontWeight='800'; }
  }
  function ensureAudio(){
    if(audio) return audio;
    audio=new Audio(); audio.preload='auto';
    audio.onloadedmetadata=function(){
      clearTimeout(cdnTimer); cdnTimer=null;
      if(audioIdx>=0 && audio.duration) dur[audioIdx]=audio.duration;
      if(pendingAt!==null){
        try{ audio.currentTime=Math.min(pendingAt, Math.max(0,(audio.duration||dur[audioIdx]||1)-0.1)); }catch(e){}
        pendingAt=null;
        if(playing && audioIdx===cur){ const p=audio.play(); if(p&&p.catch) p.catch(function(){}); }
      }
      updateSeek();
      if(playing && audioIdx===cur && audio.readyState<3) { bufOn('正在缓冲…'); bufWatch(true); }
    };
    /* 缓冲态：点播放后没出声的那几秒，用遮罩+百分比告诉用户「不是坏了」 */
    audio.onwaiting=function(){
      if(!playing||mode!=='audio'||audioIdx!==cur) return;
      playBtn&&(playBtn.innerHTML='\u23F3 缓冲中');
      bufWatch(true);
    };
    audio.onplaying=function(){
      bufWatch(false);
      if(playing&&mode==='audio'&&audioIdx===cur&&playBtn) playBtn.innerHTML='\u23F8 暂停';
      /* 真出声音了，再从容预取后面没播的段，别跟第一段抢带宽 */
      if(mode==='audio'&&aud&&aud.length) prefetchUnit(aud.slice(cur+1));
    };
    audio.oncanplay=function(){ if(playing&&mode==='audio'&&audioIdx===cur) bufWatch(false); };
    audio.onprogress=function(){ if(bufT0) bufHint(); };
    audio.ontimeupdate=function(){
      if(mode!=='audio'||audioIdx!==cur) return;
      if(audio.duration) dur[cur]=audio.duration;
      posOf[cur]=audio.currentTime;
      const f=audio.currentTime/(audio.duration||dur[cur]||1);
      setCaption(cur,f); maybePulse(cur,f); updateSeek();
    };
    audio.onended=function(){
      if(!playing||mode!=='audio'||audioIdx!==cur) return;
      posOf[cur]=dur[cur];
      advance();
    };
    audio.onerror=function(){
      if(mode!=='audio'||audioIdx!==cur) return;
      const loc=localOf(audio.dataset.full||'');
      if(loc && audio.dataset.fb!==loc){
        /* CDN 拉不动 → 换站内相对路径再试一次。慢总比没声音好，缓冲提示会一直挂着 */
        audio.dataset.fb=loc;
        audio.src=loc;
        bufOn('线路不稳，正在换备用地址…');
        try{ const pr=audio.play(); if(pr&&pr.catch) pr.catch(function(){}); }catch(e){}
        return;
      }
      bufWatch(false);
      audioFail();
      if(playing) ttsSlide(cur);
    };
    return audio;
  }

  /* 完全无语音环境：按估算时长滚筒式推进，保证画面一定会走 */
  function clockSlide(i){
    mode='tts'; ttsStart=performance.now();
    setCaption(i,0); updateSeek();
    clearInterval(ttsTimer); ttsTimer=setInterval(updateSeek,200);
    clearInterval(ttsPulse); ttsPulse=setInterval(function(){ maybePulse(i,(performance.now()-ttsStart)/1000/(dur[i]||1)); },150);
    clearTimeout(ttsGuard);
    ttsGuard=setTimeout(function(){ if(playing&&mode==='tts'&&cur===i) advance(); }, Math.round((dur[i]+1)*1000));
  }
  function ttsSlide(i){
    var sup=true;
    try{ sup=!!(typeof speechSynthesis!=='undefined'&&typeof SpeechSynthesisUtterance!=='undefined'); }catch(e){ sup=false; }
    if(!sup){ clockSlide(i); return; }
    var u2;
    try{ u2=new SpeechSynthesisUtterance(sub(slides[i].n)); }catch(e){ clockSlide(i); return; }
    mode='tts'; ttsStart=performance.now();
    u2.lang='zh-CN'; u2.rate=Math.max(0.5, Math.min(2, rate));
    u2.onboundary=function(e){
      const n=sub(slides[i].n), before=n.slice(0,e.charIndex);
      const f=before.length/Math.max(1,n.length);
      setCaption(i,f); maybePulse(i,f); updateSeek();
    };
    u2.onend=function(){ if(playing) advance(); };
    try{ speechSynthesis.cancel(); speechSynthesis.speak(u2); }catch(e){ clockSlide(i); return; }
    setCaption(i,0); updateSeek();
    clearInterval(ttsTimer); ttsTimer=setInterval(updateSeek,200);
    clearInterval(ttsPulse); ttsPulse=setInterval(function(){ maybePulse(i,(performance.now()-ttsStart)/1000/(dur[i]||1)); },150);
    /* 语音静默失败兜底：到估算时长还没在播报，就自动翻页，避免永久卡住 */
    clearTimeout(ttsGuard);
    ttsGuard=setTimeout(function(){
      if(!playing||mode!=='tts'||cur!==i) return;
      let sp=false; try{ sp=!!(speechSynthesis.speaking||speechSynthesis.pending); }catch(e){}
      if(!sp) advance();
    }, Math.round((dur[i]+1.5)*1000));
  }

  /* ===================== v161 吉利式 PPT 版式 =====================
     照吉利《用户思维》的画面层：固定 1600×900 画布等比缩放（--k），
     首段出章节封面、末段出结束封面、中间出白底内页。
     只换版式：COURSE 数据、旁白、音频、字幕、高亮一律不动。 */
  const PPT_SHAPE={'#16204a':'#ffffff','#0e1530':'#f4f7fb','#0f1a3a':'#e3eaf3','#1a5cff':'#0a3d91',
                   '#3b7bff':'#9fb4cc','#3a1a0c':'#fdf1e8','#0f3d24':'#e8f5ee'};
  const PPT_TEXT ={'#fff':'#0a3d91','#eaf0ff':'#33455a','#7aa2ff':'#4c6d99','#cfe0ff':'#7086a0',
                   '#ff9bb0':'#c8102e','#9be8b0':'#1a7f4b','#9bb4e8':'#7086a0'};
  const PPT_STROKE={'#3b7bff':'#d2dcea','#16a34a':'#a7d8bb','#1a5cff':'#b9cde4','#e11d48':'#f3b8c3','#0e1530':'#e3eaf3'};
  /* 深色卡片图 → 白底卡片图：形状填色、文字色、描边各走一张映射表 */
  function svgLight(h){
    h=String(h||'');
    h=h.replace(/<(rect|circle|ellipse|path|polygon|line)\b[^>]*>/g,function(t){
      return t.replace(/fill="([^"]+)"/g,function(m,c){ return 'fill="'+(PPT_SHAPE[c]||c)+'"'; });
    });
    h=h.replace(/<text\b[^>]*>/g,function(t){
      return t.replace(/fill="([^"]+)"/g,function(m,c){ return 'fill="'+(PPT_TEXT[c]||c)+'"'; });
    });
    return h.replace(/stroke="([^"]+)"/g,function(m,c){ return 'stroke="'+(PPT_STROKE[c]||c)+'"'; });
  }
  function pptLabels(s){ var o=[],re=/<g data-k="([^"]*)"/g,m; while((m=re.exec(String(s||'')))) o.push(m[1]); return o; }
  /* 模块短名：模块标题里冒号/顿号前那一段，够 cikeker 用 */
  function pptModShort(m){
    var t=modTitle(m)||'';
    var i=t.search(/[：:·—－]/);
    if(i>1) t=t.slice(0,i);
    return t.trim();
  }
  /* 单元在课程里的位置：模块名 / 第几节 / 共几节 / 下一节 */
  function pptMeta(id){
    var M=(typeof COURSE!=='undefined'&&COURSE.modules)||[],i,j,o={mod:'',modName:'',no:1,total:1,next:null,u:null};
    for(i=0;i<M.length;i++){ for(j=0;j<M[i].units.length;j++){
      if(M[i].units[j].id!==id) continue;
      o.mod=M[i].id; o.modName=pptModShort(M[i]); o.no=j+1; o.total=M[i].units.length; o.u=M[i].units[j];
      var nx=M[i].units[j+1]; if(nx) o.next={mod:M[i].id,modName:o.modName,no:j+2,u:nx};
      return o;
    }}
    return o;
  }
  /* 封面大标题字号：按最长一行字数分档，长标题不撑破画面 */
  function cvSize(t){
    var L=String(t||'').split(/<br\s*\/?>/i),mx=0,i,x;
    for(i=0;i<L.length;i++){ x=L[i].replace(/<[^>]+>/g,'').replace(/\s+/g,'').length; if(x>mx) mx=x; }
    if(mx<=10) return 80; if(mx<=13) return 72; if(mx<=17) return 64;
    if(mx<=22) return 54; if(mx<=28) return 46; return 38;
  }
  function pad2(n){ return (n<10?'0':'')+n; }
  /* 封面署名：与吉利封面左下角同位置，只写实际参与的三方 */
  function cvNote(){
    return '<div class="cv-note"><i>本课程由</i>'
      + '<div><b>研发设计</b><span>起点课堂企业服务</span></div>'
      + '<div><b>内容校验</b><span>产品与 AI 应用讲师团队</span></div>'
      + '<div><b>声音录制</b><span>陈观 AI 老师</span></div></div>';
  }
  function pptCover(pm,s){
    var u=pm.u||{}, pts=pptLabels(s.s).slice(0,3);
    var title=String(u.title||s.t||'');
    var hook=sub(String((u.ppt&&u.ppt.case)||(u.video&&u.video.script&&u.video.script[0])||''));
    return '<div class="cv-main">'
      + '<div class="cv-kick">'+esc(pm.mod)+' '+esc(pm.modName)+'<i></i>第 '+pm.no+' 节</div>'
      + '<h2 class="cv-h" style="font-size:calc('+cvSize(title)+'px*var(--k))">'+esc(sub(title))+'</h2>'
      + (hook?'<p class="cv-sub">'+esc(hook)+'</p>':'')
      + (pts.length?'<div class="cv-pts">'+pts.map(function(p,k){
          return '<div class="cv-pt"><b>'+pad2(k+1)+'</b><span>'+esc(p)+'</span></div>';
        }).join('')+'</div>':'')
      + '</div>'
      /* v168：署名块只在每个模块第一节的封面出现，其余单元封面留页码即可 */
      + (pm.no===1?cvNote():'')
      + '<div class="cv-foot">'+(pm.no===1?'<div class="cv-credit">起点课堂企业服务</div>':'')
      + '<div class="cv-no">'+pad2(pm.no)+'<em>/ '+pad2(pm.total)+'</em></div></div>';
  }
  /* 结论条：取旁白首句，压到 34 字内并在标点处收口。画面写的和嘴里念的是同一句，
     不新造文案，也不跟字幕打架。 */
  function leadOf(n){
    var t=String(n||'').replace(/[\s\u3000]+/g,'');
    var m=t.match(/^[^。！？]+[。！？]?/), s=m?m[0]:t;
    s=s.replace(/[。！？]$/,'');
    if(s.length>34){
      var cut=s.slice(0,32), p=Math.max(cut.lastIndexOf('，'),cut.lastIndexOf('；'),cut.lastIndexOf('、'));
      s=(p>=16? cut.slice(0,p): cut)+'…';
    }
    return s;
  }
  function pptInner(pm,s){
    var lead=leadOf(sub(String(s.n||'')));
    return '<div class="sl-kick">'+esc(pm.mod)+' '+esc(pm.modName)+' · 第 '+pm.no+' 节</div>'
      + '<h2 class="sl-h">'+esc(sub(s.t))+'</h2>'
      + (lead?'<div class="sl-band">'+esc(lead)+'</div>':'')
      + '<div class="sl-body">'+sub(svgLight(s.s))+'</div>'
      + '<div class="sl-tag">起点课堂企业服务</div>';
  }
  function pptEnd(pm,s){
    var u=pm.u||{}, lab=pptLabels(s.s), pts=lab.slice(0,3);
    var title=String(u.title||s.t||'');
    var nxTxt, nxLab;
    if(pm.next){
      nxLab='下一节';
      nxTxt=pm.next.mod+' 第 '+pm.next.no+' 节 · '+sub(String((pm.next.u&&pm.next.u.title)||''));
    }else{
      nxLab='本模块';
      nxTxt='已学完，回学习地图进入下一个模块';
    }
    return '<div class="ce-wm">'+pad2(pm.no)+'</div>'
      + '<div class="cv-main">'
      + '<div class="ce-mark">'+esc(pm.mod)+' '+esc(pm.modName)+' · 第 '+pm.no+' 节完</div>'
      + '<h2 class="cv-h" style="font-size:calc('+cvSize(title)+'px*var(--k))">'+esc(sub(title))+'</h2>'
      + (pts.length?'<div class="ce-pts"><div class="ce-lab">带走三句话</div>'+pts.map(function(p,k){
          return '<div class="ce-pt"><b>'+pad2(k+1)+'</b><span>'+esc(p)+'</span></div>';
        }).join('')+'</div>':'')
      + '<div class="ce-nx"><i>'+nxLab+'</i><div class="ce-nx-t"><b>'+esc(nxTxt)+'</b></div></div>'
      + '</div>'
      + '<div class="cv-foot"><div class="cv-credit">起点课堂企业服务</div>'
      + '<div class="cv-no">END<em>'+pad2(pm.no)+' / '+pad2(pm.total)+'</em></div></div>';
  }
  /* v179：resize 回调以前捕获的是第一次 makePlayer 的 stage，切单元后 DOM 重建，
     全屏/退出只更新已失效的旧节点 → 当前画布 --k 停在旧宽度（全屏字变小、退出字溢出）。
     现在每次都从 DOM 实时取 #p-stage，并额外监听 fullscreenchange。 */
  function stageFit(){
    var st=document.getElementById('p-stage')||stage;
    if(!st) return;
    var w=st.clientWidth||0;
    st.style.setProperty('--k', (w>40? w/1600 : 0.5));
  }
  function render(){
    stage.innerHTML=''; dots.innerHTML='';
    var pm=pptMeta(uid);
    slides.forEach(function(s,i){
      const d=document.createElement('div');
      var kind=(i===0?' cv':(i===slides.length-1?' cv cv-end':' sl'));
      d.className='slide'+kind+(i===cur?' on':'');
      d.innerHTML=(i===0? pptCover(pm,s) : (i===slides.length-1? pptEnd(pm,s) : pptInner(pm,s)));
      stage.appendChild(d);
      const dot=document.createElement('i'); if(i===cur)dot.className='on';
      /* v180: 圆点可点跳段（车企/零售已有，金融/新人补齐） */
      const many=slides.length>6;
      if(many){ dot.style.width='9px'; dot.style.height='9px'; dot.style.cursor='pointer'; }
      dot.title=(i+1)+'. '+String(s.t||'').slice(0,24);
      dot.onclick=function(e){ e.stopPropagation(); if(i===cur) return; try{ playSlide(i, !!playing); }catch(err){} };
      dots.appendChild(dot);
    });
    stageFit();
    if(!window.__PPT_FIT){
      window.__PPT_FIT=1;
      window.addEventListener('resize',function(){ stageFit(); });
      ['fullscreenchange','webkitfullscreenchange'].forEach(function(ev){
        document.addEventListener(ev,function(){ setTimeout(stageFit,30); });
      });
      /* 全屏按钮点击后立刻重算一次：浏览器全屏切换不一定触发 resize */
      if(fsBtn && !fsBtn.__fitBound){
        fsBtn.__fitBound=1;
        fsBtn.addEventListener('click',function(){ setTimeout(stageFit,60); });
      }
    }
  }

  function playSlide(i, autoplay){
    cur=i; if(posOf[i]===undefined) posOf[i]=0;
    render(); resetHl(i); pulsedIdx=-1;
    clearInterval(ttsTimer); clearInterval(ttsPulse); clearTimeout(ttsGuard);
    const off=posOf[i]||0;
    if(aud&&aud[i]){
      mode='audio';
      const a=ensureAudio();
      if(audioIdx!==i){ audioIdx=i; pendingAt=off; a.dataset.full=audUrl(aud[i]); a.dataset.fb=''; a.src=audUrl(aud[i]); prefetchAud(aud[i+1]); armCdnWatch(a); }
      else if(off>0.03){
        if(a.readyState>=1){ try{ a.currentTime=off; }catch(e){} pendingAt=null; }
        else pendingAt=off;
      }
      try{ a.playbackRate=rate; }catch(e){}
      setCaption(i, off/(dur[i]||1)); maybePulse(i, off/(dur[i]||1)); updateSeek();
      if(autoplay){
        const p=a.play();
        if(p&&p.catch) p.catch(function(){
          if(mode==='audio'&&audioIdx===i&&playing&&!(a.duration>0)){ audioFail(); ttsSlide(i); }
        });
      }
    }else{ mode='tts'; ttsSlide(i); }
  }
  function advance(){
    const ni=cur+1;
    if(ni>=slides.length){ stop(); subEl.textContent='本节讲解结束，可继续下方环节活动'; return; }
    playSlide(ni, playing);
  }
  function stop(){
    playing=false;
    bufWatch(false);
    if(audio){ try{ posOf[cur]=audio.currentTime||posOf[cur]||0; audio.pause(); }catch(e){} }
    try{ speechSynthesis.cancel(); }catch(e){}
    clearInterval(ttsTimer); clearInterval(ttsPulse); clearTimeout(ttsGuard);
    if(playBtn) playBtn.innerHTML='\u25B6 播放';
  }
  function play(){
    if(playing){ stop(); return; }
    playing=true;
    /* 还没缓冲够就先亮「加载中」，出第一声后 onplaying 会切回「暂停」 */
    const needBuf=!(mode==='audio'&&audio&&audioIdx===cur&&audio.readyState>=3);
    if(playBtn) playBtn.innerHTML=needBuf?'\u23F3 加载中':'\u23F8 暂停';
    if(needBuf) bufWatch(true);
    /* 已经播到本段末尾（或整节结束）时，点播放就当重播本段，避免「点了没反应」 */
    if((posOf[cur]||0) >= (dur[cur]||0) - 0.25) posOf[cur]=0;
    const off=posOf[cur]||0;
    /* 续播：同一段且已有进度 → 直接改 currentTime 接着放 */
    if(mode==='audio'&&audio&&audioIdx===cur&&off>0.05){
      try{ audio.currentTime=Math.min(off, Math.max(0,(audio.duration||dur[cur])-0.12)); }catch(e){}
      try{ audio.playbackRate=rate; }catch(e){}
      const p=audio.play(); if(p&&p.catch) p.catch(function(){});
      return;
    }
    playSlide(cur, true);
  }

  /* ---------- 拖动进度条（连续 seek，边拖边走） ---------- */
  function seekTo(frac){
    frac=Math.max(0,Math.min(1,frac));
    const gt=frac*total();
    let acc=0, idx=0;
    for(let k=0;k<dur.length;k++){ if(gt < acc+dur[k] || k===dur.length-1){ idx=k; break; } acc+=dur[k]; }
    const off=Math.max(0, Math.min(gt-acc, Math.max(0,(dur[idx]||1)-0.05)));
    const was=playing;
    if(idx===cur && mode==='audio' && audio && audioIdx===idx){
      posOf[idx]=off;
      try{ audio.currentTime=off; }catch(e){}
      const f=off/(audio.duration||dur[idx]||1);
      setCaption(idx,f); maybePulse(idx,f); updateSeek();
      return;
    }
    cur=idx; posOf[idx]=off; render(); resetHl(idx); pulsedIdx=-1;
    clearInterval(ttsTimer); clearInterval(ttsPulse); clearTimeout(ttsGuard);
    if(aud&&aud[idx]){
      mode='audio';
      const a=ensureAudio();
      if(audioIdx!==idx){ audioIdx=idx; a.dataset.full=audUrl(aud[idx]); a.dataset.fb=''; a.src=audUrl(aud[idx]); pendingAt=off; prefetchAud(aud[idx+1]); armCdnWatch(a); }
      else if(a.readyState>=1){ try{ a.currentTime=off; }catch(e){} pendingAt=null; }
      else pendingAt=off;
      try{ a.playbackRate=rate; }catch(e){}
      const f=off/(dur[idx]||1); setCaption(idx,f); maybePulse(idx,f); updateSeek();
      if(was){ const p=a.play(); if(p&&p.catch) p.catch(function(){}); }
    }else{
      mode='tts'; ttsStart=performance.now()-off*1000;
      setCaption(idx, off/(dur[idx]||1)); updateSeek();
      if(was) ttsSlide(idx);
    }
  }
  const fracOf=function(ev){
    const r=seek.getBoundingClientRect();
    return r.width? (ev.clientX-r.left)/r.width : 0;
  };
  seek.addEventListener('pointerdown',function(ev){
    dragging=true;
    try{ seek.setPointerCapture(ev.pointerId); }catch(e){}
    seekTo(fracOf(ev)); ev.preventDefault();
  });
  seek.addEventListener('pointermove',function(ev){ if(dragging) seekTo(fracOf(ev)); });
  const endDrag=function(){ dragging=false; };
  seek.addEventListener('pointerup',endDrag);
  seek.addEventListener('pointercancel',endDrag);
  seek.addEventListener('pointerleave',function(){ /* 捕获态下仍可拖，不移除监听 */ });

  /* ---------- 倍速 / 全屏 ---------- */
  const RATES=[1,1.25,1.5,1.75,2,0.75];
  if(rateBtn) rateBtn.onclick=function(){
    rate=RATES[(RATES.indexOf(rate)+1)%RATES.length];
    rateBtn.textContent=rate+'\u00D7';
    try{ if(audio) audio.playbackRate=rate; }catch(e){}
    if(mode==='tts'&&playing) ttsSlide(cur);   /* 本机语音不支持改速，只能重读本段 */
  };
  if(fsBtn) fsBtn.onclick=function(){
    const el=wrap||document.querySelector('.vp');
    if(!document.fullscreenElement && !document.webkitFullscreenElement){
      const fn=el.requestFullscreen||el.webkitRequestFullscreen;
      if(fn) fn.call(el).catch(function(){});
      fsBtn.textContent='\u26F6 退出';
    } else {
      const fn=document.exitFullscreen||document.webkitExitFullscreen;
      if(fn) fn.call(document).catch(function(){});
      fsBtn.textContent='\u26F6 全屏';
    }
  };
  playBtn.onclick=play;
  render();   /* 进入单元先渲染第一页，避免一片黑让人误以为播放器坏了 */
  updateSeek();
  return {stop:stop, play:play};
}

/* ===================== 环节活动 ===================== */
let flow={tries:0,best:0,boundary:false};
let sparHist=[];
let sparBusy=false;
function renderActivity(u,uid){
  const box=document.getElementById('act-area'); if(!box) return;
  flow={tries:0,best:0,boundary:false}; sparHist=[];
  const adminNote = ADMIN ? '<div style="margin-bottom:10px;font-size:12.5px;color:#1a5cff;background:#eef3ff;padding:8px 10px;border-radius:8px">🔓 管理员预览模式：练习 / 陪练 / 测验均为可选，无需完成即可观看视频并标记已观看。</div>' : '';
  const taskBox='<div class="ip-task">'+esc(sub(u.task||''))+'</div>';
  if(u.step==='understand'){
    const bank=(typeof QUIZ_BANK!=='undefined' && QUIZ_BANK[uid]) ? QUIZ_BANK[uid] : null;
    let qzHtml='';
    if(bank&&bank.length){
      qzHtml='<div class="qz-bank" style="margin-top:10px">'
        +'<div style="font-size:13px;color:var(--mut);margin-bottom:8px">本单元练习 · 共 '+bank.length+' 题（答对 '+Math.ceil(bank.length*0.8)+' 题才可进入下一步）<br><span style="color:#1d4ed8">先把 '+bank.length+' 题都选完，点「提交答案」后统一判分</span></div>';
      bank.forEach(function(it,i){
        qzHtml+='<div class="qz-item" id="qzb'+i+'"><div class="q">'+(i+1)+'. '+esc(sub(it.q))+'</div>'
          + it.opts.map(function(o,j){
              const picked=((actsOf(uid).qzPick||{})[i]===j);
              return '<div class="op'+(picked?' sel':'')+'" onclick="pickBankQ(\''+uid+'\','+i+','+j+')">'+esc(o)+'</div>';
            }).join('')
          +'<div class="tip" id="qzb-tip'+i+'" style="display:none"></div></div>';
      });
      qzHtml+='<div class="qz-submit"><span class="prog" id="qzb-progress">已选 0/'+bank.length+'</span>'
        +'<button class="btn" id="qzb-btn" onclick="submitBank(\''+uid+'\')">提交答案</button></div>';
      qzHtml+='</div>';
    } else {
      qzHtml='<div class="qz-item" style="margin-top:10px"><div class="q">关于「'+sub(u.title)+'」，下面哪个说法最准确？</div>'
        +[ 'AI 可以替你完成全部判断', 'AI 负责补结构与措辞，判断与取舍必须由你定', '只要用了 AI 就一定合规', 'AI 输出可以直接当定稿发布' ]
          .map((o,i)=>'<div class="op" id="uop'+i+'" onclick="pickUnderstand(this,'+i+')">'+o+'</div>').join('')
        +'<div class="tip" id="u-tip"></div></div>';
    }
    box.innerHTML=adminNote+'<div class="card"><h3>\uD83D\uDCD8 理解环节 · 自检</h3>'
      + taskBox
      + '<details><summary>\uD83D\uDCCB 展开填写模板</summary><div class="tpl">'+esc(sub(u.template||''))+'</div></details>'
      + qzHtml
      +'<div style="margin-top:12px"><h4 style="font-size:13.5px;margin-bottom:6px">按模板写下你的收获（这一项计入得分）</h4>'
      +'<textarea id="u-note" placeholder="1) 本单元我记住的一个结论：&#10;2) 它能用在我手头的哪件事上：&#10;3) 我还不确定、需要再查的："></textarea></div>'
      +'<div id="u-score"></div>'
      +'<button class="btn" id="u-submit" onclick="submitTask(\''+uid+'\',this)" style="'+(actsOf(uid).qzDone?'':'display:none')+'">提交并结算本单元</button></div>';
    /* 回填：未提交只保留「已选」高亮，提交后才显示对错与解析 */
    if(actsOf(uid).qzDone) paintBank(uid); else updateQzProgress(uid);
    const n=document.getElementById('u-note');
    if(n){ n.value=(actsOf(uid).note||''); n.addEventListener('input',()=>{ setAct(uid,'note',n.value); previewScore(uid,'u-score'); }); }
  } else if(u.step==='demo'){
    if(shOf(u)){ box.innerHTML=shHtml(u); shBind(u); return; }
    const dr=(u.demo&&u.demo.ref)? ('<details style="margin-top:12px"><summary>\uD83D\uDC41 先看一份实跑样例（同一段提示词真跑出来的结果，已脱敏）</summary>'
      +'<div class="tpl">'+esc(sub(u.demo.ref))+'</div>'
      +((u.demo.fix&&u.demo.fix.length)?('<div style="font-size:12.8px;margin:10px 0 4px"><b>人在这份输出上做了哪几件事（这才是本单元要学的）</b></div><ul class="rub">'+u.demo.fix.map(x=>'<li>'+esc(sub(x))+'</li>').join('')+'</ul>'):'')
      +((u.demo.judge)?('<div style="font-size:12.5px;color:var(--mut)">判断依据：'+esc(sub(u.demo.judge))+'</div>'):'')
      +'</details>') : '';
    box.innerHTML=adminNote+'<div class="card"><h3>\uD83D\uDEE0 演示环节 · 在 WorkBuddy 里跑一遍</h3>'
      + taskBox
      + '<details open><summary>\uD83D\uDCCB 展开填写模板</summary><div class="tpl">'+esc(sub(u.template||''))+'</div></details>'
      +'<div style="margin-top:10px"><h4 style="font-size:13.5px;margin-bottom:6px">提示词（可直接复制到 WorkBuddy 使用）</h4>'
      +'<textarea id="p-text">'+esc(sub(u.demoScript.prompt))+'</textarea></div>'
      +'<button class="btn" onclick="runWb(\''+uid+'\')">▶ 跑一遍（提示词自动复制）</button>'
      + dr
      +'<div id="wb-out" style="margin-top:10px"></div>'
      + ((u.rubric&&u.rubric.length)?'<details style="margin-top:10px"><summary>\uD83C\uDFAF 本单元评分要点</summary><ul class="rub">'+u.rubric.map(r=>'<li>'+esc(r)+'</li>').join('')+'</ul></details>':'')
      +'<div style="margin-top:14px"><h4 style="font-size:13.5px;margin-bottom:6px">演示记录（这一项计入得分）</h4>'
      +'<textarea id="demo-rec" placeholder="把上面模板的 4 小节贴进来：我用的提示词 / 哪里可用哪里不可用 / 我做了哪些人工修正 / 下次复用的固定句式"></textarea></div>'
      +'<label style="display:block;font-size:13px;margin:8px 0"><input type="checkbox" id="demo-check"> 我已人工核对过模型结果，清楚哪一步必须由人接手</label>'
      +'<div id="demo-score"></div>'
      +'<button class="btn" id="demo-submit" onclick="submitTask(\''+uid+'\',this)" style="'+((actsOf(uid).ran)?'':'display:none')+'">提交并结算本单元</button></div>';
    const r=document.getElementById('demo-rec');
    if(r){ r.value=(actsOf(uid).rec||''); r.addEventListener('input',()=>{ setAct(uid,'rec',r.value); previewScore(uid,'demo-score'); }); }
    const c=document.getElementById('demo-check');
    if(c){ c.checked=!!actsOf(uid).checked; c.addEventListener('change',()=>{ setAct(uid,'checked',c.checked?1:0); previewScore(uid,'demo-score'); }); }
    /* 回到这个单元时按已有记录把分数面板重算一遍，别让学员以为分数丢了 */
    if(actsOf(uid).ran||actsOf(uid).rec) previewScore(uid,'demo-score');
  } else if(u.step==='todo'){
    const TP=splitTplSample(u.template);
    const exTxt=(artTexts(u).ex||'').trim() || TP.sample;
    box.innerHTML=adminNote+'<div class="card"><h3>\u270D 我要做 · 产出你的交付物</h3>'
      + taskBox
      + delivStrip(u)
      + '<details class="brief-fold" style="margin:8px 0"><summary style="cursor:pointer;font-size:12.5px;color:var(--mut)">场景背景 / 硬约束（视频里已演示怎么读懂与产出，需要时点开看文字版）</summary><div class="brief" style="margin-top:8px">'+esc(sub(u.brief||''))+'</div></details>'
      + '<details open><summary>\uD83D\uDCCB 填写模板（照着每一节填，别从零开始）</summary><div class="tpl">'+esc(TP.skel)+'</div></details>'
      + ((u.rubric&&u.rubric.length)?'<details><summary>\uD83C\uDFAF 评分要点</summary><ul class="rub">'+u.rubric.map(r=>'<li>'+esc(r)+'</li>').join('')+'</ul></details>':'')
      + (exTxt?('<details><summary>\uD83D\uDC1B 看一份合格范例（照这个颗粒度写，别照抄内容）</summary><div class="tpl">'+esc(exTxt)+'</div></details>'):'')
      +'<div style="margin-top:10px"><h4 style="font-size:13.5px;margin-bottom:6px">把你的产出粘贴进来</h4>'
      +'<textarea id="work-text" style="min-height:150px" placeholder="按模板逐节写。只统计你自己写的内容：模板原文、范例原文贴回来都不加分。评分看结构、数字/来源、风险意识、责任人与时间。"></textarea></div>'
      +'<div id="work-out"></div>'
      +'<button class="btn" onclick="gradeWork(\''+uid+'\')">提交并自动评分</button></div>';
    const t=document.getElementById('work-text');
    if(t){ t.value=(actsOf(uid).work||''); t.addEventListener('input',()=>{ setAct(uid,'work',t.value); previewScore(uid,'work-out'); }); }
  } else if(u.step==='spar'){
    box.innerHTML=adminNote+'<div class="card"><h3>\uD83E\uDD4A 陪练环节 · '+esc(sub(u.spar.role))+'</h3>'
      + taskBox
      + '<details class="brief-fold" style="margin:8px 0"><summary style="cursor:pointer;font-size:12.5px;color:var(--mut)">场景背景 / 硬约束（视频里已演示怎么读懂与产出，需要时点开看文字版）</summary><div class="brief" style="margin-top:8px">'+esc(sub(u.brief||''))+'</div></details>'
      + '<div id="mat-host">'+matBoxHtml(uid)+'</div>'
      + '<details><summary>\uD83D\uDCCB 展开回答结构模板</summary><div class="tpl">'+esc(sub(u.template||''))+'</div></details>'
      + (artTexts(u).ex?('<details><summary>\uD83D\uDC1B 看一段合格回答（照这个结构答，别背内容）</summary><div class="tpl">'+esc(artTexts(u).ex)+'</div></details>'):'')
      +'<div class="qs"><span style="font-size:12.5px;color:var(--mut)">换个追问：</span>'
      + u.spar.mustAsk.map((q,i)=>'<span class="qlnk" onclick="askQ('+i+')">'+esc(sub(q).slice(0,14))+'\u2026</span>').join('')+'</div>'
      +'<div class="chat" id="chat"></div>'
      +'<textarea id="spar-text" placeholder="先给结论，再给依据，最后说取舍与边界。回车发送（Shift+回车换行）"></textarea>'
      +'<button class="btn" onclick="sendSpar()">发送</button>'
      +'<div style="margin-top:8px;text-align:right"><span class="lnk" onclick="submitTask(\''+uid+'\',this)">结束陪练并结算 ›</span></div>'
      +'<div id="spar-out"></div></div>';
    addBubble('ai', matFirstQ(u));
    bindEnter('spar-text',()=>sendSpar());
  }
}

/* ---------- 问题 3：分数由行为算出来，点按钮不能凭空拿分 ---------- */
function actsOf(uid){ return (prog.units[uid]&&prog.units[uid].acts)||{}; }
function setAct(uid,k,v){
  const st=prog.units[uid]||{}; const a=Object.assign({},st.acts||{});
  a[k]=v; prog.units[uid]=Object.assign({},st,{acts:a}); saveProg();
}
/* 通用「按编号小节拆分」：1) 2) 3) / 1、/ （1）/ 一： 都认，剥掉小节标题与占位提示。
   返回 {parts:{1:'正文',...}, hit:命中的编号行数}。hit=0 表示学员没按编号写，调用方自行兜底。 */
function cleanSignals(b){
  return (b||'')
    .replace(/[（(]\s*(待补|在这里|写|填|直接)[^）)]*[）)]/g,'')   /* 占位提示不算作答 */
    .replace(/[。．]{3,}|…+/g,'')
    .replace(/[ \t\u3000]+/g,' ')
    .trim();
}
function splitSections(text, maxN){
  const parts={}; let cur=0, hit=0;
  (text||'').replace(/\r/g,'').split('\n').forEach(function(ln){
    const m=ln.match(/^\s*[（(]?\s*([1-9１-９])\s*[)）.、．:：]/);
    if(m){
      let n=parseInt(m[1].replace(/[１-９]/,function(c){ return String(c.charCodeAt(0)-0xFEE0); }),10);
      hit++;
      if(maxN && n>maxN) n=0;
      cur=n;
      let rest=ln.replace(/^\s*[（(]?\s*[1-9１-９]\s*[)）.、．:：]\s*/,'');
      const c=rest.search(/[：:]/);
      if(c>=0 && c<=24) rest=rest.slice(c+1);        /* 去掉小节标题本身 */
      if(cur) parts[cur]=((parts[cur]||'')+(rest||'')+'\n');
      return;
    }
    if(cur) parts[cur]=((parts[cur]||'')+ln+'\n');
  });
  Object.keys(parts).forEach(function(k){ parts[k]=cleanSignals(parts[k]); });
  return {parts:parts, hit:hit};
}

/* ---------- 演示记录拆小节：只认「标题冒号之后」你亲手写的内容 ----------
   背景（bug）：自动填的模板骨架里有「2) 可用/不可用：」「3) 我做了什么人工修正：」
   「4) 下次复用的固定句式：」——标题本身就带着 可用 / 不可用 / 修正 / 复用 这些关键词，
   于是「一字没写、点一下跑一遍」也能拿满 80 分。所以判定前必须先把标题剥掉。 */
function splitDemoRec(rec){
  const S=splitSections(rec,4);
  function mk(b){ b=b||''; return {text:b,noNeg:b.replace(/不(?:可|能)用|无法用|不采纳|不能采信/g,''),filled:b.replace(/[\s，。、；：:;,.!?—\-（）()]/g,'').length>=8}; }
  const out={1:mk(),2:mk(),3:mk(),4:mk()};
  Object.keys(out).forEach(function(k){ out[k]=mk(S.parts[k]); });
  /* 用户可能不按 1)2)3)4) 编号写：整段当一份记录判，但仍然剥掉行首标题 */
  if(!S.hit){
    const whole=cleanSignals((rec||'').split('\n').map(function(ln){
      return ln.replace(/^\s*[（(]?\s*[1-9１-９]\s*[)）.、．:：]\s*/,'').replace(/^[^：:]{0,24}[：:]\s*/,'');
    }).join('\n'));
    Object.keys(out).forEach(function(k){ out[k]=mk(whole); });
  }
  return out;
}

const BOUNDARY_RE=/不确定|待确认|留给|由.{1,6}(判断|决定|确认)|需要.{0,4}确认|不能替|边界|存疑|风险|我会补|降级/;
const EVID_RE=/[0-9０-９]|数据|口径|来源|条款|原文|看板|访谈|样本|比例|百分比|%|频次|制度|办法|规则/;
const PLAN_RE=/责任人|负责人|时间|节点|下周|本周|月底|排期|截止|owner|上线|交付|deadline/i;

/* ---------- 单格判定：scoreSheet 与「标准答案逐格对照」共用同一套规则 ----------
   以前判分和答案各写一遍，一旦规则改动就会出现「判错了但答案说你对了」这种自相矛盾。
   现在只有这一个判定口：chips 比其他值，multi 比集合（不分先后），text 要求是原文连续片段。 */
function shDeltas(u){
  const sh=shOf(u);
  return (sh&&sh.delta&&sh.delta.length)?sh.delta:((u&&u.demo&&u.demo.delta)||[]);
}
/* 学员写的「改了哪几处」点到标准答案的几条（按每条给的 kw 命中算） */
function shCover(u,rev){
  const d=shDeltas(u), R=shNorm(rev||'').toLowerCase();
  let hit=0;
  d.forEach(function(it){
    if((it.kw||[]).some(function(k){ return k&&R.indexOf(shNorm(k).toLowerCase())>=0; })) hit++;
  });
  return {hit:hit, total:d.length};
}
function shCellOk(c,want,m,raw){
  if(c.type==='multi'){
    const arr=Array.isArray(raw)?raw.filter(Boolean):[];
    const W=String(want||'').split(/[,，、]/).map(function(x){return x.trim();}).filter(Boolean);
    const cur=arr.slice().sort().join('|'), w=W.slice().sort().join('|');
    return {ok:arr.length>0&&cur===w, empty:arr.length===0, got:arr.join('、'), want:W.join('、')};
  }
  if(c.type==='text'){
    const t=shNorm(raw);
    return {ok:t.length>=6&&shNorm(m.text).indexOf(t)>=0, empty:t.length===0,
            got:String(raw||'').trim(), want:'照抄原文连续 ≥6 字（且不含手机号/订单号/城市）'};
  }
  return {ok:!!raw&&String(raw)===String(want||''), empty:!raw,
          got:String(raw||''), want:String(want||'')};
}

/* ---------- 情景题判分：60 分结构整理 + 8 跑通 + 6 终稿 + 6 真改 + 20 修改说明 ---------- */
function scoreSheet(u,a){
  const sh=shOf(u), R=[], block=[], advice=[]; let s=0;
  const vals=(a.sheet&&typeof a.sheet==='object')?a.sheet:{};
  const K=sh.key||{};
  let hitW=0, allW=0, empty=0, cells=0, wrong=[];
  sh.mats.forEach(function(m){
    const v=vals[m.id]||{}, k=K[m.id]||{};
    sh.cols.forEach(function(c){
      const w=c.w||2; allW+=w; cells++;
      const r=shCellOk(c,k[c.k],m,v[c.k]);
      if(r.empty) empty++;
      if(r.ok) hitW+=w; else if(!r.empty) wrong.push(m.id+'·'+c.name);
    });
  });
  const struct=allW?Math.round(60*hitW/allW):0;
  const pct=allW?Math.round(100*hitW/allW):0;
  s+=struct;
  R.push({k:'按框架整理多份素材　'+struct+'/60 分（'+pct+'% 判对）',ok:pct>=80,
          hint:wrong.length?('这几格填了但没判对：'+wrong.slice(0,4).join('、')+(wrong.length>4?' 等':'')):'把素材和框架对一遍'});

  /* 硬约束：结构化字段里不能残留手机号 / 订单号 —— 这就是本课要练的动作 */
  let leak='';
  if(sh.forbid){
    let re=null; try{ re=new RegExp(sh.forbid); }catch(e){ re=null; }
    if(re){
      const scan=[];
      sh.mats.forEach(function(m){
        const v=vals[m.id]||{};
        sh.cols.forEach(function(c){ if(c.type==='text') scan.push(v[c.k]||''); });
      });
      scan.push(a.out||''); scan.push(a.rev||'');
      for(let i=0;i<scan.length;i++){ if(re.test(scan[i])){ leak=scan[i].match(re)[0]; break; } }
    }
  }

  const ran=!!a.ran, out=String(a.out||'').trim(), rawOut=String(a.raw||'').trim(), rev=String(a.rev||'').trim();
  s+=ran?8:0;
  R.push({k:'在页内跑了一遍模型　'+(ran?8:0)+'/8 分',ok:ran,hint:'点「▶ 复制提示词并跑一遍」'});

  const outOk=out.length>=150;
  s+=outOk?6:0;
  R.push({k:'交回了能看的终稿　'+(outOk?6:0)+'/6 分',ok:outOk,hint:'终稿框里要有模型返回的全文（≥150 字），不是一句话概括'});

  const sim=rawOut&&out?shSim(rawOut,out):1;
  /* 只判「终稿是不是模型原样的复制」：一模一样 = 没接手；改过就算动过手（改得够不够，看下面 20 分的修改说明） */
  const changed=rawOut?(shNorm(out)!==shNorm(rawOut) && (1-sim)>=0.02):(out.length>=300);
  s+=changed?6:0;
  R.push({k:'终稿不是模型原样的复制　'+(changed?6:0)+'/6 分',ok:changed,
          hint:'你交的和模型原样输出一模一样——至少要改掉没有来源的频次/比例，补上你自己的判断'});

  const hasFix=/改|删|补|换|加|替换|修正|重写|砍|去掉|挪|合并|拆/.test(rev);
  const hasWhy=/因为|原因|来源|口径|编|没出处|无出处|频次|比例|依据|不确定|待确认|没有数据/.test(rev);
  /* 20 分不再按字数给：先看他点到了标准答案里的几处（每处 4 分，封顶 16），
     再给「写清改成什么 / 为什么」补 4 分。这样「删除了一些信息」这类空话拿不到分。 */
  const cov=shCover(u,rev);
  let revScore;
  if(cov.total){
    revScore=Math.min(16,cov.hit*4)+(hasFix?2:0)+(hasWhy?2:0);
    /* 说法和参考答案完全对不上、但确实写了 100 字以上并交代了改什么/为什么：给 8 分兜底 */
    if(!cov.hit && rev.length>=100 && hasFix && hasWhy) revScore=Math.max(revScore,8);
  }else{
    revScore=(rev.length>=30?8:0)+(rev.length>=80?4:0)+(hasFix?4:0)+(hasWhy?4:0);
  }
  s+=revScore;
  R.push({k:'写清你改了哪几处　'+revScore+'/20 分',ok:revScore>=16,
          hint:cov.total?('点到标准答案里的 '+cov.hit+'/'+cov.total+' 处（每处 4 分，最多 16；写清改成什么补 4）')
                        :'逐条写：把哪句改成什么、为什么改（尤其是「AI 编的频次/比例」这类）'});

  if(empty) block.push('还有 '+empty+' 个格子没填（共 '+cells+' 格，已填 '+(cells-empty)+' 格）');
  if(leak) block.push('你填的内容里还带着「'+leak+'」——这正是本单元要避免的，删掉再提交');
  if(!ran) block.push('先点「复制提示词并跑一遍」，把整理结果交给模型');
  if(!outOk) block.push('把模型返回的结果放进「终稿」框（≥150 字）');
  if(rev.length<30) block.push('写清你改了哪几处（≥30 字）—— 这一课的核心是人接手，只跑不写不算');
  if(!changed && rawOut) advice.push('终稿和模型原样输出几乎一样：AI 那版一定有要改的地方（无来源的频次、越权定性、口径），按本单元讲的改两处');
  if(wrong.length && !block.length) advice.push('结构整理还有 '+wrong.length+' 格没判对，对照提交后放出的标准结果再看一遍');

  s=Math.max(0,Math.min(100,Math.round(s)));
  return {ok:(block.length===0)&&s>=60, score:s, detail:R, need:block.join('；'), blockers:block, advice:advice};
}

function computeUnit(uid){
  const f=findUnit(uid); if(!f) return {ok:false,score:0,detail:[],need:'单元不存在',blockers:['单元不存在'],advice:[]};
  const u=f.u, a=actsOf(uid), R=[], block=[], advice=[]; let s=0;

  /* block  = 硬门槛：这一步的动作还没做（不做就不该结算）
     advice = 质量建议：做了但做得不够好，已体现在分数里，不拦结算 */
  if(u.step==='understand'){
    const b=bankOf(uid);
    if(b){
      const bc=bankCorrect(uid);
      const pass=Math.ceil(b.length*0.8);
      const qzScore=Math.round(60*bc.n/b.length);
      s+=qzScore;
      R.push({k:'练习答对 '+bc.n+'/'+bc.total+'（需 ≥'+pass+'）',ok:bc.n>=pass,
        hint:bc.done?'点「重新作答」可再做一遍，答错的题下方有解析':'先把 '+b.length+' 题选完，再点「提交答案」'});
      if(!bc.done) block.push('做完本单元练习并点「提交答案」（共 '+b.length+' 题）');
      else if(bc.n<pass) block.push('练习题至少要答对 '+pass+' 题（当前答对 '+bc.n+' 题）');
    } else {
      const q=!!a.quiz;
      s+=q?60:0;
      R.push({k:'自检题答对',ok:q,hint:'答案落在「AI 补结构与措辞、判断与取舍留给人」这条线上'});
      if(!q) block.push('先答对上面的自检题');
    }
    const nt=(a.note||'').trim();
    const nr=scoreNoteText(nt,u);
    s+=nr.score;
    nr.detail.forEach(function(d){ R.push(d); });
    if(!nt) block.push('写下本单元收获（一句结论 + 能用在你的哪件事上）');
    else if(nr.filled<2) block.push('收获按三问写满两问、每问至少 10 个字（当前 '+nr.filled+' 问达标）');
    else if(nr.score<28) advice.push('收获还能再补：把没写的一问补到 10 个字（当前 '+nr.score+'/40 分）');

  } else if(u.step==='demo'){
    if(shOf(u)){ const r=scoreSheet(u,a); return r; }
    const ran=!!a.ran, chk=!!a.checked;
    const P=splitDemoRec(a.rec||'');
    /* 四个内容项各自独立判定：必须「自己写满 8 个字以上」且说到了点子上，标题不算数 */
    const usable   = P[2].filled && /可用|能用|直接用|采纳|保留|符合预期|准确|没问题/.test(P[2].noNeg);
    const unusable = P[2].filled && /不可用|不能用|不能采信|无法用|不对|有误|编造|幻觉|偏差|失真|要改|需人工|不采纳|错误/.test(P[2].text);
    const fixed    = P[3].filled && /改|修正|调整|补充|核对|复核|替换|删掉|重写|补上|换成/.test(P[3].text);
    const reuse    = P[4].filled && /以后|下次|复用|固定句式|句式|模板|沉淀|通用|照这个|每次都/.test(P[4].text);
    const recScore=(usable?20:0)+(unusable?30:0)+(fixed?25:0)+(reuse?15:0);
    R.push({k:'跑通一遍　'+(ran?10:0)+'/10 分',ok:ran,hint:'点「▶ 跑一遍」把提示词真发给模型（或复制到 WorkBuddy 自己跑）'});
    R.push({k:'指出哪部分可用　'+(usable?20:0)+'/20 分',ok:usable,hint:'第 2 小节写：哪几条可以直接用，为什么'});
    R.push({k:'指出哪部分不可用　'+(unusable?30:0)+'/30 分',ok:unusable,hint:'第 2 小节写：哪条不能采信（编的频次 / 口径错 / 越权定性），错在哪'});
    R.push({k:'写了你的人工修正　'+(fixed?25:0)+'/25 分',ok:fixed,hint:'第 3 小节写：你把哪句改成什么、为什么改'});
    R.push({k:'沉淀出可复用句式　'+(reuse?15:0)+'/15 分',ok:reuse,hint:'第 4 小节写一句下次能直接粘的提示词或句式'});
    R.push({k:'确认已人工核对结果（门槛项，不计分）',ok:chk,hint:'勾选下方复选框'});
    s=(ran?10:0)+recScore;
    if(!ran) block.push('先跑一遍（复制提示词或用模型跑）');
    if(!fixed) block.push('在第 3 小节写清你做了哪些人工修正 —— 这一课的核心就是「人接手」');
    if(!chk) block.push('勾选「我已人工核对过模型结果」');
    const miss=[];
    if(!usable) miss.push('哪部分可用');
    if(!unusable) miss.push('哪部分不可用');
    if(!fixed) miss.push('你改了什么');
    if(!reuse) miss.push('可复用句式');
    if(miss.length) advice.push('演示记录还缺：'+miss.join('、')+'（记录部分当前 '+recScore+'/90 分，标题行不算作答）');

  } else if(u.step==='todo'){
    const t=(a.work||'').trim();
    if(!t){ R.push({k:'提交产出内容',ok:false,hint:'按模板逐节填写后提交'}); block.push('先按模板写出你的产出并提交'); }
    else {
      const r=scoreWorkText(u,t);
      r.blockers = r.ok ? [] : [(r.need||'产出未达 60 分，按下方提示补强后重新提交')];
      r.advice = [];
      r.need = r.blockers.join('；');
      return r;
    }

  } else if(u.step==='spar'){
    const rounds=a.rounds||0, best=a.best||0, bd=!!a.boundary;
    R.push({k:'完成 ≥3 轮真实对话',ok:rounds>=3,hint:'陪练至少追问满 3 轮'});
    R.push({k:'≥2 轮给出了可追溯依据',ok:best>=2,hint:'回答里要出现数字/条款/口径/来源'});
    R.push({k:'划出责任边界',ok:bd,hint:'说清哪部分你不下结论、交给谁'});
    s=(rounds>=3?40:Math.min(39,rounds*13))+Math.min(35,best*18)+(bd?25:0);
    if(rounds<3) block.push('陪练还要继续（已完成 '+rounds+' 轮，至少 3 轮）');
    if(best<2) advice.push('至少 2 轮答案里要有具体依据（数字/条款/口径），当前 '+best+' 轮');
    if(!bd) advice.push('说清哪部分结论你不下、留给谁判断');
  }

  s=Math.max(0,Math.min(100,Math.round(s)));
  const okNow = (block.length===0) && s>=60;
  return {ok:okNow, score:s, detail:R, need:block.join('；'), blockers:block, advice:advice};
}


/* ===================== 真实评分引擎（v3）：按「评分标准」逐项判，不看字数 =====================
   五个维度各占分：结构完整性 20 / 评分要点覆盖 24 / 有据可依 20 / 红线意识 18 / 可执行 18
   另有三条反灌水惩罚：照抄模板、重复注水、过短。每项都给出「差在哪、怎么改」。 */
const STOPWords=/^(我们|你们|他们|可以|应该|需要|必须|这个|那个|这些|那些|进行|通过|使用|如何|什么|以及|然后|如果|因为|所以|但是|一个|没有|就是|自己|对于|关于|并且|或者|可能|已经|还有|不会|只是|这样|那样|一下|一些|很多|非常|比较|目前|现在|未来|首先|其次|最后|综上|例如|比如|其中|内容|情况|方式|方法|结果|过程|目标|能力|系统|平台|团队|公司|部门|流程|场景|环节|部分|方面|相关|主要|重要|有效|直接|实际|基本|整体|具体|明确|完成|提供|实现|提升|优化|支持|管理|分析|设计|开发|评估|判断|说明|描述|列出|包含|基于|根据|结合|利用|帮助|确保|保证|满足|达到|避免|减少|增加|提高|降低|控制|监控|跟踪|反馈|沟通|协作|推进|落地|执行|实施|交付|上线|运营|维护|更新|调整|改进|完善|建立|构建|搭建|制定|编写|整理|汇总|输出|生成|展示|查看|选择|确认|审核|审批|验证|测试|检查|排查|处理|解决|应对|防范|预防|规避|工作|问题|方案|数据|用户|客户|产品|业务)$/;
function cjkTerms(s){
  const out=[]; const runs=(s||'').match(/[\u4e00-\u9fa5]{2,8}/g)||[];
  runs.forEach(function(w){
    for(let L=2;L<=4;L++){ for(let i=0;i+L<=w.length;i++){ const t=w.substr(i,L); if(!STOPWords.test(t)) out.push(t); } }
  });
  return Array.from(new Set(out));
}
/* 从本单元的 rubric / deliverable.rubric 取「评分标准」条目 */
function rubricItemsOf(u){
  let items=(u.rubric&&u.rubric.length)?u.rubric.slice():[];
  const d=u.deliverable;
  if(d&&d.rubric&&d.rubric.length) items=items.concat(d.rubric);
  if(!items.length) items=['结构完整','有据可依','红线意识','可执行'];
  return Array.from(new Set(items)).slice(0,6);
}
/* 量化数字：必须带单位/量纲，纯数字不算 */
function qualifiedNumbers(t){
  const re=/([0-9０-９]+(?:\.[0-9]+)?)\s*(%|％|个百分点|万|亿|千|元|笔|条|个|次|人|天|周|月|年|日|号|分钟|小时|版|条|款|份|轮|倍|Q[1-4]|季度)/g;
  const m=(t||'').match(re)||[]; return Array.from(new Set(m)).length;
}
function hasSource(t){ return /(来源|口径|取自|来自|依据|条款|原文|看板|报表|访谈|样本|问卷|系统导出|统计区间|数据范围)/.test(t||''); }
function hasRisk(t){ return /(风险|红线|合规|监管|泄露|出域|越权|隐私|敏感|误导|幻觉|偏差|失真|不可信|未授权|投诉|处罚)/.test(t||''); }
function hasMitigation(t){ return /(规避|脱敏|审批|授权|复核|留痕|兜底|备份|限定|不输出|人工确认|降级|回退|加密|去标识|最小化|权限收|双人)/.test(t||''); }
function hasOwner(t){ return /(责任人|负责人|owner|Owner|由[^，。；\n]{1,10}(负责|跟进|确认|拍板|决策)|牵头|归属|对接人)/.test(t||''); }
function hasTime(t){ return /([0-9]+\s*(天|周|月|日|个工作日|季度)|下周|本周|月底|季末|Q[1-4]|截止|deadline|排期|里程碑|上线时间|交付时间|T\+[0-9])/.test(t||''); }
function hasAcceptance(t){ return /(验收|验收标准|验收口径|判定标准|达标|通过标准|衡量指标|成功标准|OKR|KPI|指标口径)/.test(t||''); }
/* 反灌水：与模板重合度、句子重复率 */
function dupRatio(t){
  const lines=(t||'').split(/\n/).map(x=>x.trim()).filter(x=>x.length>=8);
  if(lines.length<2) return 0;
  const uniq=new Set(lines); return 1-uniq.size/lines.length;
}
function templateOverlap(t,tpl){
  if(!tpl) return 0;
  const A=new Set(cjkTerms(tpl)); if(!A.size) return 0;
  let hit=0; A.forEach(function(w){ if((t||'').indexOf(w)>=0) hit++; });
  return hit/A.size;
}
function sectionCount(t){
  return (t||'').split(/\n/).map(x=>x.trim())
    .filter(x=>x.length>=10 && /^([■□•\-*·]|[一二三四五六七八九十]+[、.）)]|[0-9]+[、.）)]|#{1,4}\s|\*\*)/.test(x)).length;
}
/* ---------- 只算「你自己写的那部分」：模板骨架与模板自带样例逐行剔除 ----------
   背景（bug）：M0U3 的模板里自带一整套「参考样式」（8 项工作、耗时、红线、责任人齐全），
   学员把模板原样粘回输入框 = 结构 20 + 有据 20 + 红线 18 + 可执行 18 = 92 分。
   模板骨架不是产出，所以先按行剔掉与模板完全相同的行，只用剩下的内容判分。 */
function normLineOf(s){
  return String(s==null?'':s).replace(/[\s\u3000]+/g,'')
    .replace(/^[■□◆●○▪•·\-\*]+/,'')
    .replace(/[（(]\s*[）)]/g,'')
    .replace(/[_＿—－~～]{2,}/g,'')
    .replace(/[。，,、；;：:]+$/,'')
    .toLowerCase();
}
function tplLineSet(tpl){
  const S=new Set();
  String(tpl||'').split('\n').forEach(function(ln){
    const n=normLineOf(ln);
    if(n.length>=4) S.add(n);
  });
  return S;
}
/* 保留「和模板任何一行都不完全相同」的行：这些才是学员自己敲的 */
function ownLinesOf(text,S){
  return String(text||'').split('\n').filter(function(ln){
    const k=normLineOf(ln);
    return k.length>0 && !S.has(k);
  });
}
function blocksOf(t){
  const out=[]; let cur={head:'',lines:[]};
  String(t||'').split('\n').forEach(function(ln){
    const isHead=/^\s*([■□◆●○▪•·\-\*]|[一二三四五六七八九十]+[、.）)]|[0-9]+[、.）)]|#{1,4}\s|\*\*|【)/.test(ln);
    if(isHead){
      if(cur.head||cur.lines.join('').trim()){ out.push(cur); cur={head:ln,lines:[]}; }
      else cur.head=ln;
      return;
    }
    cur.lines.push(ln);
  });
  out.push(cur);
  return out.filter(function(b){ return (b.head+b.lines.join('')).trim().length>0; });
}
function ownOf(u,t){
  const tpl=sub(u.template||'');
  const S=tplLineSet(tpl);
  const own=ownLinesOf(t,S).join('\n');
  const blocks=blocksOf(t);
  let filled=0;
  blocks.forEach(function(b){
    const txt=[b.head].concat(b.lines).join('\n');
    if(ownLinesOf(txt,S).join('').replace(/\s/g,'').length>=10) filled++;
  });
  const len=function(s){ return String(s||'').replace(/\s/g,'').length; };
  return {tpl:tpl,set:S,own:own,ownLen:len(own),tLen:len(t),blocks:blocks,filled:filled};
}
function scoreWorkText(u,t){
  t=(t||'').trim();
  const R=[]; let total=0;
  const O=ownOf(u,t), own=O.own, tpl=O.tpl;
  const ownLen=O.ownLen, nb=O.blocks.length, filled=O.filled;

  /* ① 结构完整性 20：按「有你自己内容的段落」估算，模板自带的段落不算 */
  const ratio = nb? filled/nb : 0;
  const secScore = (nb<2) ? (filled>0?6:0)
    : ratio>=0.8?20 : ratio>=0.6?15 : ratio>=0.4?9 : (filled>0?4:0);
  total+=secScore;
  R.push({k:'结构完整性',got:secScore,full:20,ok:secScore>=14,
    hint: (nb<2)
      ? ('整篇看起来只有一段，按模板的 '+Math.max(3,blocksOf(tpl).length)+' 个小节分开写')
      : (ratio>=0.8 ? ('模板的小节都填上了（'+filled+'/'+nb+' 段有你的内容）')
                    : ('只有 '+filled+'/'+nb+' 段有你写的内容，模板原文不计分，缺的部分要补'))});

  /* ② 评分要点覆盖 24（逐条比对本单元 rubric，只看你自己写的内容） */
  const items=rubricItemsOf(u);
  let hitItems=0; const missNames=[];
  items.forEach(function(it){
    const terms=cjkTerms(it);
    const need=Math.min(3, Math.max(1, Math.ceil(terms.length*0.18)));
    let c=0; for(let i=0;i<terms.length && c<need;i++){ if(own.indexOf(terms[i])>=0) c++; }
    if(c>=need) hitItems++; else missNames.push(it.slice(0,14));
  });
  const covScore=Math.round(24*hitItems/items.length);
  total+=covScore;
  R.push({k:'评分要点覆盖（'+hitItems+'/'+items.length+'）',got:covScore,full:24,ok:hitItems>=Math.ceil(items.length*0.6),
    hint: hitItems>=items.length?('全部评分要点都有体现') : ('未体现：'+missNames.join('；'))});

  /* ③ 有据可依 20：只数你自己写的数字，模板里自带的「8 项 / 小时」不算 */
  const qn=qualifiedNumbers(own), src=hasSource(own);
  const evScore = (qn>=2?20 : (qn===1?12 : (src?13:0)));
  total+=evScore;
  R.push({k:'有据可依',got:evScore,full:20,ok:evScore>=12,
    hint: qn>=2?('已给出 '+qn+' 处带单位的数据') : ('需要 ≥2 处「数字+单位」（如 通过率 62%、3 个工作日、样本 12000 笔），当前 '+qn+' 处（模板里的数字不算）')});

  /* ④ 红线意识 18：必须同时有风险 + 规避动作 */
  const rk=hasRisk(own), mt=hasMitigation(own);
  const riskScore = (rk&&mt)?18 : (rk||mt)?9 : 0;
  total+=riskScore;
  R.push({k:'红线意识',got:riskScore,full:18,ok:riskScore===18,
    hint: (rk&&mt)?('已指出风险并给出规避动作') : rk?('指出了风险，但没写规避动作（脱敏/审批/人工复核等）') : mt?('写了规避动作，但没说清风险点在哪') : ('需写明「风险点 + 规避动作」，模板里的红线提示不算你的')});

  /* ⑤ 可执行 18 */
  const ow=hasOwner(own), tm=hasTime(own), ac=hasAcceptance(own);
  const actScore = (ow&&tm&&ac)?18 : ((ow&&tm)||(ow&&ac)||(tm&&ac))?12 : (ow||tm||ac)?6 : 0;
  total+=actScore;
  R.push({k:'可执行',got:actScore,full:18,ok:actScore>=12,
    hint: (ow&&tm&&ac)?('责任人/时间/验收标准齐全') : ('缺：'+[!ow?'责任人':null,!tm?'时间节点':null,!ac?'验收标准':null].filter(Boolean).join('、'))});

  /* ---- 反灌水：先按「自己写的内容量」判，再说重合度 ---- */
  const pen=[];
  if(ownLen<40){
    total=Math.min(total,14);
    pen.push('你贴回来的基本是模板原文（模板里自带的那份「参考样式」也算模板），只有 '+ownLen+' 字是你自己写的');
  } else if(ownLen<120){
    total=Math.min(total,35);
    pen.push('你自己写的内容只有 '+ownLen+' 字，不足一份能进评审会的交付物');
  } else if(O.tLen>0 && ownLen/O.tLen<0.35){
    total-=15;
    pen.push('自己的内容只占全文 '+Math.round(ownLen/O.tLen*100)+'%，其余是模板原文，请换成你自己的项目');
  }
  const ov=templateOverlap(t,tpl);
  if(ov>0.62 && ownLen<O.tLen*0.4){
    total-=10; pen.push('疑似直接照抄模板（重合度 '+Math.round(ov*100)+'%），请替换成你自己的内容');
  }
  const dr=dupRatio(t);
  if(dr>0.3){ total-=15; pen.push('存在重复/注水段落（重复率 '+Math.round(dr*100)+'%）'); }
  total=Math.max(0,Math.min(100,Math.round(total)));

  const detail=R.map(function(x){ return {k:x.k+'　'+x.got+'/'+x.full+' 分', ok:x.ok, hint:x.hint}; });
  pen.forEach(function(p){ detail.push({k:'扣分项：'+p, ok:false, hint:''}); });

  const weak=R.filter(function(x){return !x.ok;}).sort(function(a,b){return (a.full-a.got)-(b.full-b.got);}).slice(0,3);
  let need='';
  if(total<60){
    need='得分 '+total+' 分，未达 60 分通关线。优先补强：'+weak.map(function(x){return x.k;}).join('、')
        +'。\n例如：'+weak[0].hint;
  }
  return {ok:total>=60, score:total, detail:detail, need:need, dims:R};
}

function previewScore(uid,elId){
  const el=document.getElementById(elId); if(!el) return;
  const r=computeUnit(uid);
  const det=r.detail.map(d=>'<li class="'+(d.ok?'ok':'')+'">'+esc(d.k)
    +((!d.ok&&d.hint)?(' <span class="hint">（'+esc(d.hint)+'）</span>'):'')+'</li>').join('');
  const a=actsOf(uid);
  const empty=!String(a.work||'').trim() && !String(a.note||'').trim() && !String(a.rec||'').trim()
    && !a.rounds && !a.sheet;
  el.innerHTML='<div class="kv" style="margin-top:10px"><b>预估得分：'+r.score+' 分</b>'
   +'<div class="bar"><i style="width:'+r.score+'%"></i></div>'
   +'<ul class="rub">'+det+'</ul>'
   +((r.blockers&&r.blockers.length)
      ? '<div style="font-size:12.6px;color:#be123c">还不能结算：'+r.blockers.map(esc).join('；')+'</div>'
      : (r.score>=60?'<div style="font-size:12.6px;color:#166534">已达通关线（60 分），可以结算。</div>'
                    : '<div style="font-size:12.6px;color:#be123c">还差 '+(60-r.score)+' 分到通关线。</div>'))
   +((r.score===0&&empty)?'<div style="font-size:12.6px;color:var(--mut);margin-top:3px">还没开始计分 —— 上面几项每完成一项分数才动一格，模板标题行不算作答。</div>':'')
   +((r.advice&&r.advice.length)?'<div style="font-size:12.6px;color:#b45309;margin-top:3px">建议：'+r.advice.map(esc).join('；')+'</div>':'')
   +'</div>';
}

/* 结算被拦时的内联提示：区分「必填项没做完」与「分数不够」，并说明分数已过线 */
function showSubErr(r,btn){
  let el=document.getElementById('sub-err');
  if(!el||!document.body.contains(el)){
    el=document.createElement('div'); el.id='sub-err'; el.className='sub-err';
    if(btn&&btn.parentNode) btn.parentNode.insertBefore(el,btn);
    else { const cp=document.getElementById('cp'); if(cp) cp.appendChild(el); else return; }
  }
  const bl=(r.blockers||[]).map(function(x){ return '<li>'+esc(x)+'</li>'; }).join('');
  const ad=(r.advice||[]).map(function(x){ return '<li>'+esc(x)+'</li>'; }).join('');
  el.innerHTML='<div class="hd">本轮还不能结算</div>'
    +(bl?'<div>还有 '+(r.blockers||[]).length+' 项必填动作没做完：</div><ol>'+bl+'</ol>':'')
    +'<div style="margin-top:6px">当前 <b>'+r.score+' 分</b>'
      +(r.score>=60
        ? '，已过 60 分通关线 —— 拦住你的是上面这些没做完的项，<b>不是分数</b>。'
        : '，离 60 分通关线还差 <b>'+(60-r.score)+' 分</b>。')
    +'</div>'
    +(ad?'<div style="margin-top:6px">建议（只影响分数，不拦结算）：</div><ul class="adv">'+ad+'</ul>':'');
  el.style.display='block';
  try{ el.scrollIntoView({block:'center',behavior:'smooth'}); }catch(e){ try{ el.scrollIntoView(); }catch(e2){} }
}

function submitTask(uid,btn){
  if(ADMIN){
    const st=prog.units[uid]||{};
    prog.units[uid]=Object.assign({},st,{taskDone:true,done:true,score:st.score||60,detail:[{k:'管理员预览模式：已标记完成',ok:true}],acts:st.acts||{}});
    saveProg(); refreshProg(); renderSidebar();
    advCheck(); return true;
  }
  const r=computeUnit(uid);
  if(!r.ok){
    showSubErr(r,btn);
    return false;
  }
  const old=document.getElementById('sub-err'); if(old) old.style.display='none';
  const st=prog.units[uid]||{};
  const prev=st.score||0;
  prog.units[uid]=Object.assign({},st,{taskDone:true,done:true,score:Math.max(prev,r.score),detail:r.detail,acts:st.acts||{}});
  saveProg(); refreshProg(); renderSidebar();
  advCheck(); return true;
}
function finishUnit(uid){ return submitTask(uid); } /* 兼容别名 */

/* ---------- 单元练习：5 道场景选择题 ---------- */
function bankOf(uid){ return (typeof QUIZ_BANK!=='undefined' && QUIZ_BANK[uid]) ? QUIZ_BANK[uid] : null; }
function bankCorrect(uid){
  const b=bankOf(uid), a=actsOf(uid), pk=(a.qzPick||{});
  if(!b) return {n:0,total:0,done:false};
  if(!a.qzDone) return {n:0,total:b.length,done:false};   /* 没交卷不给分 */
  let n=0; b.forEach(function(it,i){ if(pk[i]===it.a) n++; });
  return {n:n,total:b.length,done:true};
}
/* 选答案：只记录 + 高亮，不判对错（提交后才判分，避免边选边被答案引导） */
function pickBankQ(uid,i,j){
  if(actsOf(uid).qzDone) return;                 /* 已提交，锁定 */
  const a=Object.assign({},actsOf(uid).qzPick||{});
  a[i]=j; setAct(uid,'qzPick',a);
  const wrap=document.getElementById('qzb'+i); if(!wrap) return;
  wrap.querySelectorAll('.op').forEach(function(el,k){ el.classList.toggle('sel', k===j); });
  updateQzProgress(uid);
}
function updateQzProgress(uid){
  const b=bankOf(uid); if(!b) return;
  const pk=actsOf(uid).qzPick||{};
  let n=0; b.forEach(function(_,i){ if(typeof pk[i]==='number') n++; });
  const pr=document.getElementById('qzb-progress');
  if(pr) pr.textContent='已选 '+n+'/'+b.length;
  const btn=document.getElementById('qzb-btn');
  if(btn){ btn.disabled=(n<b.length); btn.textContent = n<b.length ? '提交答案（还差 '+(b.length-n)+' 题）' : '提交答案'; }
}
/* 交卷判分：逐题标对错、给出正确答案与解析 */
function paintBank(uid){
  const b=bankOf(uid); if(!b) return;
  const pk=actsOf(uid).qzPick||{};
  let right=0;
  b.forEach(function(it,i){
    const wrap=document.getElementById('qzb'+i); if(!wrap) return;
    wrap.querySelectorAll('.op').forEach(function(el,k){
      el.classList.remove('right','wrong','sel');
      if(k===it.a) el.classList.add('right');
      else if(pk[i]===k) el.classList.add('wrong');
      if(pk[i]===k) el.classList.add('picked');
    });
    const ok=(pk[i]===it.a); if(ok) right++;
    const tip=document.getElementById('qzb-tip'+i);
    if(tip){
      tip.style.display='block';
      const letter=String.fromCharCode(65+(it.a||0));
      tip.innerHTML=(ok?'<b class="ok">\u2705 答对了。</b>'
                       :'<b class="bad">\u274c 答错了，正确答案是 '+letter+'（'+esc(it.opts[it.a]||'')+'）</b>')
        +'<div style="margin-top:3px">'+esc(it.why||'')+'</div>';
    }
  });
  const btn=document.getElementById('qzb-btn');
  if(btn){ btn.disabled=false; btn.className='lnk'; btn.textContent='重新作答 ›';
           btn.setAttribute('onclick',"resetBank('"+uid+"')"); }
  const pr=document.getElementById('qzb-progress');
  if(pr){ pr.innerHTML='答对 <b style="color:'+(right>=Math.ceil(b.length*0.8)?'#166534':'#be123c')+'">'+right+'/'+b.length+'</b> 题'; }
}
/* 重新作答：清空选择与提交态，回到可作答状态（答错后必须能重做，否则卡在 80% 门槛） */
function resetBank(uid){
  setAct(uid,'qzPick',{});
  setAct(uid,'qzDone',0);
  if(typeof renderCheckpoint==='function' && typeof CHECK!=='undefined' && CHECK) renderCheckpoint();
  else if(typeof openUnit==='function') openUnit(uid);
}
/* 交卷 */
function submitBank(uid){
  const b=bankOf(uid); if(!b) return;
  const pk=actsOf(uid).qzPick||{};
  let miss=0; b.forEach(function(_,i){ if(typeof pk[i]!=='number') miss++; });
  if(miss){ alert('还有 '+miss+' 题没选。'+'全部选完再提交。'); return; }
  setAct(uid,'qzDone',1);
  paintBank(uid);
  const sb=document.getElementById('u-submit'); if(sb) sb.style.display='';
  const r=computeUnit(uid);
  previewScore(uid,'u-score');
}
/* 收获撰写：三问逐问判「有没有说到点上」，不只看字数。
   bug：第 3 问写「还不确定的事实上是上帝会熟地黄的似乎」也能拿满 12 分——只要凑够 10 个字。
   现在每问都要同时过三关：
     ① 长度 ≥10 字（去掉空白）
     ② 这一问该有的语义标记（结论型 / 具体工作 / 待查项）
     ③ 含至少一个领域实词（本单元标题与目标里的词，或课程通用实词表）
   ——不含任何实词的那类「字凑够了但没内容」直接 0 分，并说明差在哪一关。 */
const DOMAIN_LEX=('脱敏 合规 红线 口径 看板 报表 评审 提效 落地 治理 埋点 选品 退货 差评 转化 留存 复购 召回 '
 +'库存 履约 促销 大促 活动 详情页 卖点 人群 分层 标签 画像 漏斗 归因 样本 数据源 授权 责任 边界 审批 复核 留痕 '
 +'幻觉 编造 频次 比例 指标 验收 试点 复盘 需求 排期 上线 迭代 字段 结构 结构化 提示词 模型 输出 校对 终稿 '
 +'敏感 个人信息 订单号 手机号 地址 名单 出域 权限 分级 流程 节点 交付 文档 清单 计划 预算 成本 毛利 客单 竞品 '
 +'供应商 采购 供应链 客服 法务 财务 研发 运营 主管 会议 纪要 周报 判断 取舍 结论 依据 风险 假设 验证 统计 数据组 数仓').split(/\s+/).filter(Boolean);
const NOTE_Q=[
  {k:'① 记住的一个结论',full:12,sig:/应|要|必须|不能|别|优先|先|关键|核心|取决于|原则|本质|而不是|只|反而/},
  {k:'② 能用在手上的哪件事',full:16,sig:/周报|需求|评审|看板|报表|详情页|客服|退货|选品|排期|周会|复盘|活动|投放|文案|会议|数据|流程|方案|文档|清单|地图|PRD|表格|调价|上新|汇报|名单|库存/},
  {k:'③ 还不确定、要再查什么',full:12,needSig:true,sig:/不确定|不清楚|没确认|待确认|待核实|需要查|要查|去查|核实|口径|是否|多少|怎么定|标准是|来源|依据|找.{0,8}(确认|问|核)|再问/}
];
function unitTermsOf(u){
  const src=[(u&&u.title)||'',(u&&u.objective)||'',((u&&u.rubric)||[]).join(' '),(u&&u.transfer)||''].join(' ');
  const out=[];
  (src.match(/[\u4e00-\u9fa5]{2,8}/g)||[]).forEach(function(w){
    for(let L=3;L<=4;L++){ for(let i=0;i+L<=w.length;i++){ const t=w.substr(i,L); if(!STOPWords.test(t)&&out.indexOf(t)<0) out.push(t); } }
  });
  return out;
}
/* 命中的领域实词个数：课程通用实词 + 本单元专有词 */
function domainHits(s,u){
  const t=String(s||''); let n=0;
  DOMAIN_LEX.forEach(function(w){ if(t.indexOf(w)>=0) n++; });
  (u?unitTermsOf(u):[]).forEach(function(w){ if(t.indexOf(w)>=0) n++; });
  return n;
}
/* v179 口径：用户拍板「写收获不用这么严格，只要够字数就行」。
   只留 10 字门槛；不再查领域实词命中 / 语义标记 / 待查项信号。
   quality 交给人工抽查，不拿正则卡学员结算。 */
function noteQScore(meta,text,u){
  const t=String(text||'').trim();
  const len=t.replace(/\s/g,'').length;
  const base={len:len,sig:true,hits:0};
  if(len<10) return Object.assign({score:0,ok:false,why:'不足 10 个字（当前 '+len+' 字）'},base);
  return Object.assign({score:meta.full,ok:true},base);
}
function scoreNoteText(t,u){
  t=(t||'').trim();
  const R=[]; let s=0;
  const S=splitSections(t,3);
  let filled=0;
  if(S.hit){
    NOTE_Q.forEach(function(q,i){
      const r=noteQScore(q,S.parts[i+1]||'',u);
      if(r.ok) filled++;
      s+=r.score;
      R.push({k:q.k+'　'+r.score+'/'+q.full+' 分',ok:r.ok,
        hint: r.ok? '' : ('这一问'+r.why+'；写满 10 个字即可')});
    });
  } else {
    /* 没按 1)2)3) 编号：整段当一份收获判，v179 起同样只看字数 */
    const len=t.replace(/\s/g,'').length;
    const got = len>=40 ? 40 : len>=20 ? 24 : 0;
    s=got; filled = got>=24?2:0;
    R.push({k:'收获内容　'+got+'/40 分',ok:got>=24,
      hint: got>=24? '' : ('按 1) 2) 3) 三问写，或直接写满 20 个字（当前 '+len+' 字）')});
  }
  return {score:Math.min(40,s), detail:R, filled:filled};
}

/* ---------- 判断题（理解环节） ---------- */
function pickUnderstand(el,i){
  const right=(i===1);
  el.parentNode.querySelectorAll('.op').forEach(x=>x.classList.remove('right','wrong'));
  el.classList.add(right?'right':'wrong');
  const tip=document.getElementById('u-tip'); tip.style.display='block';
  tip.innerHTML = right? '\u2705 正确。AI 的价值在补结构与措辞，判断和取舍是你的责任。'
                       : '\u274C 再想想：AI 没有你的业务事实，也不承担后果，判断必须留在人这一侧。可再选一次。';
  setAct(prog.cur,'quiz',right?1:0);
  previewScore(prog.cur,'u-score');
}
function esc(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
/* 模块名去重：数据里 title 自带「M1 」前缀时，页面上已单独显示代号，别再拼一次 */
function modTitle(m){ if(!m) return ''; return String(m.title||'').replace(new RegExp('^'+m.id+'\\s+'),''); }
function bindEnter(id,fn){ const el=document.getElementById(id); if(el) el.addEventListener('keydown',e=>{ if(e.key==='Enter'&&!e.shiftKey){ e.preventDefault(); fn(); } }); }
function copyPrompt(){
  const t=document.getElementById('p-text'); if(!t) return;
  t.select(); try{ document.execCommand('copy'); }catch(e){}
  setAct(prog.cur,'ran',1);
  alert('提示词已复制。打开 WorkBuddy 粘贴即可；也可点右侧按钮先用模型跑一遍看效果。');
}

/* ---------- 问题 7：演示接真实模型 ---------- */
async function runWb(uid){
  const f=findUnit(uid); if(!f) return;
  const u=f.u, out=document.getElementById('wb-out');
  const sh=shOf(u);
  const ta=document.getElementById('p-text');
  const raw=(ta&&ta.value.trim())? ta.value : (sh? shPromptText(u) : sub(u.demoScript.prompt));
  copyText(raw);   /* 一键两用：页内跑一遍 + 提示词已进剪贴板，可带去 WorkBuddy 复跑 */
  const first=(raw.split('\n')[0]||'').slice(0,120);
  out.innerHTML='<div class="wb"><div class="me">'+esc(first)+'</div>'
    +'<div class="ai" id="wb-live">'+(llmReady()?'正在调用模型\u2026':'提示词已复制到剪贴板\u2026')+'</div></div>';
  setAct(uid,'ran',1);
  const ds=document.getElementById('demo-submit'); if(ds) ds.style.display='';
  const fillOut=function(txt){
    if(!sh) return;
    const box=document.getElementById('demo-out'); if(!box) return;
    const prev=(actsOf(uid).raw||'');
    /* 只在「终稿还是空的」或「还没动过上一版模型输出」时覆盖，别把学员改过的稿冲掉 */
    if(!box.value.trim() || box.value.trim()===prev.trim()){
      box.value=txt; setAct(uid,'out',txt);
    }
    setAct(uid,'raw',txt);
    previewScore(uid,'demo-score');
  };
  if(llmReady()){
    try{
      const txt=await llmChat([
        {role:'system',content:'你是企业内训里的 WorkBuddy 助手。用户给你一段工作提示词，你要直接产出可用的工作结果：结构化、条目清晰、具体到照着做就能推进；凡是需要真实数据的地方用「【待填：××】」占位，不要编造数字。最后另起一行输出「\u26A0 需人工确认：」并列出 2\u20133 条必须由人核对或补全的点。'},
        {role:'user',content:raw}
      ],{temperature:0.5});
      out.innerHTML='<div class="wb"><div class="me">'+esc(first)+'</div><div class="ai">'+esc(txt)+'</div>'
        +'<div class="hl-line">以上由云端模型实时生成（与 WorkBuddy 使用同一段提示词、同类模型能力）。'
        +(sh?'<b>已放进下面的终稿框——接着改它。</b>':'把同一段提示词粘到 WorkBuddy 里会得到等效结果。')+'</div></div>';
      fillOut(txt);
      if(!sh){
        const rec=document.getElementById('demo-rec');
        if(rec && rec.value.trim().length<30){
          rec.value='1) 我用的提示词：\n'+first
            +'\n\n2) 可用/不可用：\n（在这里写：哪几条能直接用 / 哪条不能采信，错在哪）'
            +'\n\n3) 我做了什么人工修正：\n（在这里写：你把哪句改成什么，为什么）'
            +'\n\n4) 下次复用的固定句式：\n（在这里写：一句下次能直接粘的提示词）';
          setAct(uid,'rec',rec.value); previewScore(uid,'demo-score');
        }
      }
      return;
    }catch(e){
      out.innerHTML='<div class="wb"><div class="me">'+esc(first)+'</div><div class="ai" style="color:#ffb4b4">模型调用失败：'+esc(e.message)+'</div></div>';
    }
  }
  if(sh){
    /* 情景题：页内没接模型时不要伪造结果，直接把「去 WorkBuddy 跑」这一步铺成可点的动作 */
    out.innerHTML='<div class="wb"><div class="me">'+esc(first)+'</div>'
      +'<div class="ai">提示词已复制（'+raw.length+' 字）。<br>'
      +'① 点下面「打开 WorkBuddy」，新建对话直接粘贴（Ctrl/Cmd+V）；<br>'
      +'② 等它跑完，把返回的全文整段复制；<br>'
      +'③ 回到这里粘进「终稿」框，再在上面动手改。</div>'
      +'<div class="hl-line">本页此刻没有接通云端模型，所以不在这里替你生成——你贴回来的必须是模型真实输出，不能是凭空写的。</div></div>'
      +'<button class="btn ghost" style="margin-top:8px" onclick="launchWorkBuddy()">打开 WorkBuddy 粘贴运行</button>';
    return;
  }
  /* 无模型时：本地结构化产出（明确标注来源，不假装是模型） */
  out.innerHTML='<div class="wb"><div class="me">'+esc(first)+'</div>'
    +'<div class="ai">【方法骨架】'+esc(sub(u.ppt.method))+'</div>'
    +'<div class="ai">【同类案例】'+esc(sub(u.ppt.case))+'</div>'
    +'<div class="ai">【演示要点】'+esc(sub(u.ppt.demo))+'</div>'
    +'<div class="hl-line">\u26A0 需人工确认：以上是本地规则引擎按本单元课件拼装的骨架，不是模型实时生成。请复制上方提示词到 WorkBuddy 跑出真实结果，或点顶部「AI 未连接」查看接入方式。</div></div>';
  const rec=document.getElementById('demo-rec');
  if(rec && rec.value.trim().length<30){
    rec.value='1) 我用的提示词：\n'+first
      +'\n\n2) 可用/不可用：\n（在这里写：哪几条能直接用 / 哪条不能采信，错在哪）'
      +'\n\n3) 我做了什么人工修正：\n（在这里写：你把哪句改成什么，为什么）'
      +'\n\n4) 下次复用的固定句式：\n（在这里写：一句下次能直接粘的提示词）';
    setAct(uid,'rec',rec.value); previewScore(uid,'demo-score');
  }
}

/* ===================== 演示环节 · 情景题 =====================
   以前：一进门先给一份跑完的成品（dref），学员的动作只剩「读一遍 + 抄几句感受」，
   点一下「跑一遍」也能拿分。成品先摆出来，题就没了。

   现在把成品藏到提交之后，前置的是原始素材 + 填写框架，学员的动作固定四步：
     ① 读多份素材，按框架整理成结构化字段（客观判分：分类 / 情感 / 敏感信息 / 原话是否照抄）
     ② 用「他自己填的表」拼出提示词，交给模型跑
     ③ 把模型输出落进「终稿」框，就地改（终稿与模型原样输出的差异也计分）
     ④ 写清自己改了哪几处（硬门槛，写不出就说明没接手）
   判分是确定性的规则判定，逐项可解释；云端模型可用时再追加一段评审官点评。
*/
function shOf(u){ return (u&&u.demo&&u.demo.sheet&&u.demo.sheet.mats&&u.demo.sheet.mats.length)?u.demo.sheet:null; }
function shVals(uid){ const a=actsOf(uid); return (a.sheet&&typeof a.sheet==='object')?a.sheet:{}; }
function shNorm(s){ return String(s==null?'':s).replace(/[\s\u3000]+/g,''); }
function escA(s){ return esc(s).replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }
function shPaintTags(wrap,cur,multi){
  const arr=multi?((cur&&cur.length)?cur:[]):[cur||''];
  Array.prototype.forEach.call(wrap.querySelectorAll('.shtag'),function(c){
    if(arr.indexOf(c.getAttribute('data-t'))>=0) c.classList.add('on'); else c.classList.remove('on');
  });
}
function shPick(el){
  const uid=el.getAttribute('data-u'), mid=el.getAttribute('data-m'),
        k=el.getAttribute('data-k'), t=el.getAttribute('data-t'),
        multi=el.getAttribute('data-multi')==='1';
  const s=JSON.parse(JSON.stringify(shVals(uid)));
  s[mid]=s[mid]||{};
  if(multi){
    let arr=(s[mid][k]&&s[mid][k].length)?s[mid][k].slice():[];
    const i=arr.indexOf(t);
    if(i>=0) arr.splice(i,1);
    else if(t==='无') arr=['无'];
    else { arr=arr.filter(function(x){return x!=='无';}); arr.push(t); }
    s[mid][k]=arr;
  }else{
    s[mid][k]=(s[mid][k]===t)?'':t;
  }
  setAct(uid,'sheet',s);
  shPaintTags(el.parentNode,s[mid][k],multi);
  shRefreshPrompt(uid);
  previewScore(uid,'demo-score');
}
function shSet(uid,mid,k,v){
  const s=JSON.parse(JSON.stringify(shVals(uid)));
  s[mid]=s[mid]||{}; s[mid][k]=v;
  setAct(uid,'sheet',s);
  shRefreshPrompt(uid);
  previewScore(uid,'demo-score');
}
/* 提示词 = 学员自己填的表 + 本单元的生成指令；改任何一个格子都会同步重算 */
function shPromptText(u){
  const sh=shOf(u); if(!sh) return sub(u.demoScript.prompt);
  const vals=shVals(u.id), rows=[];
  sh.mats.forEach(function(m){
    const v=vals[m.id]||{}, parts=[];
    sh.cols.forEach(function(c){
      if(c.type==='text') return;               /* 原话单独放末尾，不混在字段里 */
      let x=v[c.k];
      if(c.type==='multi') x=(x&&x.length)?x.join('、'):'';
      if(x) parts.push(c.name.replace(/[（(].*$/,'')+'：'+x);
    });
    const q=String((vals[m.id]||{}).quote||'').trim();
    rows.push(m.id+(parts.length?('｜'+parts.join('｜')):'')+(q?('｜原话：'+q):''));
  });
  return '以下是「'+((COURSE.customization&&COURSE.customization.product)||'本店')+'」的 '+sh.mats.length
    +' 份素材，已按框架整理成结构化字段（不含昵称、手机号、订单号、收货城市）：\n\n'
    +rows.join('\n')+'\n\n'+sh.gen;
}
function shRefreshPrompt(uid){
  const f=findUnit(uid); if(!f||!shOf(f.u)) return;
  const t=document.getElementById('p-text'); if(t) t.value=shPromptText(f.u);
  const pg=document.getElementById('sh-prog'); if(pg) pg.innerHTML=shProgLine(f.u);
}
function shProgLine(u){
  const sh=shOf(u), vals=shVals(u.id);
  let cells=0, filled=0;
  sh.mats.forEach(function(m){
    const v=vals[m.id]||{};
    sh.cols.forEach(function(c){
      cells++;
      const raw=v[c.k];
      if(c.type==='multi'){ if(raw&&raw.length) filled++; }
      else if(String(raw||'').trim()) filled++;
    });
  });
  const cls=filled>=cells?'shok':'';
  return '<span class="'+cls+'">整理进度：'+filled+'/'+cells+' 格'+(filled>=cells?'（填完了，去跑模型）':'')+'</span>';
}
/* 终稿与模型原样输出的相似度：只用来判断「有没有真的动过手」 */
function shSim(a,b){
  const A=shNorm(a), B=shNorm(b);
  if(!A||!B) return 1;
  const g=function(s){ const m={}; for(let i=0;i<s.length-1;i++){ const k=s.substr(i,2); m[k]=(m[k]||0)+1; } return m; };
  const ga=g(A), gb=g(B); let inter=0, total=0;
  Object.keys(ga).forEach(function(k){ total+=ga[k]; if(gb[k]) inter+=Math.min(ga[k],gb[k]); });
  Object.keys(gb).forEach(function(k){ if(!ga[k]) total+=gb[k]; });
  return total?inter/total:1;
}
function shHtml(u){
  const sh=shOf(u), uid=u.id, a=actsOf(uid), vals=shVals(uid);
  const adminNote = ADMIN ? '<div style="margin-bottom:10px;font-size:12.5px;color:#1a5cff;background:#eef3ff;padding:8px 10px;border-radius:8px">🔓 管理员预览模式：练习 / 陪练 / 测验均为可选，无需完成即可观看视频并标记已观看。</div>' : '';
  const done=!!(prog.units[uid]&&prog.units[uid].taskDone);
  let cards='';
  sh.mats.forEach(function(m){
    const v=vals[m.id]||{};
    const parts=[];
    sh.cols.forEach(function(c){
      if(c.type==='text'){
        parts.push({t:'chip',html:'<div class="shc"><label>'+esc(c.name)+'　<span style="color:#9aa6bd">'+esc(c.hint)+'</span></label>'
          +'<input class="shin" value="'+escA(v[c.k]||'')+'" placeholder="'+escA(c.hint)+'" '
          +'oninput="shSet(\''+uid+'\',\''+m.id+'\',\''+c.k+'\',this.value)"></div>'});
      }else{
        const multi=c.type==='multi';
        const arr=multi?((v[c.k]&&v[c.k].length)?v[c.k]:[]):[v[c.k]||''];
        parts.push({t:'chip',html:'<div class="shc"><label>'+esc(c.name)+'　<span style="color:#9aa6bd">'+esc(c.hint)+'</span></label><div class="shtags">'
          +c.tags.map(function(t){
            const on=arr.indexOf(t)>=0;
            return '<span class="shtag'+(on?' on':'')+'" data-u="'+uid+'" data-m="'+m.id+'" data-k="'+c.k
              +'" data-multi="'+(multi?1:0)+'" data-t="'+escA(t)+'" onclick="shPick(this)">'+esc(t)+'</span>';
          }).join('')+'</div></div>'});
      }
    });
    /* 前两列都是短标签时并排放，省一半纵向高度（6 份素材叠起来太长） */
    let fields='';
    if(parts.length>=2 && sh.cols[0].type!=='text' && sh.cols[1].type!=='text'){
      fields='<div class="shrow">'+parts[0].html+parts[1].html+'</div>'+parts.slice(2).map(function(x){return x.html;}).join('');
    }else{
      fields=parts.map(function(x){return x.html;}).join('');
    }
    cards+='<div class="shcard" id="shc_'+m.id+'"><div class="shhead"><b>'+esc(m.id)+'</b><span>'+esc(m.src)+'</span></div>'
      +'<div class="shmat">'+esc(m.text)+'</div>'+fields+'</div>';
  });
  const raw=(a.raw||''), out=(a.out||'');
  const refBlock=done?shRefHtml(u):'';
  return adminNote+'<div class="card"><h3>\uD83E\uDDE9 演示环节 · 情景任务</h3>'
    +'<div class="shsitu">'+esc(sh.situ)+'</div>'
    +'<div class="shask">'+esc(sh.ask)+'</div>'
    +'<div class="shbar"><span id="sh-prog">'+shProgLine(u)+'</span>'
      +'<span style="color:#9aa6bd">'+sh.mats.length+' 份素材 · '+sh.cols.length+' 个字段</span></div>'
    +'<div style="font-size:13.3px;font-weight:700;margin:4px 0 8px">① 按框架把素材整理出来</div>'
    +cards
    +'<div class="shstep"><b>② 把整理好的字段交给模型</b>'
      +'<div style="font-size:12.5px;color:var(--mut);margin-bottom:6px">下面的提示词是按你上面填的表自动拼的，改格子它就跟着变。</div>'
      +'<textarea id="p-text" style="min-height:110px;font-size:12.4px">'+esc(shPromptText(u))+'</textarea>'
      +'<button class="btn" onclick="runWb(\''+uid+'\')">\u25B6 复制提示词并跑一遍</button>'
      +'<div id="wb-out" style="margin-top:10px"></div></div>'
    +'<div class="shstep"><b>③ 把模型返回的结果放进来，就地改</b>'
      +'<div style="font-size:12.5px;color:var(--mut);margin-bottom:6px">这里放<b>你最终要交的那一版</b>（不是模型原样）——没依据的频次、越权定性、口径不对的地方，自己动手改掉。</div>'
      +'<textarea id="demo-out" style="min-height:150px" placeholder="把模型输出整段贴进来，然后在这上面改。改完这里就是你的终稿。">'+esc(out)+'</textarea></div>'
    +'<div class="shstep"><b>④ 你改了哪几处（必填，这项占 20 分）</b>'
      +'<div style="font-size:12.5px;color:var(--mut);margin-bottom:6px">逐条写：把哪句改成什么、为什么改。'
      +'这一项按「点到标准答案里的几处」给分（每处 4 分，最多 16，写清改成什么再补 4）——'
      +'「删除了一些信息」这种空话拿不到分。提交后能看到标准答案逐条对照。</div>'
      +'<textarea id="demo-rev" style="min-height:90px" placeholder="例：1) 删掉「差评最多的是尺码」——素材里没有计数，AI 编的频次；2) 「建议优化尺码表」补成「详情页加身高体重对照表」，并注明要退货数据才能排优先级；3) ……">'+esc(a.rev||'')+'</textarea></div>'
    +'<label style="display:block;font-size:13px;margin:12px 0 6px"><input type="checkbox" id="demo-check"'+(a.checked?' checked':'')+'> 我已逐条核对过模型输出</label>'
    +'<div id="demo-score"></div>'
    +'<button class="btn" id="demo-submit" onclick="submitTask(\''+uid+'\',this)" style="'+(a.ran?'':'display:none')+'">提交，AI 判分</button>'
    +refBlock+'</div>';
}
/* innerHTML 挂上之后再绑事件（在外面调，避免闭包引用已废弃的节点） */
function shBind(u){
  const uid=u.id, a=actsOf(uid);
  const bind=function(id,key){
    const el=document.getElementById(id); if(!el) return;
    el.addEventListener('input',function(){ setAct(uid,key,el.value); previewScore(uid,'demo-score'); });
  };
  bind('demo-out','out'); bind('demo-rev','rev');
  const c=document.getElementById('demo-check');
  if(c) c.addEventListener('change',function(){ setAct(uid,'checked',c.checked?1:0); previewScore(uid,'demo-score'); });
  if(a.ran||a.out||a.rev) previewScore(uid,'demo-score');
}
/* ---------- 标准答案①：逐格对答 ----------
   学员最想知道的是「我那几个选项到底判对没有」。所以提交后必须逐格给他：
   你填的 → 标准答案 → 为什么（notes 里只写容易判错的格子，其余留空不啰嗦）。 */
function shAnsRows(u){
  const sh=shOf(u), vals=shVals(u.id), K=sh.key||{}, N=sh.notes||{}, rows=[];
  sh.mats.forEach(function(m){
    const v=vals[m.id]||{}, k=K[m.id]||{};
    sh.cols.forEach(function(c){
      const r=shCellOk(c,k[c.k],m,v[c.k]);
      rows.push({mid:m.id, col:c.name, type:c.type, got:r.got, want:r.want,
                 ok:r.ok, empty:r.empty, why:N[m.id+'·'+c.k]||''});
    });
  });
  return rows;
}
function shAnsRowHtml(r){
  const st=r.ok?'<span style="color:#166534;font-weight:700">✓ 判对</span>'
              :(r.empty?'<span style="color:#8f9ab0;font-weight:700">○ 没填</span>'
                       :'<span class="ansy">✗ 判错</span>');
  return '<div class="ansrow '+(r.ok?'good':'bad')+'">'
    +'<div class="anshd"><span class="ansid">'+esc(r.mid)+' · '+esc(r.col)+'</span>'+st
    +'<span class="ansg">'+(r.empty?'（空）':esc(r.got))+'</span>'
    +'<span style="color:#9aa6bd">→</span><span class="answ">'+esc(r.want)+'</span></div>'
    +(r.why?'<div class="answhy">'+esc(r.why)+'</div>':'')+'</div>';
}
function shAnsHtml(u){
  const rows=shAnsRows(u);
  const opt=rows.filter(function(r){return r.type!=='text';});
  const optOk=opt.filter(function(r){return r.ok;}).length;
  const miss=rows.filter(function(r){return !r.ok;});
  const txt=rows.filter(function(r){return r.type==='text';});
  const txtOk=txt.filter(function(r){return r.ok;}).length;
  let h='<div class="shref" style="margin-top:12px"><div class="hd">\u2714 标准答案 · 逐格对答</div>'
    +'<div class="anscov">信息处理选项（分类 / 判断 / 敏感信息）判对 <b>'+optOk+'/'+opt.length
    +'</b> 格；原话照抄成立 <b>'+txtOk+'/'+txt.length+'</b> 条。</div>';
  if(miss.length){
    h+='<div style="font-size:12.4px;color:#be123c;margin:2px 0 7px">下面这 '+miss.length
      +' 格要么空着、要么和标准答案不一致，照着标准答案改一遍，比回头再看讲解管用：</div>'
      +miss.map(shAnsRowHtml).join('');
  }else{
    h+='<div style="font-size:12.5px;color:#166534;margin:2px 0 8px">'
      +'全部格子都判对了——这一关的整理动作你已经会了。</div>';
  }
  h+='<details style="margin-top:4px"><summary style="cursor:pointer;font-size:12.5px;color:#3d6b4a">'
    +'展开全部 '+rows.length+' 格逐格对照</summary>'+rows.map(shAnsRowHtml).join('')+'</details>';
  return h+'</div>';
}

/* ---------- 标准答案②：模型输出该改哪几处（删 / 改 / 补） ----------
   「AI 跑完自己改了哪几处」是这一课真正的交付物，所以答案必须逐条给出：
   模型原话 → 应该改成什么 → 为什么，并对照学员写的修改说明是否点到。 */
function shDeltaHtml(u){
  const d=shDeltas(u); if(!d.length) return '';
  const R=shNorm(actsOf(u.id).rev||'').toLowerCase();
  const items=d.map(function(it){
    const hit=(it.kw||[]).some(function(k){ return k&&R.indexOf(shNorm(k).toLowerCase())>=0; });
    return {op:it.op||'改', frm:it.frm||'', to:it.to||'', why:it.why||'', hit:hit};
  });
  const cov=items.filter(function(x){return x.hit;}).length;
  const need=Math.min(2,items.length);
  let h='<div class="shref" style="margin-top:12px"><div class="hd">\u270D 标准答案 · 模型输出该动哪几处（删 / 改 / 补）</div>'
    +'<div class="anscov">本单元真正要动的是 <b>'+items.length+'</b> 处；你写的修改说明点到了 <b>'
    +cov+'/'+items.length+'</b> 处'+(cov>=need?'。':' —— 至少要点名 '+need+' 处、并写清改成什么才算真接手。')+'</div>';
  items.forEach(function(it){
    const cls=it.op==='删'?'cut':(it.op==='补'?'add':'fix');
    h+='<div class="ansrow '+(it.hit?'good':'')+'">'
      +'<div class="anshd"><span class="opb '+cls+'">'+esc(it.op)+'</span>'
      +'<span class="ansg" style="text-decoration:none;color:#4a5570">'+esc(it.frm)+'</span>'
      +'<span style="color:#9aa6bd">→</span><span class="answ">'+esc(it.to)+'</span>'
      +'<span class="anshit">'+(it.hit?'✓ 你写到了':'· 还没写到')+'</span></div>'
      +'<div class="answhy">'+esc(it.why)+'</div></div>';
  });
  return h+'</div>';
}

/* 提交后放出的：逐格答案 / 增删改清单 / 标准整理结果 / 原成品与人工修正说明
   顺序按学员最想看的排：先答案（我错在哪、AI 那份该改哪），再是完整标准表（默认折叠）。 */
function shRefHtml(u){
  const sh=shOf(u);
  let h=shAnsHtml(u)+shDeltaHtml(u)
    +'<div class="shref" style="margin-top:12px"><div class="hd">\u2714 判分依据：标准整理结果</div>'
    +'<details><summary style="cursor:pointer;font-size:12.5px;color:#3d6b4a">展开逐条素材的完整字段（含三处易判错说明）</summary>'
    +'<pre class="dtxt" style="background:#fff">'+esc(sh.refsheet)+'</pre></details></div>';
  if(u.demo&&u.demo.ref){
    h+='<details style="margin-top:12px"><summary>\uD83D\uDC41 跑完之后应该长这样（同一段提示词的真跑结果，已脱敏）</summary>'
      +'<div class="tpl">'+esc(sub(u.demo.ref))+'</div>'
      +((u.demo.fix&&u.demo.fix.length)?('<div style="font-size:12.8px;margin:10px 0 4px"><b>人在这份输出上做了哪几件事</b></div><ul class="rub">'+u.demo.fix.map(function(x){return '<li>'+esc(sub(x))+'</li>';}).join('')+'</ul>'):'')
      +((u.demo.judge)?('<div style="font-size:12.5px;color:var(--mut)">判断依据：'+esc(sub(u.demo.judge))+'</div>'):'')
      +'</details>';
  }
  return h;
}

/* ---------- 我要做：按评分要点自动打分 ---------- */
function gradeWork(uid){
  const ta=document.getElementById('work-text'); const t=(ta?ta.value:'').trim();
  const out=document.getElementById('work-out');
  if(t.length<20){ out.innerHTML='<div class="kv" style="border-color:#fecdd3;color:#be123c">内容太短。请按模板的 ■ 小节逐节填写，至少写满四项要点再提交——评分需要真实内容。</div>'; return null; }
  setAct(uid,'work',t);
  const r=scoreWorkText(findUnit(uid).u,t);
  out.innerHTML='<div class="kv" style="margin-bottom:0"><b>得分 '+r.score+' 分</b>（通关线 60）'
    +'<div class="bar"><i style="width:'+r.score+'%"></i></div>'
    +'<ul class="rub">'+r.detail.map(d=>'<li class="'+(d.ok?'ok':'')+'">'+esc(d.k)
      +((!d.ok&&d.hint)?(' <span class="hint">（'+esc(d.hint)+'）</span>'):'')+'</li>').join('')+'</ul>'
    +(r.need?'<div style="font-size:12.8px;color:#be123c">'+esc(r.need)+'</div>':'<div style="font-size:12.8px;color:#166534">已达通关线，可以结算本单元。</div>')
    +'</div>';
  if(r.ok) finishUnit(uid);
  else out.innerHTML+='<div style="font-size:12.6px;color:var(--mut);margin-top:6px">补强后再次提交即可。</div>';
  return r;
}

/* ---------- 问题 6：陪练接真模型 + 本地追问引擎 ---------- */
function addBubble(who,text){
  const c=document.getElementById('chat'); if(!c) return;
  const b=document.createElement('div'); b.className='bub '+(who==='me'?'me':(who==='sys'?'sys':'ai'));
  b.textContent=text; c.appendChild(b);
  if(b.scrollIntoView) b.scrollIntoView({block:'nearest'});
}
/* 换个追问：有材料时也要落到材料的具体条目上，不能只是念脚本 */
function matAskQ(u,i){
  const sp=u.spar||{};
  const role=sub(sp.role||'评审');
  const base=sub((sp.mustAsk&&sp.mustAsk[i])||'你的依据是什么？');
  const m=matOf(u.id);
  const items=m?matOrdered(matItems(m.text)):[];
  if(items.length){
    const it=items[i%items.length];
    return '（'+role+'）回到你第 '+(matItems(m.text).indexOf(it)+1)+' 项「'+matQuote(it,12)+'」：'+base;
  }
  return '（'+role+'）'+base;
}
function askQ(i){
  const f=findUnit(prog.cur); if(!f||!f.u.spar) return;
  const u=f.u;
  const q=(i<0)? u.spar.mustAsk[0] : u.spar.mustAsk[i];
  const line=(typeof matAskQ==='function')? matAskQ(u, (i<0?0:i)) : ('（'+sub(u.spar.role)+'）'+sub(q));
  addBubble('ai',line);
  sparHist.push({role:'assistant',content:line});
}
/* ===================== 内嵌 AI 陪练（不用新开 WorkBuddy） =====================
   通道优先级：① 已接入模型（本地代理 / 直连 Key）→ 页面内直接多轮对话
              ② 未接入 → 提示一键接入，或退回路线①复制指令去 WorkBuddy
   对话全程记入本单元进度（轮次 / 有据回答 / 是否划边界），与陪练环节同一套计分。 */
let SPAR_CHAT={uid:null,msgs:[],busy:false};
function sparChatSystem(u){
  if(u.spar&&u.spar.role) return sparSystem(u);
  /* 非陪练单元：用「本单元讲解员」人设，围绕本单元内容答疑 */
  return '你是企业内训《'+META.courseTag+'》的学习陪练，当前单元是「'+sub(u.title)+'」。'
   +'\n任务：'+sub(u.task||'')+''
   +'\n要求：1) 每次只回答一个点，不超过 90 字，口语化，不要列表和标题；'
   +'\n2) 优先结合'+CUSTOM.industry+'场景举例（'+(META.scenes||[]).join('/')+'）；'
   +'\n3) 学员回答空泛时，要求他给出具体数字、条款或口径；'
   +'\n4) 涉及合规与数据安全的判断，明确提醒「这一步要由你和合规确认」，不要替他下结论；'
   +'\n5) 不要编造'+META.industry+'的监管/制度条款，需要引用时用「贵司的数据分级办法」这类通称。'
   +'\n只输出你要说的那一句话，不要任何前缀说明。';
}
function openSparChat(uid){
  const f=findUnit(uid||prog.cur); if(!f) return;
  const u=f.u;
  SPAR_CHAT.uid=f.u.id;
  SPAR_CHAT.msgs=[{role:'system',content:sparChatSystem(u)}];
  const ready=(typeof llmReady==='function')&&llmReady();
  const box=document.getElementById('spar-chat-box');
  const firstQ=u.spar? matFirstQ(u)
              :('这一节讲的是「'+sub(u.title)+'」，你想先问哪一块？');
  box.innerHTML=
     '<div class="spar-hd"><div><h3>🤼 内嵌 AI 陪练</h3>'
    +'<div class="sub">'+esc(f.m.id+' · '+sub(u.title))+'　|　扮演：'+esc(u.spar?sub(u.spar.role):'本单元陪练')+'</div></div>'
    +'<button class="x" onclick="closeSparChat()">×</button></div>'
    +'<div class="spar-status">模型状态：'+(ready?'<span class="on">已连接 · 页面内直接对话</span>':'<span class="off">未连接 · 当前为本地追问引擎</span>')
      +(ready?'':' <button class="btn ghost" style="padding:2px 8px;font-size:11.5px" onclick="openLlm()">一键接入</button>'
             +' <button class="btn ghost" style="padding:2px 8px;font-size:11.5px" onclick="openSparAI(\''+f.u.id+'\')">复制指令去 WorkBuddy</button>')
    +'</div>'
    +'<div class="spar-body" id="spar-chat-body">'
      +'<div class="spar-msg ai"><div class="b">'+esc(firstQ)+'</div></div></div>'
    +'<div class="spar-ft"><textarea id="spar-chat-input" placeholder="先给结论，再给依据，最后说边界。回车发送（Shift+回车换行）"></textarea>'
      +'<button id="spar-chat-send" onclick="sparChatSend()">发送</button></div>';
  SPAR_CHAT.msgs.push({role:'assistant',content:firstQ});
  document.getElementById('spar-chat-modal').classList.add('on');
  const ta=document.getElementById('spar-chat-input');
  if(ta){
    ta.addEventListener('keydown',function(e){ if(e.key==='Enter'&&!e.shiftKey){ e.preventDefault(); sparChatSend(); } });
    setTimeout(function(){ try{ta.focus();}catch(e){} },80);
  }
}
function closeSparChat(){ document.getElementById('spar-chat-modal').classList.remove('on'); }
function sparChatBubble(who,text){
  const b=document.getElementById('spar-chat-body'); if(!b) return;
  const d=document.createElement('div'); d.className='spar-msg '+who;
  d.innerHTML='<div class="b">'+esc(text)+'</div>';
  b.appendChild(d); b.scrollTop=b.scrollHeight;
}
async function sparChatSend(){
  if(SPAR_CHAT.busy) return;
  const ta=document.getElementById('spar-chat-input'); if(!ta) return;
  const t=ta.value.trim(); if(!t){ return; }
  const uid=SPAR_CHAT.uid||prog.cur;
  const f=findUnit(uid); if(!f) return;
  const u=f.u;
  ta.value='';
  sparChatBubble('me',t);
  SPAR_CHAT.msgs.push({role:'user',content:t});

  /* 计入本单元进度：轮次 / 有据回答 / 责任边界 */
  let tr=(parseInt(actsOf(uid).cRounds||0,10)||0)+1;
  let bs=parseInt(actsOf(uid).best||0,10)||0;
  let bd=actsOf(uid).boundary?true:false;
  const evid=EVID_RE.test(t) && (/[0-9\uFF10-\uFF19]/.test(t) || /条款|原文|口径|来源|访谈|看板/.test(t));
  if(evid) bs++;
  if(BOUNDARY_RE.test(t)) bd=true;
  setAct(uid,'cRounds',tr); setAct(uid,'best',bs); setAct(uid,'boundary',bd?1:0);

  const btn=document.getElementById('spar-chat-send');
  SPAR_CHAT.busy=true; if(btn){ btn.disabled=true; btn.textContent='…'; }
  const body=document.getElementById('spar-chat-body');
  const typing=document.createElement('div'); typing.className='spar-typing'; typing.textContent='陪练正在思考…';
  if(body){ body.appendChild(typing); body.scrollTop=body.scrollHeight; }

  let reply=null, src='';
  if((typeof llmReady==='function')&&llmReady()){
    try{
      reply=await llmChat(SPAR_CHAT.msgs.slice(-13),{temperature:0.75,max_tokens:260});
      src='model'; SPAR_CHAT.modelErr=false;
    }catch(e){ reply=null; SPAR_CHAT.modelErr=true; console.warn('[陪练] 模型调用失败：',(e&&e.message)||e); }
  }
  if(!reply){
    try{ reply=localSparReply(u,t,tr-1); }
    catch(e){ console.warn('[陪练] 本地追问引擎异常：',e); reply='（'+sub((u.spar&&u.spar.role)||'本单元带教')+'）这一节你手头哪件事能直接用上？先说结论，再说依据。'; }
    src='local';
    /* 明明显示「已连接」却用了本地引擎，多半是模型调用失败/超时：把状态如实改掉，别让学员以为是模型在答 */
    if(SPAR_CHAT.modelErr){
      const st=document.querySelector('.spar-status');
      if(st) st.innerHTML='模型状态：<span class="off">本轮模型调用失败 · 已用本地追问引擎代答</span>'
        +' <button class="btn ghost" style="padding:2px 8px;font-size:11.5px" onclick="openLlm()">看看设置</button>';
    }
  }
  try{ typing.remove(); }catch(e){}
  /* 不在对话里加「【本地追问引擎】」这种系统前缀：状态条已经如实写明谁在答，
     对话里出现「引擎」字样很出戏。 */
  sparChatBubble('ai',reply);
  SPAR_CHAT.msgs.push({role:'assistant',content:reply});
  SPAR_CHAT.busy=false; if(btn){ btn.disabled=false; btn.textContent='发送'; }
  try{ ta.focus(); }catch(e){}
}

/* ===================== 陪练材料：把上一节真做出来的产出带进这一关 =====================
   背景：陪练的追问原本是预置脚本，学员刚写的《提效地图》根本没进来，
   「哪几项含手机号」永远是同一句，问得很机械。
   现在：① 自动取本模块上一节「我要做」的产出；② 允许上传 .txt/.md 或直接粘贴覆盖；
        ③ 追问会引用材料里的具体条目（第几项 + 原话片段）。 */
function matOf(uid){
  const a=actsOf(uid);
  const up=String(a.mat||'').trim();
  if(up) return {text:up, name:a.matName||'我上传的材料', src:'upload'};
  const f=findUnit(uid); if(!f) return null;
  const m=(COURSE.modules||[]).find(function(x){ return x.id===f.m.id; });
  if(!m) return null;
  const i=m.units.findIndex(function(x){ return x.id===uid; });
  for(let k=i-1;k>=0;k--){
    const pu=m.units[k];
    if(pu.step!=='todo') continue;
    const w=String((actsOf(pu.id)||{}).work||'').trim();
    if(w.length>=60) return {text:w, name:'《'+((pu.deliverable&&pu.deliverable.name)||pu.title)+'》', src:'prev', from:pu.id};
  }
  return null;
}
/* 材料里可被点名的条目：编号行 / 带 ■· 的行，太短的不算 */
function matItems(text){
  const out=[];
  String(text||'').split('\n').forEach(function(ln){
    const s=ln.replace(/^[\s■□◆●○▪•·\-\*>]+/,'').trim();
    if(s.length<12) return;
    if(/^[（(]?\s*[0-9]{1,2}\s*[)）.、．:：]/.test(s) || /^\s*[■□◆●○▪•·\-\*]/.test(ln)) out.push(s);
  });
  return out;
}
function matQuote(s,n){
  const t=String(s||'').replace(/^[（(]?\s*[0-9]{1,2}\s*[)）.、．:：]\s*/,'')
    .replace(/^[\s■□◆●○▪•·\-\*>]+/,'')
    .replace(/\s+/g,' ')
    .replace(/[（(][^）)]*[）)]\s*$/,'').trim();
  const L=n||16;
  return t.length>L? t.slice(0,L)+'\u2026' : t;
}
function findMatItem(items,re){
  for(let i=0;i<items.length;i++){ if(re.test(items[i])) return items[i]; }
  return '';
}
/* 每一轮从不同角度挑条目：先挑含个人信息的，再挑「公开来源」，再挑带耗时/成本的，
   最后挑标了责任/红线的。这样三轮问下来像真的在翻你的材料，而不是复读一句话。 */
const MAT_PROBE=[/手机号|电话|地址|订单号|姓名|身份证|会员|名单|个人信息|敏感/,
                 /公开|竞品|外部|第三方|来源|查来|截图/,
                 /耗时|小时|h\/周|预算|成本|报价|价格|费用|人天/,
                 /责任人|复核|签字|审批|风险|红线|授权/];
function matOrdered(items){
  const out=[];
  const add=function(re){ items.forEach(function(it){ if(re.test(it)&&out.indexOf(it)<0) out.push(it); }); };
  MAT_PROBE.forEach(add);
  items.forEach(function(it){ if(out.indexOf(it)<0) out.push(it); });
  return out;
}
/* 对手开口第一句：直接点材料里的某一条，而不是念脚本 */
/* 不同角色的第一问不该是同一句：合规官问数据字段、技术问接口、供应链问库存、
   用研问样本、品牌问预算、CEO 问责任。以前一律问「有没有手机号」，非合规角色问出来就很机械。 */
const ROLE_PROBE=[
  [/合规|法务|安全|风控/, /手机号|电话|地址|订单号|名单|个人信息|敏感|泄露/,
   '这一项到底用了哪些字段？里面有没有手机号、收货地址或订单号，脱敏到哪一层、谁签的字？'],
  [/技术|研发|运维|架构/, /接口|系统|埋点|改造|上线|灰度|字段|性能/,
   '这一项要动哪个系统？接口有没有、谁给你？能不能先做一个不动主链路的最小版本？'],
  [/供应链|采购|仓|库存/, /库存|备货|提前期|产能|周期|压货|批次/,
   '这一项要压多少库存、提前期多少天？第几周数据不对的话，第二批怎么退？'],
  [/用研|研究/, /样本|访谈|假设|验证|条数|证据|结论/,
   '这一项的依据是用户说的，还是你从行为里推的？样本几条、怎么抽的？'],
  [/品牌|营销|运营总监|增长/, /预算|成本|人日|ROI|投入|排期|坑位/,
   '这一项要花多少钱、占不占研发排期？凭什么把这份资源给你而不是给别人？'],
  [/CEO|总裁|委员会|总经理|VP/i, /责任|签字|风险|红线|谁负责|回滚/,
   '这一项如果判断错了，谁签字承担、怎么退回来？']
];
function matFirstQ(u){
  const sp=u.spar||{};
  const role=sub(sp.role||'评审');
  const fb=sub((sp.mustAsk&&sp.mustAsk[0])||'先说结论，再说依据。');
  const m=matOf(u.id);
  if(!m) return '（'+role+'）'+fb;
  const all=matItems(m.text);
  const items=matOrdered(all);
  if(!items.length) return '（'+role+'）'+fb;
  let hit=null;
  for(let i=0;i<ROLE_PROBE.length;i++){ if(ROLE_PROBE[i][0].test(role)){ hit=ROLE_PROBE[i]; break; } }
  let pick=items[0];
  if(hit){ for(let j=0;j<items.length;j++){ if(hit[1].test(items[j])){ pick=items[j]; break; } } }
  const n=all.indexOf(pick)+1;
  const ask=hit? hit[2] : '这一项的依据能指回哪份数据、条款或看板？谁留了这个证据？';
  return '（'+role+'）你第 '+n+' 项写「'+matQuote(pick,15)+'」——'+ask;
}
function matPromptBlock(u){
  const m=matOf(u.id); if(!m) return '';
  return '\n【学员已交的材料（'+m.name+'，真实内容，必须据此提问）】\n'
   + String(m.text).slice(0,1600)
   + '\n【铁律】每个问题都要点到材料里的具体条目（说「你第几项写的某某」并引用原话片段），'
   + '不要问材料里没有的泛泛问题；材料里没写的，就追问他为什么没写。';
}
function matBoxHtml(uid){
  const m=matOf(uid);
  let h='<div class="matbox"><div class="mhd">\uD83D\uDCCE 陪练材料'
    + (m? (m.src==='prev'?'　已自动带入上一节产出':'　你上传/粘贴的') : '') + '</div>';
  if(m){
    h+='<div class="mname">'+esc(m.name)+'　'+m.text.replace(/\s/g,'').length+' 字</div>'
     + '<div class="mhint">对手已经拿到这份材料，会挑里面的具体条目问，不再问泛泛的话。</div>'
     + '<details><summary>看一眼他手上拿的是什么</summary><pre class="dtxt" style="background:#fff;max-height:200px;overflow:auto">'+esc(m.text.slice(0,1600))+'</pre></details>';
  } else {
    h+='<div class="mhint">还没拿材料 —— 陪练只能问通用问题，会很机械。'
      + '把上一节做的产出贴进来（或上传文件），对手才会按你实际写的东西挑刺。</div>';
  }
  h+='<div class="mact">'
   + '<label class="lnk" style="cursor:pointer">上传文件（.txt / .md）'
   + '<input type="file" accept=".txt,.md,.markdown,text/plain" style="display:none" onchange="onMatFile(\''+uid+'\',this)"></label>'
   + (m?'<span class="lnk" onclick="clearMat(\''+uid+'\')">清空重贴</span>':'')
   + '</div>'
   + '<details'+(m?'':' open')+'><summary>或直接把材料粘进来</summary>'
   + '<textarea id="mat-text" placeholder="把《个人 AI 提效地图》全文贴进来（至少 40 字）">'+esc(m?m.text:'')+'</textarea>'
   + '<button class="btn ghost" style="margin-top:6px" onclick="useMat(\''+uid+'\')">用这份材料开练</button>'
   + '</details></div>';
  return h;
}
function rerenderMat(uid){
  const host=document.getElementById('mat-host');
  if(host){ host.innerHTML=matBoxHtml(uid); }
}
function useMat(uid){
  const el=document.getElementById('mat-text');
  const v=el?el.value.trim():'';
  if(v.length<40){ alert('材料太短了（至少 40 字）。把上一节的产出贴完整一点。'); return; }
  setAct(uid,'mat',v); setAct(uid,'matName','我粘贴的材料');
  rerenderMat(uid);
  const f=findUnit(uid);
  if(f){ addBubble('ai', matFirstQ(f.u)); }
}
function clearMat(uid){
  setAct(uid,'mat',''); setAct(uid,'matName','');
  rerenderMat(uid);
}
function onMatFile(uid,input){
  const f=input.files&&input.files[0]; if(!f) return;
  const rd=new FileReader();
  rd.onload=function(){
    const v=String(rd.result||'').trim();
    if(v.length<40){ alert('文件内容太短（至少 40 字）'); return; }
    setAct(uid,'mat',v); setAct(uid,'matName',f.name);
    rerenderMat(uid);
    const fu=findUnit(uid);
    if(fu){ addBubble('ai', matFirstQ(fu.u)); }
  };
  rd.readAsText(f);
}
function sparSystem(u){
  const m=u.spar||{};
  return '你是一场企业内训里的角色扮演评审，此刻扮演「'+sub(m.role||'评审')+'」。'
   +'你的立场：'+sub(m.persona||'只认依据与制度')+'。'
   +'学员刚完成《'+sub((u.deliverable&&u.deliverable.name)||'本单元产出')+'》，你是来挑它的漏洞的。'
   +'\n硬性要求：'
   +'\n1) 每次只说一段话、只问一个问题，全文不超过 70 字，口语化，像现场评审，禁止使用列表、编号和标题。'
   +'\n2) 必须引用学员上一句话里的具体词汇或原话片段来追问，让他知道你真的听了。'
   +'\n3) 若学员给出了可追溯依据（具体数字、文件条款、口径、访谈编号），先用一句话认可那一处，再往更狠的一层追问：这个前提不成立怎么办、边界在哪、口径对得上吗。'
   +'\n4) 若学员只是表态、复述问题或说空话，直接点破，并要求他给出数据或条款。'
   +'\n5) 你一定会问到这些方向：'+(m.mustAsk||[]).map(x=>sub(x)).join('；')+'。'
   +'\n6) 不要编造不存在的制度条款，需要引用时用「贵行的数据分级办法」这类通称。'
   + matPromptBlock(u)
   +'\n只输出你要说的那一句话，不要有任何前缀说明。';
}
function anchorOf(t){
  const s=t.replace(/\s+/g,'');
  const re=/《[^》]{1,10}》|第[0-9０-９]+条|[0-9１-９]+(?:\.[0-9]+)?%|[0-9０-９]+(个|条|项|份|处|类)|不下结论|边界|口径|看板|访谈|PII|脱敏|原文第/g;
  const m=s.match(re);
  if(m && m[0]){
    const i=s.indexOf(m[0]);
    return s.slice(Math.max(0,i), i+m[0].length+8).slice(0,18);
  }
  return s.slice(0,14);
}
function localSparReply(u,t,rounds){
  /* 非陪练单元（理解 / 演示 / 我要做）没有 u.spar，这里必须能兜住：
     以前直接取 u.spar.role 会抛异常，被上层 catch 兜成「本地追问引擎不可用」。 */
  const sp=u.spar||{};
  const role=sub(sp.role||'本单元带教');
  const anchor=anchorOf(t);
  const hasNum=/[0-9０-９]/.test(t), hasEvid=EVID_RE.test(t), bd=BOUNDARY_RE.test(t);
  const fb=['这一节的内容，你手上哪件事能立刻用上？','你的依据能指回哪份数据、条款或看板？','哪一步你不敢自己定，要交给谁确认？'];
  const arr=(sp.mustAsk&&sp.mustAsk.length)?sp.mustAsk:fb;
  const q=arr[rounds % Math.max(1,arr.length)] || '你的依据是什么？';
  /* 有材料就从材料里点名一条来问：这才是「按你实际写的东西挑刺」 */
  const mat=matOf(u.id);
  const allItems=mat?matItems(mat.text):[];
  const items=allItems.length?matOrdered(allItems):[];
  let lab='';
  if(items.length){
    const it=items[rounds % items.length];
    lab='你第 '+(allItems.indexOf(it)+1)+' 项写的「'+matQuote(it,14)+'」';
  }
  if(!hasEvid){
    if(lab) return '（'+role+'）'+lab+'——这一条到底用了哪些字段？有没有手机号、地址或订单号？脱敏到哪一层、谁留的痕？说不出出处，这条我先挂起。';
    return '（'+role+'）你说「'+anchor+'\u2026」\u2014\u2014 我听到的是立场，不是依据。这条结论落在哪份文件、哪张看板、哪组数据上？说得出出处，我们才谈得下去。';
  }
  if(!hasNum){
    if(lab) return '（'+role+'）'+lab+'方向是对的，但你没给数。这项一周占多少小时、涉及几条数据、覆盖哪些字段？口径谁来定？';
    return '（'+role+'）「'+anchor+'\u2026」方向对了，但你给的是说法不是数。具体到多少、覆盖哪些产品、口径怎么定义的？';
  }
  if(!bd){
    if(lab) return '（'+role+'）「'+anchor+'\u2026」这一处我暂时认。那我问下一层：'+lab+'这条的依据如果本身不成立（比如那个「公开页」其实要登录才能看全），你的结论要不要降级？哪部分你不敢下结论、要交给谁？';
    return '（'+role+'）「'+anchor+'\u2026」这一处我暂时认。那我问下一层：如果这条依据本身不成立，你的结论要不要降级？哪部分你不敢下结论、要交给谁？';
  }
  if(lab) return '（'+role+'）「'+anchor+'\u2026」有数、有出处、也划了边界，这条我认。再说一处：'+lab+'里如果有个人信息，谁能证明你没带出去？';
  return '（'+role+'）「'+anchor+'\u2026」有数、有出处、也划了边界，这条我认。最后再确认一件事：'+sub(q);
}
async function sendSpar(){
  if(sparBusy) return;
  const ta=document.getElementById('spar-text'); if(!ta) return;
  const t=ta.value.trim();
  if(!t){ alert('先写点内容再发送'); return; }
  const f=findUnit(prog.cur); if(!f||!f.u.spar) return;
  const u=f.u;
  addBubble('me',t); ta.value='';
  sparHist.push({role:'user',content:t});
  flow.tries++;
  const evid=EVID_RE.test(t) && (/[0-9０-９]/.test(t) || /条款|原文|口径|来源|访谈|看板/.test(t));
  if(evid) flow.best++;
  if(BOUNDARY_RE.test(t)) flow.boundary=true;
  setAct(prog.cur,'rounds',flow.tries);
  setAct(prog.cur,'best',flow.best);
  setAct(prog.cur,'boundary',flow.boundary?1:0);

  sparBusy=true; ta.disabled=true;
  const btnText='\u2026'; let reply=null, src='';
  if(llmReady()){
    try{
      const msgs=[{role:'system',content:sparSystem(u)}].concat(sparHist.slice(-12));
      reply=await llmChat(msgs,{temperature:0.75,max_tokens:220});
      src='model';
    }catch(e){ reply=null; }
  }
  if(!reply){ reply=localSparReply(u,t,flow.tries-1); src='local'; }
  sparBusy=false; ta.disabled=false; try{ ta.focus(); }catch(e){}
  addBubble('ai',reply);
  sparHist.push({role:'assistant',content:reply});

  const st=document.createElement('div'); st.className='kv';
  st.style.cssText='color:var(--mut);font-size:12.4px';
  st.textContent='第 '+flow.tries+' 轮 · 有据回答 '+flow.best+' 次 · '+(flow.boundary?'已划边界':'尚未提到边界')+' · '+(src==='model'?'由云端模型实时生成':'本地追问引擎（未接入模型）');
  const host=document.getElementById('spar-out');
  if(host){ host.innerHTML=''; host.appendChild(st); }

  const r=computeUnit(prog.cur);
  if(r.ok){
    setAct(prog.cur,'passed',1);
    addBubble('sys','\u2705 陪练通过：'+flow.tries+' 轮、'+flow.best+' 次给出依据'+(flow.boundary?'、已划清责任边界':'')+'。');
    finishUnit(prog.cur);
  } else if(flow.tries>=3){
    addBubble('sys','距离通关还差：'+r.need);
  }
}

/* ===================== 模块测验（问题 4：能打开） ===================== */
let qzState=null;
function openQuiz(mid){
  const qs=QUIZ[mid]; if(!qs) return;
  qzState={mid:mid, idx:0, picked:new Array(qs.length).fill(null)};
  renderQuiz();
  document.getElementById('quiz-modal').classList.add('on');
}
function renderQuiz(){
  const qs=QUIZ[qzState.mid], cur=qs[qzState.idx];
  const box=document.getElementById('quiz-box');
  const mi=COURSE.modules.findIndex(m=>m.id===qzState.mid);
  box.innerHTML='<div class="mclose" onclick="closeQuiz()">\u2715</div>'
    +'<h3>'+qzState.mid+' 模块测验</h3>'
    +'<p>'+esc(COURSE.modules[mi].title)+' · 第 '+(qzState.idx+1)+' / '+qs.length+' 题</p>'
    +'<div class="qz-item"><div class="q">'+sub(cur.q)+'</div>'
    +cur.opts.map((o,i)=>'<div class="op'+(qzState.picked[qzState.idx]===i?' sel':'')+'" id="op'+i+'" onclick="pickQ('+i+')">'+esc(sub(o))+'</div>').join('')
    +'<div class="tip" id="qz-tip"></div></div>'
    +'<div class="acts"><button class="btn" onclick="nextQ()">'+(qzState.idx===qs.length-1?'提交并查看得分':'下一题')+'</button></div>';
}
/* 模块测验：点选只记录 + 高亮，不判对错；交卷后统一给答案与解析 */
function pickQ(i){
  qzState.picked[qzState.idx]=i;
  document.querySelectorAll('#quiz-box .op').forEach(el=>el.classList.remove('sel','right','wrong'));
  const el=document.getElementById('op'+i); if(el) el.classList.add('sel');
}
function nextQ(){
  const qs=QUIZ[qzState.mid];
  if(qzState.picked[qzState.idx]===null){ alert('请先选择一个答案'); return; }
  if(qzState.idx<qs.length-1){ qzState.idx++; renderQuiz(); return; }
  const right=qzState.picked.filter((p,i)=>p===qs[i].a).length;
  const pct=Math.round(right/qs.length*100);
  prog.quizzes[qzState.mid]=pct>=60;
  saveProg(); refreshProg(); renderSidebar();
  const mods=COURSE.modules, mi=mods.findIndex(m=>m.id===qzState.mid);
  const nextMid=mods[mi+1];
  const box=document.getElementById('quiz-box');
  box.innerHTML='<div class="mclose" onclick="closeQuiz()">\u2715</div>'
    +'<h3>'+(pct>=60?'\uD83C\uDF89 模块通关':'\uD83D\uDCCC 再补一补')+'</h3>'
    +'<p>得分 <b style="color:var(--blue-d);font-size:20px">'+right+' / '+qs.length+'</b>（'+pct+'%）· 你已完成「'+qzState.mid+' '+mods[mi].title.slice(0,12)+'」的学习闭环。</p>'
    +'<details open style="margin:10px 0;text-align:left"><summary style="cursor:pointer;font-size:13px;color:var(--mut);margin-bottom:6px">逐题回顾：你的选择 / 正确答案 / 解析</summary>'
    + qs.map(function(q,i){
        const my=qzState.picked[i], ok=(my===q.a);
        return '<div class="qz-item" style="margin:8px 0"><div class="q">'+(i+1)+'. '+esc(sub(q.q))+'</div>'
          +'<div style="font-size:12.8px;color:'+(ok?'#166534':'#be123c')+';margin:2px 0 4px">'
          +(ok?'\u2705 你选对了：'+esc(sub(q.opts[my]||''))
              :'\u274C 你选了：'+esc(sub(q.opts[my]==null?'未选':q.opts[my]))+'　\u2192 正确答案：'+esc(sub(q.opts[q.a]||'')))
          +'</div>'
          +((q.tip||q.why)?'<div class="tip" style="display:block">'+esc(sub(q.tip||q.why))+'</div>':'')
          +'</div>';
      }).join('')
    +'</details>'
    +'<div class="acts">'
    +(nextMid?'<button class="btn ok" onclick="closeQuiz();openUnit(\''+nextMid.units[0].id+'\')">进入 '+nextMid.id+' '+nextMid.title.slice(0,8)+' \u2192</button>'
             :'<button class="btn ok" onclick="closeQuiz();openUnit(\'M0U1\')">回到起点重学一轮</button>')
    +'<button class="btn ghost" onclick="openQuiz(\''+qzState.mid+'\')">再练一遍本模块</button>'
    +'</div>'
    +(pct<60?'<p style="color:#be123c">未达 60%，建议先回看单元视频与课件再重测。</p>':'');
}
function closeQuiz(){ document.getElementById('quiz-modal').classList.remove('on'); }

/* 点遮罩关闭弹窗 */
['quiz-modal','llm-modal','lf-modal','spar-chat-modal'].forEach(id=>{
  const el=document.getElementById(id);
  if(el) el.addEventListener('click',ev=>{ if(ev.target===el) el.classList.remove('on'); });
});

/* ===================== 学习指引（本单元路径 + 下一步） ===================== */
const STEP_ORDER=['understand','demo','todo','spar'];
const STEP_HINT={
  understand:'看视频讲解 → 做 3 道自检题 → 按三问写收获（① 结论 ② 用在哪件事 ③ 还不确定什么）。每问要写到具体对象（哪份数据 / 哪件事 / 哪个口径），凑字数不给分。本环节只验理解，不做陪练。',
  demo:'先按框架把多份素材整理成结构化字段（自动判分）→ 用整理结果请模型跑一遍 → 把输出改成你自己的终稿，写清改了哪几处。',
  todo:'按模板产出本单元交付物，提交后系统自动评分（≥60 分通关）。',
  spar:'与 AI 陪练至少 3 轮对话，给出可追溯依据，并划清责任边界。'
};
function guideCard(uid,m,u,st){
  const mi=COURSE.modules.indexOf(m);
  const ui=m.units.indexOf(u);
  const total=m.units.length;
  const stepDone={}; STEP_ORDER.forEach(s=>stepDone[s]=false);
  m.units.forEach(x=>{ const s=prog.units[x.id]; if(s&&s.done&&stepDone[x.step]!==undefined) stepDone[x.step]=true; });
  const curDone=!!(st&&st.done);
  const stepsHtml=STEP_ORDER.map(s=>{
    const cls='g-step'+(s===u.step?' cur':'')+(stepDone[s]&&s!==u.step?' done':'');
    const ico=(s===u.step)?'▶':(stepDone[s]?'✓':'');
    return '<span class="'+cls+'">'+(ico?'<b style="margin-right:3px">'+ico+'</b>':'')+STEP_LABEL[s]+'</span>';
  }).join('');
  const hasDeliv=!!(u.deliverable&&u.deliverable.name);
  const durMin=Math.max(1,Math.round(unitSec(u)/60/RATE_DEF));
  const path=[
    '观看上方<b>视频讲解</b>（约 '+durMin+' 分钟，'+RATE_DEF+'\u00D7 速）',
    '完成下方<b>「看完就练」/ 本环节活动</b>：'+STEP_HINT[u.step],
    '点<b>「提交并结算本单元」</b>，达到 60 分即通关',
    hasDeliv? '本单元含交付物：复制模板 → 在 WorkBuddy 找 <b>真·AI 陪练</b> → 回来做 <b>AI 打分</b>（可选，作能力佐证）' : '本单元无独立交付物，通关即完成'
  ];
  const pathHtml=path.map((p,i)=>'<li'+(i===1?' class="lead"':'')+'>'+p+'</li>').join('');
  const modDone=m.units.filter(x=>prog.units[x.id]&&prog.units[x.id].done).length;
  let next;
  if(curDone){
    const delivTodo = hasDeliv ? '① 完成交付物评审（若还没做）→ ' : '';
    next='✅ 本单元已通关。建议：'+delivTodo+'② 进入<b>下一单元</b> → ③ 本模块 8 单元全部通关后，在左侧栏点开 <b>📝 模块测验</b>。';
  } else {
    next='完成本单元活动、达到 60 分结算后，点底部<b>「下一单元」</b>继续。本模块已通关 <b>'+modDone+'/'+total+'</b> 单元，全部通关后左侧栏会出现 <b>📝 模块测验</b>入口。';
  }
  if(ui===total-1 && !prog.quizzes[m.id]){
    next+=' <b>本单元是 '+m.id+' 的最后一节</b>，通关后别忘了做模块测验。';
  }
  return '<div class="guide"><h3>🧭 学习指引</h3>'
    +'<div class="g-ctx">📍 你现在在 <b>'+m.id+' · '+modTitle(m)+'</b> · 第 '+(ui+1)+'/'+total+' 单元'
    +(curDone?' · <span style="color:#166534;font-weight:700">本单元已通关</span>':'')
    +'</div>'
    +'<div class="g-steps">'+stepsHtml+'</div>'
    +'<ul class="g-path">'+pathHtml+'</ul>'
    +'<div class="g-next">➡️ '+next+'</div></div>';
}
function doneNext(uid){
  const fu=findUnit(uid); if(!fu) return '';
  const m=fu.m, u=fu.u;
  const hasDeliv=!!(u.deliverable&&u.deliverable.name);
  const modDone=m.units.filter(x=>prog.units[x.id]&&prog.units[x.id].done).length;
  const parts=[];
  if(hasDeliv && !(prog.scores&&prog.scores['u_'+uid]!=null)) parts.push('完成交付物评审（AI 打分）');
  parts.push('进入下一单元');
  if(modDone===m.units.length && !prog.quizzes[m.id]) parts.push('点开左侧 📝 模块测验');
  if(!parts.length) return '';
  return '<div class="g-next" style="margin:8px auto 2px;max-width:520px;text-align:left">➡️ 下一步：'+parts.map(function(p,i){return (i+1)+'. '+p;}).join('　')+'</div>';
}

/* ===================== 反馈（参考测评设计：FB_TYPE/FB_CAT/FB_SEV + 自动归类） ===================== */
const FB_TYPE = {text:{n:'文字',i:'✍️'}, image:{n:'截图',i:'🖼️'}, audio:{n:'语音',i:'🎙️'}, video:{n:'录屏',i:'🎬'}};
const FB_CAT  = {bug:{n:'功能缺陷',i:'🐞'}, feat:{n:'功能建议',i:'💡'}, ux:{n:'体验问题',i:'😣'}, other:{n:'其他',i:'💬'}};
const FB_SEV  = {high:'高',mid:'中',low:'低'};
function classifyFeedback(text){
  text=(text||'')+'';
  var s={bug:0,feat:0,ux:0};
  ['报错','错误','崩','闪退','打不开','无法','不能','失效','白屏','卡死','异常','乱码','丢失','失败','不对','重复','bug','404','无反应','没反应','提示错误'].forEach(function(w){if(text.indexOf(w)>=0)s.bug++;});
  ['希望','建议','增加','添加','支持','期待','想要','最好能','能否','能不能','希望有','上新','拓展','能不能加','应该提供','缺少','没有','需要','功能'].forEach(function(w){if(text.indexOf(w)>=0)s.feat++;});
  ['太慢','太卡','卡顿','找不到','难找','复杂','繁琐','麻烦','看不懂','不清楚','不明显','丑','难用','体验','布局','样式','太小','太大','遮挡','误触','引导','提示不清','别扭','绕','步骤多','点不到'].forEach(function(w){if(text.indexOf(w)>=0)s.ux++;});
  var best='other',bn=0;
  ['bug','feat','ux'].forEach(function(c){if(s[c]>bn){bn=s[c];best=c;}});
  return best;
}
let FB={type:'text',cats:[],sev:'mid',text:'',imgs:[],media:{},contact:''};
let FB_CTX='';
function openFb(){
  const f=findUnit(prog.cur);
  FB_CTX = f ? (f.m.id+' · '+modTitle(f.m)+' · 单元 '+f.u.id+'（'+STEP_LABEL[f.u.step]+'环节）') : '未知位置';
  FB={type:'text',cats:[],sev:'mid',text:'',imgs:[],media:{},contact:''};
  fbRenderInner();
  document.getElementById('lf-modal').classList.add('on');
}
function closeFb(){ document.getElementById('lf-modal').classList.remove('on'); }
function fbSetType(t){ fbSaveEditor(); FB.type=t; fbRenderInner(); }
function fbSetCat(c){ fbSaveEditor(); const i=FB.cats.indexOf(c); if(i>=0)FB.cats.splice(i,1); else FB.cats.push(c); fbRenderInner(); }
function fbSetSev(v){ fbSaveEditor(); FB.sev=v; fbRenderInner(); }
function fbSaveEditor(){
  const ta=document.getElementById('fb-text'); if(ta) FB.text=ta.value;
  const nm=document.getElementById('fb-name'), cp=document.getElementById('fb-company'), ct=document.getElementById('fb-contact');
  if(nm||cp||ct){
    IDENT={name:(nm?nm.value.trim():IDENT.name),
           company:(cp?cp.value.trim():IDENT.company),
           role:IDENT.role||META.roleLabel,
           contact:(ct?ct.value.trim():IDENT.contact)};
    try{ localStorage.setItem(_axKey('aidax_ident_v1'),JSON.stringify(IDENT)); }catch(e){}
  }
  if(ct) FB.contact=ct.value.trim();
}
/* ---- 图片灯箱：点任意截图放大，点背景/× 关闭 ---- */
function fbZoom(src){
  if(!src) return;
  const m=document.createElement('div');
  m.className='lb-mask';
  m.innerHTML='<button class="lb-close">×</button><img src="'+src+'" alt="截图放大">';
  m.onclick=function(e){ if(e.target===m||e.target.className==='lb-close'){ m.remove(); } };
  document.body.appendChild(m);
}
function fbPreviewHtml(){
  let h='';
  (FB.imgs||[]).forEach(function(im,i){
    if(!im.src){ h+='<span class="lf-file">🖼️ '+esc(im.name||('截图'+(i+1)))+'（原图过大，仅记录文件名）</span><button class="lf-cat" style="padding:2px 8px" onclick="fbDelImg('+i+')">✕</button>'; return; }
    h+='<span class="lf-thumb-wrap"><img src="'+im.src+'" alt="截图'+(i+1)+'" onclick="fbZoom(this.src)" title="点击放大">'
      +'<button class="lf-cat" style="padding:2px 8px;margin-top:4px;display:block" onclick="fbDelImg('+i+')">✕ 移除</button></span>';
  });
  const m=FB.media||{};
  if(m.audio) h+='<span class="lf-file">🎙️ '+esc(m.audio.name)+'</span>';
  if(m.video) h+='<span class="lf-file">🎬 '+esc(m.video.name)+'</span>';
  return h;
}
function fbRenderInner(){
  const box=document.getElementById('lf-box');
  let html='<div class="lf-head"><span style="font-size:20px">🐞</span><h3>提交问题反馈 / 建议</h3><button class="lf-close" onclick="closeFb()">×</button></div>';
  html+='<div class="lf-meta">📍 当前位置：'+esc(FB_CTX)
      +'<br>'+(identLabel()? ('👤 '+esc(identLabel())+' · 身份已记录') : '👤 尚未填写身份，第 ⑤ 项补一下我们才能回访')
      +'<br>自动附带你的学习上下文，方便我们定位问题。</div>';
  html+='<div class="lf-label">① 反馈类型（录入方式）</div><div class="lf-type-grid">';
  Object.keys(FB_TYPE).forEach(function(k){ html+='<button class="lf-type'+(FB.type===k?' on':'')+'" onclick="fbSetType(\''+k+'\')"><span class="ti">'+FB_TYPE[k].i+'</span>'+FB_TYPE[k].n+'</button>'; });
  html+='</div>';
  html+='<div class="lf-label">② 问题分类（可多选；留空则由系统按描述自动识别）</div><div class="lf-cat-row">';
  Object.keys(FB_CAT).forEach(function(k){ html+='<button class="lf-cat'+(FB.cats.indexOf(k)>=0?' on':'')+'" onclick="fbSetCat(\''+k+'\')">'+FB_CAT[k].i+' '+FB_CAT[k].n+'</button>'; });
  html+='</div>';
  html+='<div class="lf-label">③ 严重度</div><div class="lf-sev-row">';
  Object.keys(FB_SEV).forEach(function(k){ html+='<button class="lf-sev'+(FB.sev===k?' on':'')+'" onclick="fbSetSev(\''+k+'\')">'+FB_SEV[k]+'</button>'; });
  html+='</div>';
  html+='<div class="lf-label">④ 描述（bug 请说明：什么操作 / 看到了什么 / 期望怎样）</div>';
  html+='<textarea id="fb-text" class="score-ta" style="min-height:110px" placeholder="例如：播放 M3U2 视频后点「下一单元」没反应；或：希望加一个快捷键跳到下一单元…">'+esc(FB.text)+'</textarea>';
  html+='<div class="lf-media-row"><button onclick="document.getElementById(\'lf-img\').click()">🖼️ 上传截图</button><button onclick="document.getElementById(\'lf-audio\').click()">🎙️ 上传语音</button><button onclick="document.getElementById(\'lf-vid\').click()">🎬 上传录屏</button>'
      +'<input type="file" id="lf-img" accept="image/*" multiple hidden><input type="file" id="lf-audio" accept="audio/*" hidden><input type="file" id="lf-vid" accept="video/*" hidden></div>';
  html+='<div class="lf-drop" id="lf-drop">📋 可直接按 Ctrl/⌘+V 粘贴截图，或把图片拖到这里（支持多张）</div>';
  html+='<div class="lf-preview" id="lf-preview">'+fbPreviewHtml()+'</div>';
  html+='<div class="lf-label">⑤ 你是谁（随反馈一起提交，我们才知道是谁提的、怎么回访）</div>';
  html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'
      +'<input id="fb-name" class="score-inp" style="width:100%;min-width:0" placeholder="姓名" value="'+esc(IDENT.name||'')+'">'
      +'<input id="fb-company" class="score-inp" style="width:100%;min-width:0" placeholder="企业/机构" value="'+esc(IDENT.company||'')+'">'
      +'</div>';
  html+='<input id="fb-contact" class="score-inp" style="width:100%;margin-top:8px" placeholder="微信 / 邮箱 / 电话（选填，方便回访）" value="'+esc(IDENT.contact||FB.contact||'')+'">';
  html+='<div class="lf-note" style="margin-top:6px;'+(identLabel()?'':'color:#a16207')+'">'
      +(identLabel()? ('当前身份：'+esc(identLabel())+'（已存本机，下次自动带出）')
                    : '还没填过身份。不填也能提交，但后台会显示「匿名学员」，我们没法回访你。')
      +'</div>';
  const pend=fbOutbox().length;
  html+='<div class="lf-foot"><button class="btn" onclick="submitFb()">提交反馈</button>'
      +(pend?'<button class="btn ghost" onclick="fbRetryAll()">🔄 补推待发送（'+pend+'）</button>':'')
      +'<button class="btn ghost" onclick="fbSelfTest()">🔧 云端自检</button><button class="btn ghost" onclick="fbExport()">导出我的反馈记录</button><button class="btn ghost" onclick="closeFb()">取消</button></div>';
  html+='<div class="lf-note">反馈已接入云端：提交后自动同步到管理员后台（刚哥可见），同时本机也留存一份、并复制可发送文本。无需重复提交。</div>';
  box.innerHTML=html;
  const img=document.getElementById('lf-img'); if(img) img.onchange=function(e){ fbAddFiles(e.target.files,'image'); img.value=''; };
  const au=document.getElementById('lf-audio'); if(au) au.onchange=function(e){ fbAddFile(e.target.files[0],'audio'); };
  const vid=document.getElementById('lf-vid'); if(vid) vid.onchange=function(e){ fbAddFile(e.target.files[0],'video'); };
  /* 粘贴截图：弹窗打开期间监听 paste */
  if(!window._fbPasteBound){
    window._fbPasteBound=true;
    document.addEventListener('paste', function(e){
      const modal=document.getElementById('lf-modal');
      if(!modal || !modal.classList.contains('on')) return;
      const it=(e.clipboardData&&e.clipboardData.items)||[];
      const pics=[];
      for(let i=0;i<it.length;i++){ if(it[i].type&&it[i].type.indexOf('image/')===0){ const f=it[i].getAsFile(); if(f) pics.push(f); } }
      if(pics.length){
        e.preventDefault();
        fbAddFiles(pics,'image');
        toast('已粘贴 '+pics.length+' 张截图');
      }
    });
  }
  /* 拖拽图片 */
  const dz=document.getElementById('lf-drop');
  if(dz){
    dz.onclick=function(){ document.getElementById('lf-img').click(); };
    dz.ondragover=function(e){ e.preventDefault(); dz.classList.add('over'); };
    dz.ondragleave=function(){ dz.classList.remove('over'); };
    dz.ondrop=function(e){
      e.preventDefault(); dz.classList.remove('over');
      const fs=(e.dataTransfer&&e.dataTransfer.files)||[];
      const pics=[]; for(let i=0;i<fs.length;i++){ if(fs[i].type.indexOf('image/')===0) pics.push(fs[i]); }
      if(pics.length){ fbAddFiles(pics,'image'); toast('已添加 '+pics.length+' 张截图'); }
    };
  }
}
function fbAddFiles(list,kind){
  if(!list||!list.length) return;
  const arr=Array.prototype.slice.call(list);
  let n=arr.length;
  arr.forEach(function(f){
    const r=new FileReader();
    r.onload=function(){
      const src=r.result;
      if(src.length>1500000){ FB.imgs.push({src:'',name:f.name,big:true}); toast('「'+f.name+'」较大，仅记录文件名，请单独发送原图'); }
      else FB.imgs.push({src:src,name:f.name});
      if(--n<=0) fbRenderInner();
    };
    r.readAsDataURL(f);
  });
}
function fbAddFile(file,kind){
  if(!file) return;
  if(kind==='image'){
    const r=new FileReader();
    r.onload=function(){
      const src=r.result;
      if(src.length>1500000){ toast('截图较大（>'+(src.length/1e6).toFixed(1)+'MB），本机记录仅存文件名，请单独发送原图'); FB.imgs.push({src:'',name:file.name,big:true}); }
      else FB.imgs.push({src:src,name:file.name});
      fbRenderInner();
    };
    r.readAsDataURL(file);
  } else {
    FB.media[kind]={name:file.name,size:file.size};
    fbRenderInner();
    toast('已附'+(kind==='audio'?'语音':'录屏')+'：'+file.name);
  }
}
function fbDelImg(i){ FB.imgs.splice(i,1); fbRenderInner(); }
function fbReport(){
  fbSaveEditor();
  let cats=FB.cats.slice();
  if(!cats.length) cats=[classifyFeedback(FB.text)];
  const typeName=FB_TYPE[FB.type]?FB_TYPE[FB.type].n:FB.type;
  const catNames=cats.map(function(c){return FB_CAT[c]?FB_CAT[c].i+' '+FB_CAT[c].n:c;}).join('、');
  const att=[];
  (FB.imgs||[]).forEach(function(im,i){ att.push('截图'+(i+1)+(im.big?'（'+im.name+'，请单独发送原图）':'（已附）')); });
  if(FB.media.audio) att.push('语音：'+FB.media.audio.name);
  if(FB.media.video) att.push('录屏：'+FB.media.video.name);
  const now=new Date();
  const pad=function(x){return (''+x).padStart(2,'0');};
  const ts=now.getFullYear()+'-'+pad(now.getMonth()+1)+'-'+pad(now.getDate())+' '+pad(now.getHours())+':'+pad(now.getMinutes());
  const L=[];
  L.push('【'+META.courseTag+' · 用户反馈】');
  L.push('提交人：'+(IDENT.name||'匿名学员')+(IDENT.company?('（'+IDENT.company+'）'):'')+(IDENT.role?(' · '+IDENT.role):''));
  L.push('类型：'+typeName+'　|　分类：'+catNames+'　|　严重度：'+FB_SEV[FB.sev]);
  L.push('位置：'+FB_CTX);
  L.push('时间：'+ts);
  L.push('描述：');
  L.push((FB.text||'（未填写）').trim());
  if(att.length) L.push('附件：'+att.join('、'));
  if(IDENT.contact||FB.contact) L.push('联系方式：'+(IDENT.contact||FB.contact));
  return L.join('\n');
}
function submitFb(){
  fbSaveEditor();
  if(!FB.text.trim() && !FB.imgs.length && !(FB.media.audio||FB.media.video)){ toast('请先填写描述或附上截图/录音'); return; }
  const report=fbReport();
  let cats=FB.cats.length?FB.cats:[classifyFeedback(FB.text)];
  let arr=[]; try{ arr=JSON.parse(localStorage.getItem('aidax_newbie_grad_feedback')||'[]'); }catch(e){ arr=[]; }
  const id='f_'+Date.now().toString(36)+Math.random().toString(36).slice(2,6);
  const doc={
    id:id, ts:Date.now(),
    /* 身份：姓名 + 真实企业 + 岗位 + 联系方式，后台才认得出「谁提的、哪家、怎么回访」。
       company 仍取课程固定值（对齐全课聚合同一位置 + 满足 feedback 表 RLS 的 tenant 判定），
       真实企业放 org，不改变既有按课程聚合的查询口径。 */
    user:IDENT.name || IDENT.contact || '匿名学员',
    role:IDENT.role || META.roleLabel,
    org:IDENT.company || '',
    company:META.cloudCompany, type:FB.type, sev:FB.sev, cat:cats[0], cats:cats,
    text:FB.text, images:FB.imgs, media:FB.media, ownerKey:finOwner(),
    page:META.cloudCompany, industry:META.industry, status:'new', ctx:FB_CTX,
    contact:IDENT.contact || FB.contact,
    identity:{name:IDENT.name||'', company:IDENT.company||'', role:IDENT.role||'', contact:IDENT.contact||FB.contact||''}
  };
  arr.push({ts:doc.ts,type:doc.type,cats:cats,sev:doc.sev,text:doc.text,ctx:doc.ctx,
            attach:(FB.imgs.length+(FB.media.audio?1:0)+(FB.media.video?1:0)),
            user:doc.user, org:doc.org, contact:doc.contact});
  try{ localStorage.setItem('aidax_newbie_grad_feedback', JSON.stringify(arr)); }catch(e){ toast('本机存储已满，但反馈已尝试同步云端'); }
  copyText(report);
  if(typeof window.supabase!=='undefined' && navigator.onLine!==false){
    fbEnqueue(doc);
    pushFeedbackToCloud(doc, function(ok,err){ showFbDone(ok, arr.length, report, err); });
  } else {
    fbEnqueue(doc);
    showFbDone(false, arr.length, report, '当前离线或 SDK 未加载');
  }
}
function showFbDone(ok,n,report,err){
  const box=document.getElementById('lf-box');
  const pending=fbOutbox().length;
  const msg = ok
    ? '<p style="font-size:13px;color:#2e7d4f;margin:6px 0 4px">✅ 已同步到管理员后台，刚哥会在「反馈」面板收到这条反馈。</p>'
    : '<p style="font-size:13px;color:var(--mut);margin:6px 0 4px">本机已保存（共 '+n+' 条）。已排队待补推（'+pending+' 条），联网后点「重试同步」即可送达；当前也已复制可发送文本。</p>'
      + (err?'<div class="lf-report" style="margin-top:6px;max-height:90px;color:#be123c">失败原因：'+esc(err)+'</div>':'');
  const extra = ok ? '' : '<button class="btn ghost" onclick="fbRetryAll()">🔄 重试同步</button><button class="btn ghost" onclick="fbSelfTest()">🔧 云端自检</button>';
  box.innerHTML='<div class="lf-head"><span style="font-size:20px">✅</span><h3>已记录</h3><button class="lf-close" onclick="closeFb()">×</button></div>'
    + msg
    +'<div class="lf-report">'+esc(report)+'</div>'
    +'<div class="lf-foot"><button class="btn" onclick="copyText(document.querySelector(\'.lf-report\').textContent)">再复制一次</button>'+extra+'<button class="btn ghost" onclick="fbExport()">导出全部记录</button><button class="btn ghost" onclick="closeFb()">关闭</button></div>';
  toast(ok?'反馈已提交到管理员后台':'已记录（待补推），可点「重试同步」');
}
function fbRetryAll(){
  const q=fbOutbox().length;
  if(!q){ toast('没有待补推的反馈'); return; }
  toast('正在补推 '+q+' 条…');
  fbFlushOutbox(function(ok,total){
    toast('补推完成：成功 '+ok+' / '+total+' 条');
    if(ok===total) showFbDone(true,total,'');
    else showFbDone(false,total,'', '仍有 '+(total-ok)+' 条未送达，可再试或复制文本发送');
  });
}
function fbExport(){
  let arr=[]; try{ arr=JSON.parse(localStorage.getItem('aidax_newbie_grad_feedback')||'[]'); }catch(e){ arr=[]; }
  if(!arr.length){ toast('本机还没有反馈记录'); return; }
  const blob=new Blob([JSON.stringify(arr,null,2)],{type:'application/json'});
  const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='aidax_fin_feedback.json'; a.click();
  setTimeout(function(){ URL.revokeObjectURL(a.href); },2000);
  toast('已导出 '+arr.length+' 条反馈记录');
}

/* ===================== 云端反馈同步 v2（推送到管理员后台 feedback 表） =====================
   v2 改动（修复「admin 后台收不到」）：
   ① 鉴权方式改为官方推荐写法：createClient(url, ANON_KEY, {global.headers.Authorization: Bearer <jwt>})
      —— anon key 仍作 apikey 头（网关放行），租户 JWT 走 Authorization（PostgREST 据此判 RLS）。
      旧写法把 JWT 当第二个参数传入，等于把 JWT 同时塞进 apikey 头，网关可能直接拒。
   ② 每一步的真实错误信息都落盘并可展示，便于定位（不再静默失败）。
   ③ 失败进 outbox，下次打开页面 / 点「重试」自动补推，不丢反馈。 */
window.AIDAX_CONFIG = window.AIDAX_CONFIG || { supabaseUrl:'https://nyqiwjwzbpnepamldqto.supabase.co', supabaseAnonKey:'sb_publishable_rnBBDPdiDI5vnc9IEaTP6g_1ZyxJjHI' };
function finOwner(){
  if(!window._finOwner){
    var g=localStorage.getItem('aidax_newbie_grad_owner');
    if(!g){ g='finpm:'+(Date.now().toString(36)+Math.random().toString(36).slice(2,7)); localStorage.setItem('aidax_newbie_grad_owner',g); }
    window._finOwner=g;
  }
  return window._finOwner;
}
var _finSb=null;
function finSb(){
  if(_finSb===null) return null;
  if(_finSb && typeof _finSb.from==='function') return _finSb;
  var cfg=window.AIDAX_CONFIG;
  if(!cfg||!cfg.supabaseUrl||typeof window.supabase==='undefined'){ _finSb=null; return null; }
  try{ _finSb=window.supabase.createClient(cfg.supabaseUrl,cfg.supabaseAnonKey); return _finSb; }
  catch(e){ _finSb=null; return null; }
}
var _finJwt=null;
function finJwt(){ return _finJwt || localStorage.getItem('aidax_newbie_grad_jwt') || null; }
function finMintToken(cb){
  var cfg=window.AIDAX_CONFIG; if(!cfg){ cb&&cb(false); return; }
  fetch(cfg.supabaseUrl.replace(/\/$/,'')+'/rest/v1/rpc/mint_token',{
    method:'POST',
    headers:{'Content-Type':'application/json','apikey':cfg.supabaseAnonKey,'Authorization':'Bearer '+cfg.supabaseAnonKey},
    body:JSON.stringify({p_type:'guest',p_company:META.cloudCompany,p_owner:finOwner()})
  }).then(function(r){
    return r.text().then(function(t){
      let j=null; try{ j=JSON.parse(t); }catch(e){}
      if(!j) return { __http:r.status, __raw:(t||'').slice(0,200) };
      return j;
    });
  }).then(function(j){
    if(j&&j.jwt){ _finJwt=j.jwt; localStorage.setItem('aidax_newbie_grad_jwt',j.jwt); fbDiag('mint ok'); cb&&cb(true,''); }
    else {
      var m = (j&&j.error) ? j.error : ((j&&j.__raw) ? ('HTTP '+j.__http+' '+j.__raw) : '无返回');
      fbDiag('mint fail: '+m); cb&&cb(false,m);
    }
  }).catch(function(e){ fbDiag('mint 网络异常：'+(e.message||e)); cb&&cb(false,'网络异常：'+(e.message||e)); });
}
/* ---- 诊断日志：每一步的真实错误都记下来，可在反馈弹窗里查看/复制 ---- */
var FB_DIAG=[];
function fbDiag(s){
  FB_DIAG.push(new Date().toLocaleTimeString()+' '+s);
  if(FB_DIAG.length>12) FB_DIAG=FB_DIAG.slice(-12);
  try{ localStorage.setItem('aidax_newbie_grad_fb_diag', FB_DIAG.join('\n')); }catch(e){}
}
function fbDiagText(){ try{ return localStorage.getItem('aidax_newbie_grad_fb_diag')||'（暂无记录）'; }catch(e){ return '（无法读取）'; } }

/* ---- outbox：同步失败的反馈排队，下次自动补推 ---- */
var FB_OUTBOX_KEY='aidax_fin_fb_outbox';
function fbOutbox(){ try{ return JSON.parse(localStorage.getItem(FB_OUTBOX_KEY)||'[]'); }catch(e){ return []; } }
function fbOutboxSave(a){ try{ localStorage.setItem(FB_OUTBOX_KEY, JSON.stringify(a)); }catch(e){} }
function fbEnqueue(doc){ var a=fbOutbox(); if(a.some(function(x){return x.id===doc.id;})) return; a.push(doc); fbOutboxSave(a); }
function fbDequeue(id){ var a=fbOutbox().filter(function(x){return x.id!==id;}); fbOutboxSave(a); }

function finClient(jwt){
  var cfg=window.AIDAX_CONFIG;
  if(typeof window.supabase==='undefined'||!window.supabase.createClient){ throw new Error('supabase SDK 未加载'); }
  return window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey, {
    global: { headers: { Authorization: 'Bearer '+jwt } },
    auth: { persistSession:false, autoRefreshToken:false }
  });
}
function pushFeedbackToCloud(doc,cb){
  finMintToken(function(ok,err){
    if(!ok){ fbDiag('签发令牌失败：'+(err||'未知')); cb&&cb(false, '签发令牌失败：'+(err||'未知')); return; }
    var c;
    try{ c=finClient(finJwt()); }
    catch(e){ fbDiag('建连失败：'+e.message); cb&&cb(false,'建连失败：'+e.message); return; }
    c.from('feedback').insert({ id:doc.id, doc:doc, updated_at:new Date().toISOString() })
      .then(function(res){
        if(res.error){
          var m=res.error.message||JSON.stringify(res.error);
          fbDiag('写入失败：'+m); cb&&cb(false,'写入失败：'+m); return;
        }
        fbDiag('写入成功 id='+doc.id); fbDequeue(doc.id); cb&&cb(true,'');
      })
      .catch(function(e){ var m=(e&&e.message)||String(e); fbDiag('写入异常：'+m); cb&&cb(false,'写入异常：'+m); });
  });
}
/* 补推队列里所有未送达的反馈 */
function fbFlushOutbox(done){
  var q=fbOutbox();
  if(!q.length){ done&&done(0,0); return; }
  if(typeof window.supabase==='undefined'){ done&&done(0,q.length); return; }
  var ok=0, left=q.length;
  q.forEach(function(doc){
    pushFeedbackToCloud(doc,function(s){
      if(s) ok++;
      if(--left<=0) done&&done(ok,q.length);
    });
  });
}
/* 手动诊断：串起 mint → 建连 → 读表，把真实结果展示出来 */
function fbSelfTest(){
  var out=document.getElementById('lf-box');
  out.innerHTML='<div class="lf-head"><span style="font-size:20px">🔧</span><h3>云端连通性自检</h3><button class="lf-close" onclick="closeFb()">×</button></div>'
    +'<div id="selftest-out" class="lf-report" style="min-height:120px">正在检测…</div>'
    +'<div class="lf-foot"><button class="btn" onclick="copyText(document.getElementById(\'selftest-out\').textContent)">复制结果</button><button class="btn ghost" onclick="openFb()">返回反馈</button></div>';
  var o=document.getElementById('selftest-out'); var L=[];
  function p(s){ L.push(s); o.textContent=L.join('\n'); }
  var cfg=window.AIDAX_CONFIG;
  p('① SDK：'+(typeof window.supabase!=='undefined' && window.supabase.createClient ? '已加载 ✅' : '未加载 ❌（vendor/supabase-js.umd.js 未生效）'));
  p('② 配置：'+(cfg&&cfg.supabaseUrl?cfg.supabaseUrl:'缺失'));
  FB_DIAG=[];
  finMintToken(function(ok,err){
    p('③ 签发令牌：'+(ok?'成功 ✅':'失败 ❌ '+(err||'')));
    if(!ok){ p('\n诊断日志：\n'+fbDiagText()); return; }
    try{
      var c=finClient(finJwt());
      p('④ 建连：成功 ✅');
      c.from('feedback').select('id').limit(1).then(function(res){
        p('⑤ 读表：'+(res.error?('失败 ❌ '+res.error.message):'成功 ✅（RLS 放行）'));
        p('\n诊断日志：\n'+fbDiagText());
      }).catch(function(e){ p('⑤ 读表异常：'+(e.message||e)); p('\n诊断日志：\n'+fbDiagText()); });
    }catch(e){ p('④ 建连失败：'+e.message); p('\n诊断日志：\n'+fbDiagText()); }
  });
}

/* ===================== 启动（问题 8：回到上次所在的单元与模块） ===================== */
['cfg-industry','cfg-company','cfg-product'].forEach(id=>{
  const k=id.slice(4), e=document.getElementById(id); if(e) e.value=CUSTOM[k];
});
applyAdminUI(); renderSidebar(); refreshProg();
// 深链：?m=MX 直接进入该模块首单元（来自主站学习地图的模块点击）
let _start = (prog.cur && findUnit(prog.cur)) ? prog.cur : 'M0U1';
if (DEEP_MODULE) {
  const dm = COURSE.modules.find(m=>m.id===DEEP_MODULE);
  if (dm && dm.units.length) _start = dm.units[0].id;
}
openUnit(_start);
paintLlm();
llmProbe(true);
/* 启动时补推上次未送达的反馈 */
setTimeout(function(){ fbFlushOutbox(function(ok,total){ if(total&&ok<total) fbDiag('启动补推：'+ok+'/'+total); }); }, 1500);
