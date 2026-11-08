type ResearchItem = {
  id: string;
  area: string;
  status: string;
  title: string;
  subtitle: string;
  summary: string;
  metrics: { value: string; label: string }[];
  highlights: string[];
  method: string[];
  repo?: string;
};

export const research: ResearchItem[] = [
  {
    id: "yolo-eca",
    area: "Remote sensing and computer vision",
    status: "Paper under review",
    title: "Channel attention for oriented object detection in remote sensing images",
    subtitle: "YOLOv11s-OBB with Efficient Channel Attention",
    summary:
      "Small, densely packed objects are hard to detect in aerial images because of busy backgrounds and changing scale. This work adds an Efficient Channel Attention module to YOLOv11s-OBB to recalibrate channel-wise features, and evaluates it on DIOR-R, a 20-class remote sensing benchmark.",
    metrics: [
      { value: "+3.8%", label: "mAP50" },
      { value: "+4.3%", label: "Recall" },
    ],
    highlights: [
      "Integrated Efficient Channel Attention into YOLOv11s-OBB",
      "Evaluated on DIOR-R, a 20-class rotated bounding box benchmark",
      "Improved detection of small objects with no increase in parameter count",
    ],
    method: ["Satellite image", "YOLOv11s-OBB", "ECA attention", "Oriented boxes"],
  },
  {
    id: "hybrid-ids",
    area: "Cybersecurity and deep learning",
    status: "Manuscript in preparation",
    title: "Hybrid intrusion detection with machine and deep learning",
    subtitle: "A sequential CNN, BiLSTM and attention model on NSL-KDD and CICIDS",
    summary:
      "A hybrid system that classifies network traffic as benign or attack. PCA and an autoencoder compress the features, then a sequential CNN, BiLSTM and attention model captures both spatial and temporal patterns in the flow data. It was evaluated on the NSL-KDD and CICIDS datasets, with Random Forest and SVM as benchmarks.",
    metrics: [
      { value: "98.4%", label: "Accuracy" },
    ],
    highlights: [
      "Reached 98.4% accuracy on NSL-KDD and CICIDS",
      "Outperformed Random Forest and SVM across all attack categories",
      "Evaluated with precision, recall and F1-score to keep false positives low",
    ],
    method: ["Network traffic", "PCA, autoencoder", "CNN, BiLSTM, attention", "Attack or benign"],
    repo: "https://github.com/vaibhav-panchal8277/IDS-SYSTEM",
  },
];
