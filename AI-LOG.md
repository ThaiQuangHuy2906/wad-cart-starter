# AI-LOG.md

## 2026-10-08 — Setup project và harness

Tool: ChatGPT

Asked for: Hướng dẫn bắt đầu IA#1 từ starter repo, tạo rules file, thiết lập lint và GitHub Actions theo rubric.

Kept: Sử dụng AGENTS.md để ghi các quy tắc của project. Tạo scripts/lint.mjs để kiểm tra code mà không cần cài thêm thư viện, thêm lệnh npm run lint vào package.json và cấu hình GitHub Actions chạy test và lint khi push.

Changed: Tôi chọn AGENTS.md làm rules file dùng chung, vì có thể sử dụng Codex hoặc Claude Code tùy công cụ nào còn quota. Không có chỉnh sửa đáng kể đối với phần cấu hình được gợi ý.

Rejected: Không có đề xuất cụ thể nào bị loại.

By hand: Tôi clone repository của thầy và tự chạy npm test để kiểm tra trạng thái ban đầu. Test fail vì cartTotal chưa được implement. Sau đó tôi tạo các file trong VS Code, fork repository về GitHub cá nhân, commit và push code. Tôi cũng kiểm tra GitHub Actions và thấy workflow đã chạy nhưng chưa pass ở giai đoạn RED.

## 2026-10-08 — Viết implementation brief

Tool: ChatGPT

Asked for: Hướng dẫn viết brief.md dựa trên README.md và rubric IA#1, nêu rõ chức năng cần làm, các trường hợp lỗi, phạm vi file được sửa và điều kiện hoàn thành.

Kept: Cấu trúc brief gồm mục tiêu, các file được phép sửa, yêu cầu công nghệ, dữ liệu đầu vào, công thức tính tiền, xử lý lỗi, các test cần có và điều kiện hoàn thành.

Changed: Không có chỉnh sửa đáng kể đối với bản brief được gợi ý.

Rejected: Không có.

By hand: Tôi tạo brief.md trong VS Code, đọc lại nội dung, lưu file, commit và push lên GitHub.

## 2026-10-08 — Lập kế hoạch triển khai cartTotal

Tool: Codex trong VS Code, ChatGPT hỗ trợ review.

Asked for: Yêu cầu Codex đọc AGENTS.md, brief.md, README.md và các file liên quan, sau đó lập kế hoạch triển khai cartTotal mà chưa sửa code.

Kept: Kế hoạch xử lý giỏ rỗng, kiểm tra price và qty, tính subtotal, VAT, phí vận chuyển và làm tròn tổng cuối cùng. Tôi cũng đồng ý với hướng bổ sung tests trước khi implement.

Changed: Prompt ban đầu cấm thực thi mọi lệnh nên Codex không thể đọc các file trong workspace. Tôi đã sửa prompt để cho phép các thao tác đọc file, nhưng vẫn không cho Codex sửa code hoặc chạy validation.

Rejected: Không tiếp tục sử dụng prompt ban đầu vì giới hạn quá chặt. Tôi cũng chưa cho Codex implement ngay khi chưa review kế hoạch.

By hand: Tôi cấp quyền cho Codex đọc các file cần thiết, xem lại kế hoạch được tạo và đối chiếu với yêu cầu trong brief.md. Sau khi review, tôi quyết định thực hiện tests trước rồi mới triển khai hàm.

## 2026-10-08 — Bổ sung unit tests cho cartTotal

Tool: Codex trong VS Code, ChatGPT hỗ trợ review diff.

Asked for: Giữ nguyên test ví dụ của đề và bổ sung các test độc lập cho giỏ rỗng, ngưỡng miễn phí vận chuyển, giá âm, số lượng không hợp lệ và làm tròn.

Kept: Codex bổ sung 8 test vào test/cart.test.js, gồm giỏ hàng rỗng, miễn phí vận chuyển tại ngưỡng, tính phí dưới ngưỡng, giá âm, qty bằng 0, qty không nguyên và hai trường hợp làm tròn.

