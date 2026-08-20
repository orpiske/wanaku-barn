package ai.wanaku.operator.wanaku;

import java.util.Map;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public final class WanakuTypes {

    private WanakuTypes() {}

    public enum ExposureType {
        ROUTE,
        INGRESS,
        NONE;

        @JsonCreator
        public static ExposureType fromValue(String v) {
            if (v == null) return null;
            for (ExposureType t : values()) {
                if (t.name().equalsIgnoreCase(v)) return t;
            }
            throw new IllegalArgumentException(
                    "Invalid spec.exposure.type '%s'. Valid values: Route, Ingress, None".formatted(v));
        }

        @JsonValue
        public String toValue() {
            return name().toLowerCase();
        }
    }

    public enum TlsTermination {
        EDGE,
        PASSTHROUGH,
        REENCRYPT;

        @JsonCreator
        public static TlsTermination fromValue(String v) {
            if (v == null) return null;
            for (TlsTermination t : values()) {
                if (t.name().equalsIgnoreCase(v)) return t;
            }
            throw new IllegalArgumentException(
                    "Invalid tls.termination '%s'. Valid values: edge, passthrough, reencrypt".formatted(v));
        }

        @JsonValue
        public String toValue() {
            return name().toLowerCase();
        }
    }

    public enum InsecureEdgeTerminationPolicy {
        ALLOW,
        NONE,
        REDIRECT;

        @JsonCreator
        public static InsecureEdgeTerminationPolicy fromValue(String v) {
            if (v == null) return null;
            for (InsecureEdgeTerminationPolicy p : values()) {
                if (p.name().equalsIgnoreCase(v)) return p;
            }
            throw new IllegalArgumentException(
                    "Invalid tls.insecureEdgeTerminationPolicy '%s'. Valid values: Allow, None, Redirect".formatted(v));
        }

        @JsonValue
        public String toValue() {
            String s = name();
            return s.charAt(0) + s.substring(1).toLowerCase();
        }
    }

    public static class EnvVar {
        private String name;
        private String value;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getValue() {
            return value;
        }

        public void setValue(String value) {
            this.value = value;
        }
    }

    public static class ExposureSpec {
        private String host;
        private ExposureType type;
        private String ingressClassName;
        private Map<String, String> annotations;
        private TlsSpec tls;

        public String getHost() {
            return host;
        }

        public void setHost(String host) {
            this.host = host;
        }

        public ExposureType getType() {
            return type;
        }

        public void setType(ExposureType type) {
            this.type = type;
        }

        public String getIngressClassName() {
            return ingressClassName;
        }

        public void setIngressClassName(String ingressClassName) {
            this.ingressClassName = ingressClassName;
        }

        public Map<String, String> getAnnotations() {
            return annotations;
        }

        public void setAnnotations(Map<String, String> annotations) {
            this.annotations = annotations;
        }

        public TlsSpec getTls() {
            return tls;
        }

        public void setTls(TlsSpec tls) {
            this.tls = tls;
        }
    }

    public static class TlsSpec {
        private String secretName;
        private TlsTermination termination;
        private String certificate;
        private String key;
        private String caCertificate;
        private String destinationCACertificate;
        private InsecureEdgeTerminationPolicy insecureEdgeTerminationPolicy;

        public String getSecretName() {
            return secretName;
        }

        public void setSecretName(String secretName) {
            this.secretName = secretName;
        }

        public TlsTermination getTermination() {
            return termination;
        }

        public void setTermination(TlsTermination termination) {
            this.termination = termination;
        }

        public String getCertificate() {
            return certificate;
        }

        public void setCertificate(String certificate) {
            this.certificate = certificate;
        }

        public String getKey() {
            return key;
        }

        public void setKey(String key) {
            this.key = key;
        }

        public String getCaCertificate() {
            return caCertificate;
        }

        public void setCaCertificate(String caCertificate) {
            this.caCertificate = caCertificate;
        }

        public String getDestinationCACertificate() {
            return destinationCACertificate;
        }

        public void setDestinationCACertificate(String destinationCACertificate) {
            this.destinationCACertificate = destinationCACertificate;
        }

        public InsecureEdgeTerminationPolicy getInsecureEdgeTerminationPolicy() {
            return insecureEdgeTerminationPolicy;
        }

        public void setInsecureEdgeTerminationPolicy(InsecureEdgeTerminationPolicy insecureEdgeTerminationPolicy) {
            this.insecureEdgeTerminationPolicy = insecureEdgeTerminationPolicy;
        }
    }
}
