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
      "Small objects are hard to detect in remote sensing images because of busy backgrounds and changing scale. This work adds an Efficient Channel Attention module to YOLOv11s-OBB to strengthen channel-wise features, and evaluates it on the DIOR-R dataset.",
    metrics: [
      { value: "+3.8%", label: "mAP50" },
      { value: "+4.3%", label: "Recall" },
    ],
    highlights: [
      "Integrated Efficient Channel Attention into YOLOv11s-OBB",
      "Evaluated on the DIOR-R rotated bounding box dataset",
      "Improved localization of small objects while keeping the model lightweight",
    ],
    method: ["Satellite image", "YOLOv11s-OBB", "ECA attention", "Oriented boxes"],
  },
  {
    id: "hybrid-ids",
    area: "Cybersecurity and deep learning",
    status: "Research project",
    title: "Hybrid intrusion detection with machine and deep learning",
    subtitle: "PCA and autoencoder compression with CNN, BiLSTM and multi-head attention",
    summary:
      "A hybrid system that classifies network traffic as benign or attack. PCA and an autoencoder compress the features, then CNN, BiLSTM and multi-head attention models do the classification, with Random Forest and SVM as benchmarks.",
    metrics: [
      { value: "98.4%", label: "Accuracy" },
      { value: "-85%", label: "Training time" },
    ],
    highlights: [
      "Reached 98.4% accuracy with CNN, BiLSTM and multi-head attention",
      "Benchmarked against Random Forest and SVM",
      "Evaluated with precision, recall and F1-score to keep false positives low",
    ],
    method: ["Network traffic", "PCA, autoencoder", "CNN, BiLSTM, attention", "Attack or benign"],
    repo: "https://github.com/vaibhav-panchal8277/IDS-SYSTEM",
  },
];