Changed: Không chỉnh sửa các test Codex tạo trong lần này.

Rejected: Không có.

By hand: Tôi xem diff của Codex và kiểm tra các giá trị mong đợi. Sau đó tôi tự chạy npm test và xác nhận cả 9 test đều fail khi cartTotal chưa được implement. Tôi cũng chạy npm run lint và nhận kết quả Pass. Sau khi kiểm tra, tôi giữ lại bộ test.

## 2026-10-08 — Implement và validate cartTotal

Tool: Codex trong VS Code, ChatGPT hỗ trợ review.

Asked for: Implement hàm cartTotal trong src/cart.js theo brief.md và README.md. Chỉ được sửa file implementation, không thay đổi tests, không thêm dependencies và không tự commit.

Kept: Tôi giữ cách xử lý giỏ rỗng trước, dùng vòng lặp for...of để kiểm tra price, qty và tính subtotal. Hàm tính VAT dựa trên subtotal, xét miễn phí vận chuyển theo ngưỡng và dùng Math.round để làm tròn tổng cuối cùng.

Changed: Không chỉnh sửa phần implementation do Codex tạo.

Rejected: Không có đề xuất cụ thể nào bị loại.

By hand: Tôi đọc lại diff src/cart.js, kiểm tra điều kiện RangeError, cách xét miễn phí vận chuyển và phép làm tròn. Sau đó tôi tự chạy npm test, npm run lint và git diff --check. Kết quả có 9/9 test pass, lint pass và không phát hiện lỗi khi kiểm tra diff.

## 2026-10-08 — Bổ sung tests kiểm tra VAT

Tool: ChatGPT gợi ý test cases, tôi tự bổ sung vào project.

Asked for: Hướng dẫn bước tiếp theo sau khi implementation đã pass tests. ChatGPT đề xuất bổ sung hai trường hợp kiểm tra riêng cách tính VAT và điều kiện miễn phí vận chuyển.

Kept: Tôi sử dụng hai trường hợp kiểm thử được gợi ý: VAT chỉ tính trên subtotal và vẫn thu phí vận chuyển nếu subtotal chưa đạt ngưỡng, dù tổng sau VAT đã vượt ngưỡng.

Changed: Tôi tự thêm hai test vào cuối test/cart.test.js mà không dùng Codex để chỉnh sửa file trong bước này.

Rejected: Không có.

By hand: Tôi bổ sung hai test VAT, sau đó chạy lại npm test. Tổng cộng 11 test đều pass. Tôi giữ hai test này để kiểm tra những lỗi tính toán mà bộ 9 test trước đó chưa bao phủ riêng.

## 2026-10-08 — Review cuối theo rubric IA#1

Tool: ChatGPT hỗ trợ đối chiếu rubric, tôi tự kiểm tra và chỉnh sửa project.

Asked for: Rà soát bài IA#1 để tìm những điểm chưa chặt chẽ trước khi tự đánh giá và nộp.

Kept: Giữ nguyên implementation cartTotal và cấu hình Harness vì đã đáp ứng specification và CI chạy thành công. Đồng ý cải thiện tính độc lập của các bài test.

Changed: Tôi tách test kiểm tra làm tròn và kiểu dữ liệu thành hai test riêng. Bổ sung các test cho số lượng âm, subtotal trên ngưỡng miễn phí vận chuyển và chỉ làm tròn sau khi cộng tất cả sản phẩm.

Rejected: Không thay đổi implementation chỉ để tăng số lượng dòng code. Không cài thêm dependencies vì project hiện đã có quality gate hoạt động và đề yêu cầu không dùng thư viện ngoài.

By hand: Tôi xem lại các trường hợp kiểm thử, tự sửa test/cart.test.js, sau đó chạy npm test, npm run lint và git diff --check. Tôi chỉ chấp nhận thay đổi sau khi kiểm tra kết quả trên máy và xác nhận GitHub Actions chạy thành công sau khi push.