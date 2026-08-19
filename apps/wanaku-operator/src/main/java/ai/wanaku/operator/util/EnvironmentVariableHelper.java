package ai.wanaku.operator.util;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;
import io.fabric8.kubernetes.api.model.EnvVar;
import io.fabric8.kubernetes.api.model.EnvVarBuilder;
import ai.wanaku.core.util.StringHelper;

public final class EnvironmentVariableHelper {

    static final String ANNOTATION_ENV_PREFIX = "env.wanaku.ai/";

    static final Pattern ENV_VAR_NAME_PATTERN = Pattern.compile("[A-Za-z_][A-Za-z0-9_]*");

    private EnvironmentVariableHelper() {}

    public static List<EnvVar> extractAnnotationEnvVars(Map<String, String> annotations) {
        List<EnvVar> result = new ArrayList<>();
        if (annotations == null || annotations.isEmpty()) {
            return result;
        }
        for (Map.Entry<String, String> entry : annotations.entrySet()) {
            if (entry.getKey().startsWith(ANNOTATION_ENV_PREFIX)) {
                String name = entry.getKey().substring(ANNOTATION_ENV_PREFIX.length());
                if (StringHelper.isBlank(name)
                        || !ENV_VAR_NAME_PATTERN.matcher(name).matches()) {
                    continue;
                }
                result.add(new EnvVarBuilder()
                        .withName(name)
                        .withValue(entry.getValue())
                        .build());
            }
        }
        return result;
    }

    public static void applyAnnotationEnvVars(List<EnvVar> envVars, Map<String, String> annotations) {
        List<EnvVar> fromAnnotations = extractAnnotationEnvVars(annotations);
        if (fromAnnotations.isEmpty()) {
            return;
        }
        fromAnnotations.forEach(a -> envVars.removeIf(e -> e.getName().equals(a.getName())));
        envVars.addAll(fromAnnotations);
    }
}
