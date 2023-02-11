export const emptyBpmn = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:xs="http://www.w3.org/2001/XMLSchema" id="_tTv5YOycEeiHGOQ2NkJZNQ" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn2:message id="Message_0n3xup4" name="Request Proof" />
  <bpmn2:message id="Message_18edpxf" name="Mortgage Deeds Offer" />
  <bpmn2:message id="Message_0dnnsdf" name="Property Offer" />
  <bpmn2:message id="Message_0fb9yki" name="Request Proof" />
  <bpmn2:message id="Message_18caf6k" name="Offer Credential" />
  <bpmn2:message id="Message_0xssa5b" name="Present Proof" />
  <bpmn2:message id="Message_1jnb8hb" name="Accept Mortgage Deeds" />
  <bpmn2:message id="Message_04hr8a2" />
  <bpmn2:message id="Message_1siw4g6" name="Accept Offer" />
  <bpmn2:message id="Message_0vby74q" name="Present Proof" />
  <bpmn2:message id="Message_0epe6o2" name="Accept Credential" />
  <bpmn2:message id="Message_1rnq4x3" name="pizza" />
  <bpmn2:message id="Message_1mi4idx" />
  <bpmn2:message id="Message_1pam53q" name="pizza order" />
  <bpmn2:choreography id="Choreography_1wp1o08" name="PropertyTransaction">
    <bpmn2:participant id="Participant_031en92" name="Seller" />
    <bpmn2:participant id="Participant_0vb4wl7" name="Registry" />
    <bpmn2:participant id="Participant_1u1zdeg" name="Broker" />
    <bpmn2:participant id="Participant_1ypyzs0" name="Buyer" />
    <bpmn2:participant id="Participant_0hk3i22" name="Buyer&#39;s Bank" />
    <bpmn2:participant id="Participant_0fl0qh5" name="Seller&#39;s Bank" />
    <bpmn2:messageFlow id="MessageFlow_14imfsu" sourceRef="Participant_0vb4wl7" targetRef="Participant_0hk3i22" messageRef="Message_0n3xup4" />
    <bpmn2:messageFlow id="MessageFlow_19x94m4" sourceRef="Participant_0fl0qh5" targetRef="Participant_0hk3i22" messageRef="Message_18edpxf" />
    <bpmn2:messageFlow id="MessageFlow_1e3c18r" sourceRef="Participant_1u1zdeg" targetRef="Participant_1ypyzs0" messageRef="Message_0dnnsdf" />
    <bpmn2:messageFlow id="MessageFlow_1a7vnpc" sourceRef="Participant_1u1zdeg" targetRef="Participant_031en92" messageRef="Message_0fb9yki" />
    <bpmn2:messageFlow id="MessageFlow_1vms9k1" sourceRef="Participant_0vb4wl7" targetRef="Participant_031en92" messageRef="Message_18caf6k" />
    <bpmn2:messageFlow id="MessageFlow_0imneaq" sourceRef="Participant_0hk3i22" targetRef="Participant_0vb4wl7" messageRef="Message_0xssa5b" />
    <bpmn2:messageFlow id="MessageFlow_144053w" sourceRef="Participant_0hk3i22" targetRef="Participant_0fl0qh5" messageRef="Message_1jnb8hb" />
    <bpmn2:messageFlow id="MessageFlow_046t82q" sourceRef="Participant_031en92" targetRef="Participant_0fl0qh5" messageRef="Message_04hr8a2" />
    <bpmn2:messageFlow id="MessageFlow_1k1ilv5" sourceRef="Participant_1ypyzs0" targetRef="Participant_1u1zdeg" messageRef="Message_1siw4g6" />
    <bpmn2:messageFlow id="MessageFlow_093bk1t" sourceRef="Participant_031en92" targetRef="Participant_1u1zdeg" messageRef="Message_0vby74q" />
    <bpmn2:messageFlow id="MessageFlow_08kegbc" sourceRef="Participant_031en92" targetRef="Participant_0vb4wl7" messageRef="Message_0epe6o2" />
    <bpmn2:textAnnotation id="TextAnnotation_0cmzo3b">
      <bpmn2:text>The seller get the ownership certificate of its property</bpmn2:text>
    </bpmn2:textAnnotation>
    <bpmn2:association id="Association_15kh3xo" sourceRef="ChoreographyTask_0axlrdi" targetRef="TextAnnotation_0cmzo3b" />
    <bpmn2:textAnnotation id="TextAnnotation_0nai09z">
      <bpmn2:text>Before putting the property up for sale, the broker verify the seller's ownership certificate</bpmn2:text>
    </bpmn2:textAnnotation>
    <bpmn2:association id="Association_1px8hv4" sourceRef="ChoreographyTask_08zltwe" targetRef="TextAnnotation_0nai09z" />
    <bpmn2:textAnnotation id="TextAnnotation_0f1d01n">
      <bpmn2:text>The Broker offer a credential for a price that the pontetial Buyer will have to pay</bpmn2:text>
    </bpmn2:textAnnotation>
    <bpmn2:association id="Association_1fm4bwe" sourceRef="ChoreographyTask_19pqmow" targetRef="TextAnnotation_0f1d01n" />
    <bpmn2:textAnnotation id="TextAnnotation_0cv8gzz">
      <bpmn2:text>The Seller invites its Bank into the workflow requesting to add mortgage deeds for selling its porpery</bpmn2:text>
    </bpmn2:textAnnotation>
    <bpmn2:association id="Association_05my1d6" sourceRef="ChoreographyTask_0yuyl8m" targetRef="TextAnnotation_0cv8gzz" />
    <bpmn2:textAnnotation id="TextAnnotation_0ct19oz">
      <bpmn2:text>The Seller's Bank exchanges the mortgage deeds for cash with the Buyer's bank</bpmn2:text>
    </bpmn2:textAnnotation>
    <bpmn2:association id="Association_1caacuo" sourceRef="ChoreographyTask_11sd49k" targetRef="TextAnnotation_0ct19oz" />
    <bpmn2:textAnnotation id="TextAnnotation_1fgpm36">
      <bpmn2:text>The Buyer's Bank tells to the Registry to indicate the new possession by presenting the mortgage deeds</bpmn2:text>
    </bpmn2:textAnnotation>
    <bpmn2:association id="Association_0xzn61a" sourceRef="ChoreographyTask_1tjiga2" targetRef="TextAnnotation_1fgpm36" />
    <bpmn2:startEvent id="Event_0bfb8ap">
      <bpmn2:outgoing>Flow_1qulg2g</bpmn2:outgoing>
    </bpmn2:startEvent>
    <bpmn2:choreographyTask id="ChoreographyTask_0axlrdi" name="Get ownership credential" initiatingParticipantRef="Participant_031en92">
      <bpmn2:incoming>Flow_1qulg2g</bpmn2:incoming>
      <bpmn2:outgoing>Flow_0j5jqry</bpmn2:outgoing>
      <bpmn2:participantRef>Participant_0vb4wl7</bpmn2:participantRef>
      <bpmn2:participantRef>Participant_031en92</bpmn2:participantRef>
      <bpmn2:messageFlowRef>MessageFlow_1vms9k1</bpmn2:messageFlowRef>
      <bpmn2:messageFlowRef>MessageFlow_08kegbc</bpmn2:messageFlowRef>
    </bpmn2:choreographyTask>
    <bpmn2:sequenceFlow id="Flow_1qulg2g" sourceRef="Event_0bfb8ap" targetRef="ChoreographyTask_0axlrdi" />
    <bpmn2:choreographyTask id="ChoreographyTask_08zltwe" name="Put property on sale" initiatingParticipantRef="Participant_031en92">
      <bpmn2:incoming>Flow_0j5jqry</bpmn2:incoming>
      <bpmn2:outgoing>Flow_1j6gfb7</bpmn2:outgoing>
      <bpmn2:participantRef>Participant_1u1zdeg</bpmn2:participantRef>
      <bpmn2:participantRef>Participant_031en92</bpmn2:participantRef>
      <bpmn2:messageFlowRef>MessageFlow_1a7vnpc</bpmn2:messageFlowRef>
      <bpmn2:messageFlowRef>MessageFlow_093bk1t</bpmn2:messageFlowRef>
    </bpmn2:choreographyTask>
    <bpmn2:sequenceFlow id="Flow_0j5jqry" sourceRef="ChoreographyTask_0axlrdi" targetRef="ChoreographyTask_08zltwe" />
    <bpmn2:choreographyTask id="ChoreographyTask_19pqmow" name="Purchase Request" initiatingParticipantRef="Participant_1ypyzs0">
      <bpmn2:incoming>Flow_1j6gfb7</bpmn2:incoming>
      <bpmn2:outgoing>Flow_170sz1d</bpmn2:outgoing>
      <bpmn2:participantRef>Participant_1u1zdeg</bpmn2:participantRef>
      <bpmn2:participantRef>Participant_1ypyzs0</bpmn2:participantRef>
      <bpmn2:messageFlowRef>MessageFlow_1e3c18r</bpmn2:messageFlowRef>
      <bpmn2:messageFlowRef>MessageFlow_1k1ilv5</bpmn2:messageFlowRef>
    </bpmn2:choreographyTask>
    <bpmn2:sequenceFlow id="Flow_1j6gfb7" sourceRef="ChoreographyTask_08zltwe" targetRef="ChoreographyTask_19pqmow" />
    <bpmn2:choreographyTask id="ChoreographyTask_11sd49k" name="Finalize the sale" initiatingParticipantRef="Participant_0hk3i22">
      <bpmn2:incoming>Flow_0plizp7</bpmn2:incoming>
      <bpmn2:outgoing>Flow_19kg60n</bpmn2:outgoing>
      <bpmn2:participantRef>Participant_0fl0qh5</bpmn2:participantRef>
      <bpmn2:participantRef>Participant_0hk3i22</bpmn2:participantRef>
      <bpmn2:messageFlowRef>MessageFlow_19x94m4</bpmn2:messageFlowRef>
      <bpmn2:messageFlowRef>MessageFlow_144053w</bpmn2:messageFlowRef>
    </bpmn2:choreographyTask>
    <bpmn2:choreographyTask id="ChoreographyTask_1tjiga2" name="Indicate new possession" initiatingParticipantRef="Participant_0hk3i22">
      <bpmn2:incoming>Flow_19kg60n</bpmn2:incoming>
      <bpmn2:outgoing>Flow_1ru34ta</bpmn2:outgoing>
      <bpmn2:participantRef>Participant_0vb4wl7</bpmn2:participantRef>
      <bpmn2:participantRef>Participant_0hk3i22</bpmn2:participantRef>
      <bpmn2:messageFlowRef>MessageFlow_14imfsu</bpmn2:messageFlowRef>
      <bpmn2:messageFlowRef>MessageFlow_0imneaq</bpmn2:messageFlowRef>
    </bpmn2:choreographyTask>
    <bpmn2:sequenceFlow id="Flow_19kg60n" sourceRef="ChoreographyTask_11sd49k" targetRef="ChoreographyTask_1tjiga2" />
    <bpmn2:endEvent id="Event_1wz8kvv">
      <bpmn2:incoming>Flow_1ru34ta</bpmn2:incoming>
    </bpmn2:endEvent>
    <bpmn2:sequenceFlow id="Flow_1ru34ta" sourceRef="ChoreographyTask_1tjiga2" targetRef="Event_1wz8kvv" />
    <bpmn2:choreographyTask id="ChoreographyTask_0yuyl8m" name="Add mortgage deeds" initiatingParticipantRef="Participant_031en92">
      <bpmn2:incoming>Flow_170sz1d</bpmn2:incoming>
      <bpmn2:outgoing>Flow_0plizp7</bpmn2:outgoing>
      <bpmn2:participantRef>Participant_031en92</bpmn2:participantRef>
      <bpmn2:participantRef>Participant_0fl0qh5</bpmn2:participantRef>
      <bpmn2:messageFlowRef>MessageFlow_046t82q</bpmn2:messageFlowRef>
    </bpmn2:choreographyTask>
    <bpmn2:sequenceFlow id="Flow_0plizp7" sourceRef="ChoreographyTask_0yuyl8m" targetRef="ChoreographyTask_11sd49k" />
    <bpmn2:sequenceFlow id="Flow_170sz1d" sourceRef="ChoreographyTask_19pqmow" targetRef="ChoreographyTask_0yuyl8m" />
  </bpmn2:choreography>
  <bpmndi:BPMNDiagram id="BPMNDiagram_141updn">
    <bpmndi:BPMNPlane id="BPMNPlane_0xkw46k" bpmnElement="Choreography_1wp1o08">
      <bpmndi:BPMNShape id="Event_0bfb8ap_di" bpmnElement="Event_0bfb8ap">
        <dc:Bounds x="262" y="292" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ChoreographyTask_0axlrdi_di" bpmnElement="ChoreographyTask_0axlrdi">
        <dc:Bounds x="350" y="270" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_0wy0k62" bpmnElement="Participant_031en92" isMessageVisible="true" participantBandKind="bottom_initiating" choreographyActivityShape="ChoreographyTask_0axlrdi_di">
        <dc:Bounds x="350" y="330" width="100" height="20" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_010qbwp" bpmnElement="Participant_0vb4wl7" isMessageVisible="true" participantBandKind="top_non_initiating" choreographyActivityShape="ChoreographyTask_0axlrdi_di">
        <dc:Bounds x="350" y="270" width="100" height="20" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1qulg2g_di" bpmnElement="Flow_1qulg2g">
        <di:waypoint x="298" y="310" />
        <di:waypoint x="349" y="310" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="ChoreographyTask_08zltwe_di" bpmnElement="ChoreographyTask_08zltwe">
        <dc:Bounds x="510" y="270" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1f0s3gd" bpmnElement="Participant_031en92" isMessageVisible="true" participantBandKind="bottom_initiating" choreographyActivityShape="ChoreographyTask_08zltwe_di">
        <dc:Bounds x="510" y="330" width="100" height="20" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1oqu9my" bpmnElement="Participant_1u1zdeg" isHorizontal="true" isMessageVisible="true" participantBandKind="top_non_initiating" choreographyActivityShape="ChoreographyTask_08zltwe_di">
        <dc:Bounds x="510" y="270" width="100" height="20" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_0j5jqry_di" bpmnElement="Flow_0j5jqry">
        <di:waypoint x="451" y="310" />
        <di:waypoint x="509" y="310" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="ChoreographyTask_19pqmow_di" bpmnElement="ChoreographyTask_19pqmow">
        <dc:Bounds x="670" y="270" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_16a4u7c" bpmnElement="Participant_1ypyzs0" isHorizontal="true" isMessageVisible="true" participantBandKind="bottom_initiating" choreographyActivityShape="ChoreographyTask_19pqmow_di">
        <dc:Bounds x="670" y="330" width="100" height="20" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_0lxdk6f" bpmnElement="Participant_1u1zdeg" isMessageVisible="true" participantBandKind="top_non_initiating" choreographyActivityShape="ChoreographyTask_19pqmow_di">
        <dc:Bounds x="670" y="270" width="100" height="20" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1j6gfb7_di" bpmnElement="Flow_1j6gfb7">
        <di:waypoint x="611" y="310" />
        <di:waypoint x="669" y="310" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="ChoreographyTask_11sd49k_di" bpmnElement="ChoreographyTask_11sd49k">
        <dc:Bounds x="990" y="270" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_03c8r7a" bpmnElement="Participant_0hk3i22" isMessageVisible="true" participantBandKind="bottom_initiating" choreographyActivityShape="ChoreographyTask_11sd49k_di">
        <dc:Bounds x="990" y="330" width="100" height="20" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_0mt12dl" bpmnElement="Participant_0fl0qh5" isHorizontal="true" isMessageVisible="true" participantBandKind="top_non_initiating" choreographyActivityShape="ChoreographyTask_11sd49k_di">
        <dc:Bounds x="990" y="270" width="100" height="20" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ChoreographyTask_1tjiga2_di" bpmnElement="ChoreographyTask_1tjiga2">
        <dc:Bounds x="1150" y="270" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_0hz78qw" bpmnElement="Participant_0hk3i22" isMessageVisible="true" participantBandKind="bottom_initiating" choreographyActivityShape="ChoreographyTask_1tjiga2_di">
        <dc:Bounds x="1150" y="330" width="100" height="20" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1y7olht" bpmnElement="Participant_0vb4wl7" isMessageVisible="true" participantBandKind="top_non_initiating" choreographyActivityShape="ChoreographyTask_1tjiga2_di">
        <dc:Bounds x="1150" y="270" width="100" height="20" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_19kg60n_di" bpmnElement="Flow_19kg60n">
        <di:waypoint x="1091" y="310" />
        <di:waypoint x="1149" y="310" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Event_1wz8kvv_di" bpmnElement="Event_1wz8kvv">
        <dc:Bounds x="1312" y="292" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1ru34ta_di" bpmnElement="Flow_1ru34ta">
        <di:waypoint x="1251" y="310" />
        <di:waypoint x="1312" y="310" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="ChoreographyTask_0yuyl8m_di" bpmnElement="ChoreographyTask_0yuyl8m">
        <dc:Bounds x="830" y="270" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1lbwhsz" bpmnElement="Participant_031en92" isMessageVisible="true" participantBandKind="top_initiating" choreographyActivityShape="ChoreographyTask_0yuyl8m_di">
        <dc:Bounds x="830" y="270" width="100" height="20" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_0qcqva2" bpmnElement="Participant_0fl0qh5" isHorizontal="true" isMessageVisible="true" participantBandKind="bottom_non_initiating" choreographyActivityShape="ChoreographyTask_0yuyl8m_di">
        <dc:Bounds x="830" y="330" width="100" height="20" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_0plizp7_di" bpmnElement="Flow_0plizp7">
        <di:waypoint x="931" y="310" />
        <di:waypoint x="989" y="310" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_170sz1d_di" bpmnElement="Flow_170sz1d">
        <di:waypoint x="771" y="310" />
        <di:waypoint x="829" y="310" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="TextAnnotation_0cmzo3b_di" bpmnElement="TextAnnotation_0cmzo3b">
        <dc:Bounds x="250" y="120" width="100" height="70" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Association_15kh3xo_di" bpmnElement="Association_15kh3xo">
        <di:waypoint x="378" y="269" />
        <di:waypoint x="336" y="190" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="TextAnnotation_0nai09z_di" bpmnElement="TextAnnotation_0nai09z">
        <dc:Bounds x="420" y="120" width="140" height="70" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Association_1px8hv4_di" bpmnElement="Association_1px8hv4">
        <di:waypoint x="539" y="269" />
        <di:waypoint x="498" y="190" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="TextAnnotation_0f1d01n_di" bpmnElement="TextAnnotation_0f1d01n">
        <dc:Bounds x="590" y="121" width="140" height="67" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Association_1fm4bwe_di" bpmnElement="Association_1fm4bwe">
        <di:waypoint x="701" y="269" />
        <di:waypoint x="664" y="188" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="TextAnnotation_0cv8gzz_di" bpmnElement="TextAnnotation_0cv8gzz">
        <dc:Bounds x="760" y="120" width="170" height="68" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Association_05my1d6_di" bpmnElement="Association_05my1d6">
        <di:waypoint x="860" y="269" />
        <di:waypoint x="820" y="190" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="TextAnnotation_0ct19oz_di" bpmnElement="TextAnnotation_0ct19oz">
        <dc:Bounds x="950" y="120" width="150" height="70" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Association_1caacuo_di" bpmnElement="Association_1caacuo">
        <di:waypoint x="1020" y="269" />
        <di:waypoint x="980" y="190" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="TextAnnotation_1fgpm36_di" bpmnElement="TextAnnotation_1fgpm36">
        <dc:Bounds x="1100" y="121" width="170" height="68" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Association_0xzn61a_di" bpmnElement="Association_0xzn61a">
        <di:waypoint x="1180" y="269" />
        <di:waypoint x="1140" y="189" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn2:definitions>


`;