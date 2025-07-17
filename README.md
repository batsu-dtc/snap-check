# TestChecker 📝

An automated test paper checking system that processes multiple-choice answer sheets from images (JPEG/PNG) and PDF files. Uses computer vision and OCR to detect filled bubbles, extract student information, and provide detailed scoring with Excel export functionality.

## ✨ Features

- **Multi-format Support**: Upload JPEG, PNG, or PDF test papers
- **Automated Bubble Detection**: Computer vision-based OMR (Optical Mark Recognition)
- **OCR Text Extraction**: Extract student names and sections from handwritten text
- **Real-time Scoring**: Instant scoring with detailed per-question feedback
- **Annotated Results**: View processed papers with highlighted correct/incorrect answers
- **Excel Export**: Export all results to timestamped Excel files
- **Modern UI**: Clean, responsive interface built with React

## 🚀 Quick Start

### Prerequisites

- **Python38** with pip
- **Node.js 16+** with npm
- **Tesseract OCR** (for text recognition)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TestChecker
   ```

2 **Setup Backend**
   ```bash
   cd backend
   pip install -r requirements.txt
   python app.py
   ```
   The backend will start on `http://localhost:5000`
3. **Setup Frontend** (in a new terminal)
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   The frontend will start on `http://localhost:5173*Open your browser** and navigate to `http://localhost:5173

## 📋 Usage

### 1. Create Answer Sheet
- Go to the "Generate" tab
- Configure your test parameters (number of items, choices, etc.)
- Generate and download the answer sheet template

### 2. Set Answer Key
- Go to the Answer Key" tab
- Enter the correct answers for your test
- Save the answer key

### 3. Upload Test Papers
- Go to the "Upload" tab
- Upload completed test papers (JPEG, PNG, or PDF)
- Click Check All Papers" to process them

###4 View Results
- Go to the "Results" tab
- View individual scores and detailed feedback
- ClickExport to Excel" to download all results

## 🛠️ Technical Stack

### Backend
- **Flask**: Web framework
- **OpenCV**: Image processing and bubble detection
- **PyMuPDF**: PDF to image conversion
- **pytesseract**: OCR for text extraction
- **NumPy**: Numerical computations
- **Pillow**: Image manipulation

### Frontend
- **React 19**: UI framework
- **Vite**: Build tool and dev server
- **CSS Modules**: Styled components
- **xlsx**: Excel file generation
- **React Router**: Navigation

## 📁 Project Structure

```
TestChecker/
├── backend/
│   ├── app.py              # Main Flask application
│   ├── requirements.txt    # Python dependencies
│   └── venv/              # Virtual environment
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Main application pages
│   │   ├── styles/        # CSS modules
│   │   └── utils/         # Utility functions
│   ├── package.json       # Node.js dependencies
│   └── vite.config.js     # Vite configuration
└── README.md
```

## 🔧 Configuration

### Test Paper Layout
The system is designed for A4-sized answer sheets with:
- Student name and section fields at the top
- Multiple-choice bubbles arranged in a grid
- Configurable number of items and choices per item

### OCR Settings
- Uses Tesseract OCR with optimized settings for handwriting
- Adaptive thresholding for better text recognition
- Configurable regions for name and section extraction

## 📊 Excel Export Format

The exported Excel file includes:
- **Basic Info**: Student name, section, score, percentage
- **Item Details**: Per-question answers, correct answers, and status
- **Summary**: Total items, correct answers count
- **Timestamp**: Automatic filename with date/time

## 🐛 Troubleshooting

### Common Issues

1. **Tesseract not found**
   ```bash
   # Install Tesseract OCR
   # Windows: Download from https://github.com/UB-Mannheim/tesseract/wiki
   # macOS: brew install tesseract
   # Linux: sudo apt-get install tesseract-ocr
   ```

2. **PDF processing fails**
   - Ensure PyMuPDF is installed: `pip install PyMuPDF`
   - Check that PDF files are not corrupted or password-protected

3. **Image processing errors**
   - Verify image files are valid JPEG/PNG
   - Check that images have sufficient resolution and contrast

4. **Backend connection issues**
   - Ensure backend is running on port500heck CORS settings if accessing from different domains

### Debug Mode
Enable debug logging in the backend:
```python
# In backend/app.py
app.run(host='0.0, port=5000 debug=True)
```

## 🔮 Future Enhancements

- i-page PDF support
- [ ] User authentication and accounts
-torage integration
- [ ] Advanced analytics and charts
- [ ] Batch processing improvements
- [ ] Mobile-responsive design
- [ ] API documentation
- [ ] Docker containerization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature`)
4.Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenCV** for computer vision capabilities
- **Tesseract OCR** for text recognition
- **PyMuPDF** for PDF processing
- **React** and **Flask** communities for excellent documentation

---

**Built with ❤️ for educators and students**

*Last updated: June 2024*
