### Cần bọc trong BrowserRouter

<BrowserRouter>
      <Router1 />
</BrowserRouter>

### thẻ Link để router qua component khác

<Link to="/">Home</Link>

### Định nghĩa 1 tập các routes

--- Chỗ cần thay component
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact/" element={<Contact />} />
</Routes>
