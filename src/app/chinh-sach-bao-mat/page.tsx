import Header from '@/components/Header'

const PrivacyPage = () => {
  return (
    <main className="min-h-screen flex">
      <div className="flex-1 flex flex-col content">
        <Header />
        <div className="container w-screen min-h-screen flex flex-col mx-auto py-10 md:py-20 gap-12 px-4 md:px-0">
          <h1 className="text-center text-4xl">Chính sách bảo mật</h1>
          <div className="flex flex-col gap-4">
            <p>
              Germlab xây dựng ứng dụng Veso như một ứng dụng miễn phí. Dịch vụ này được cung cấp
              bởi Germlab miễn phí.
            </p>
            <p>
              Trang này được sử dụng để thông báo cho khách truy cập về chính sách của tôi với việc
              thu thập, sử dụng và tiết lộ thông tin cá nhân nếu ai đó quyết định sử dụng dịch vụ
              của tôi.
            </p>
            <p>
              Nếu bạn chọn sử dụng dịch vụ của tôi, bạn đồng ý với việc thu thập và sử dụng thông
              tin liên quan đến chính sách này. Thông tin cá nhân mà tôi thu thập được được sử dụng
              để cung cấp và cải thiện dịch vụ. Tôi sẽ không sử dụng hoặc chia sẻ thông tin của bạn
              với bất kỳ ai ngoại trừ như đã mô tả trong Chính sách bảo mật này.
            </p>
            <p>
              Các thuật ngữ được sử dụng trong Chính sách bảo mật này có cùng ý nghĩa như trong Điều
              khoản và Điều kiện của chúng tôi, có thể truy cập tại Veso trừ khi được xác định khác
              trong Chính sách bảo mật này.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Thu thập và sử dụng thông tin</h2>
            <p>
              Trong quá trình sử dụng Ứng dụng của chúng tôi, để cung cấp các tính năng của Ứng dụng
              của chúng tôi, chúng tôi có thể thu thập, với sự cho phép trước của bạn:
            </p>
            <ul className="li list-disc pl-8 py-4">
              <li>
                <a
                  href="https://www.google.com/policies/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Hình ảnh và thông tin khác từ camera và thư viện ảnh của Thiết bị của bạn
                </a>
              </li>
            </ul>
            <p>
              Chúng tôi sử dụng thông tin này để cung cấp các tính năng của Dịch vụ của chúng tôi,
              để cải thiện và tùy chỉnh Dịch vụ của chúng tôi. Thông tin có thể được tải lên máy chủ
              của Công ty và/hoặc máy chủ của Nhà cung cấp Dịch vụ hoặc nó có thể chỉ được lưu trữ
              trên Thiết bị của bạn.
            </p>
            <p>
              Bạn có thể bật hoặc tắt quyền truy cập vào thông tin này bất kỳ lúc nào, thông qua cài
              đặt Thiết bị của bạn.
            </p>
            <div>
              <p>
                Ứng dụng sử dụng dịch vụ của bên thứ ba có thể thu thập thông tin được sử dụng để
                xác định bạn.
              </p>
              <p>
                Liên kết đến chính sách bảo mật của nhà cung cấp dịch vụ bên thứ ba được sử dụng bởi
                ứng dụng:
              </p>
              <ul className="li list-disc pl-8 py-4">
                <li>
                  <a
                    href="https://www.google.com/policies/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Dịch vụ Google Play
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Dữ liệu nhật ký</h2>
            <p>
              Tôi muốn thông báo cho bạn rằng mỗi khi bạn sử dụng Dịch vụ của tôi, trong trường hợp
              xảy ra lỗi trong ứng dụng, tôi thu thập dữ liệu và thông tin (thông qua các sản phẩm
              của bên thứ ba) trên điện thoại của bạn được gọi là Dữ liệu nhật ký. Dữ liệu nhật ký
              này có thể bao gồm thông tin như địa chỉ Giao thức Internet (“IP”) của thiết bị, tên
              thiết bị, phiên bản hệ điều hành, cấu hình ứng dụng khi sử dụng Dịch vụ của tôi, thời
              gian và ngày sử dụng Dịch vụ của bạn và các thống kê khác.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Cookies</h2>
            <p>
              Cookies là các tệp tin chứa một lượng nhỏ dữ liệu thông tin thông thường được sử dụng
              như các định danh duy nhất ẩn danh. Chúng được gửi đến trình duyệt của bạn từ các
              trang web mà bạn truy cập và được lưu trữ trong bộ nhớ trong của thiết bị của bạn.
            </p>
            <p>
              Dịch vụ này không sử dụng các “cookie”. Tuy nhiên, ứng dụng có thể sử dụng mã và thư
              viện của bên thứ ba sử dụng “cookie” để thu thập thông tin và cải thiện dịch vụ của
              họ. Bạn có tùy chọn chấp nhận hoặc từ chối các cookie này và biết khi nào cookie được
              gửi đến thiết bị của bạn. Nếu bạn chọn từ chối cookie của chúng tôi, bạn có thể không
              sử dụng được một số phần của Dịch vụ này.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Các nhà cung cấp dịch vụ</h2>
            <p>Tôi có thể tuyển dụng các công ty và cá nhân bên thứ ba vì những lý do sau:</p>
            <ul>
              <li>Để tạo điều kiện thuận lợi cho Dịch vụ của chúng tôi;</li>
              <li>Để cung cấp Dịch vụ thay mặt chúng tôi;</li>
              <li>Để thực hiện các dịch vụ liên quan đến Dịch vụ; hoặc</li>
              <li>Để hỗ trợ chúng tôi phân tích cách Dịch vụ của chúng tôi được sử dụng.</li>
            </ul>
            <p>
              Tôi muốn thông báo cho người dùng Dịch vụ này rằng các bên thứ ba này có quyền truy
              cập vào Thông tin cá nhân của họ. Lý do là để thay mặt chúng tôi thực hiện nhiệm vụ
              được giao. Tuy nhiên, họ có nghĩa vụ không tiết lộ hoặc sử dụng thông tin cho bất kỳ
              mục đích nào khác.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Bảo mật</h2>
            <p>
              Tôi đánh giá cao sự tin tưởng của bạn trong việc cung cấp cho chúng tôi Thông tin cá
              nhân của bạn, do đó chúng tôi đang cố gắng sử dụng các phương tiện được chấp nhận về
              mặt thương mại để bảo vệ thông tin đó. Nhưng hãy nhớ rằng không có phương thức truyền
              qua internet hoặc phương pháp lưu trữ điện tử nào an toàn và đáng tin cậy 100% và tôi
              không thể đảm bảo tính bảo mật tuyệt đối của nó.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Liên kết đến các trang web khác</h2>
            <p>
              Dịch vụ này có thể chứa các liên kết đến các trang web khác. Nếu bạn nhấp vào liên kết
              của bên thứ ba, bạn sẽ được dẫn đến trang web đó. Lưu ý rằng những trang web bên ngoài
              này không phải do tôi điều hành. Vì vậy, tôi thực sự khuyên bạn nên xem lại Chính sách
              quyền riêng tư của các trang web này. Tôi không có quyền kiểm soát và không chịu trách
              nhiệm về nội dung, chính sách bảo mật hoặc thông lệ của bất kỳ trang web hoặc dịch vụ
              bên thứ ba nào.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Quyền riêng tư của trẻ em</h2>
            <p>
              Các Dịch vụ này không đề cập đến bất kỳ ai dưới 13 tuổi. Tôi không cố ý thu thập thông
              tin nhận dạng cá nhân từ trẻ em dưới 13 tuổi. Trong trường hợp tôi phát hiện ra rằng
              một đứa trẻ dưới 13 tuổi đã cung cấp thông tin cá nhân cho tôi, tôi sẽ xóa ngay thông
              tin này khỏi máy chủ của chúng tôi. Nếu bạn là cha mẹ hoặc người giám hộ và bạn biết
              rằng con bạn đã cung cấp thông tin cá nhân cho chúng tôi, vui lòng liên hệ với tôi để
              tôi có thể thực hiện các hành động cần thiết.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">
              Những thay đổi đối với Chính sách quyền riêng tư này
            </h2>
            <p>
              Thỉnh thoảng tôi có thể cập nhật Chính sách quyền riêng tư của chúng tôi. Vì vậy, bạn
              nên xem lại trang này định kỳ để biết bất kỳ thay đổi nào. Tôi sẽ thông báo cho bạn về
              bất kỳ thay đổi nào bằng cách đăng Chính sách quyền riêng tư mới trên trang này.
            </p>
          </div>
          <div>
            <i>Chính sách này có hiệu lực kể từ ngày 29-01-2024</i>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Liên hệ chúng tôi</h2>
            <p>
              Nếu bạn có bất kỳ câu hỏi hoặc đề xuất nào về Chính sách quyền riêng tư của tôi, đừng
              ngần ngại liên hệ với tôi theo địa chỉ{' '}
              <a className="text-accent underline" href="mailto://phucloc8697@gmail.com">
                phucloc8697@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PrivacyPage
